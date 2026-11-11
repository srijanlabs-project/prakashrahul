import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

export type StorageConfig = {
  client: S3Client;
  bucket: string;
};

let cached: StorageConfig | null = null;

export function getStorage(): StorageConfig | null {
  if (cached) return cached;

  const endpoint = process.env.S3_ENDPOINT;
  const bucket = process.env.S3_BUCKET;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

  if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) return null;

  cached = {
    bucket,
    client: new S3Client({
      endpoint,
      region: process.env.S3_REGION || "auto",
      forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
      credentials: { accessKeyId, secretAccessKey },
    }),
  };

  return cached;
}

export async function putObject(
  storage: StorageConfig,
  key: string,
  body: Buffer | string,
  contentType: string,
) {
  await storage.client.send(
    new PutObjectCommand({
      Bucket: storage.bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
}

function isMissingObject(error: unknown): boolean {
  const name = (error as { name?: string } | null)?.name;
  const status = (error as { $metadata?: { httpStatusCode?: number } } | null)?.$metadata
    ?.httpStatusCode;
  return name === "NoSuchKey" || name === "NotFound" || status === 404;
}

/** Returns the object's text, or null when the object does not exist. */
export async function getObjectText(
  storage: StorageConfig,
  key: string,
): Promise<string | null> {
  try {
    const result = await storage.client.send(
      new GetObjectCommand({ Bucket: storage.bucket, Key: key }),
    );
    return (await result.Body?.transformToString()) ?? null;
  } catch (error) {
    if (isMissingObject(error)) return null;
    throw error;
  }
}

/** Returns the object's bytes with its metadata, or null when it does not exist. */
export async function getObjectBytes(storage: StorageConfig, key: string) {
  try {
    const result = await storage.client.send(
      new GetObjectCommand({ Bucket: storage.bucket, Key: key }),
    );
    if (!result.Body) return null;
    return {
      bytes: await result.Body.transformToByteArray(),
      contentType: result.ContentType ?? "application/octet-stream",
    };
  } catch (error) {
    if (isMissingObject(error)) return null;
    throw error;
  }
}

/** Lists every key under a prefix, following pagination. */
export async function listKeys(storage: StorageConfig, prefix: string): Promise<string[]> {
  const keys: string[] = [];
  let continuationToken: string | undefined;

  do {
    const page = await storage.client.send(
      new ListObjectsV2Command({
        Bucket: storage.bucket,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    );
    for (const item of page.Contents ?? []) {
      if (item.Key) keys.push(item.Key);
    }
    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (continuationToken);

  return keys;
}
