import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

type StorageConfig = {
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
