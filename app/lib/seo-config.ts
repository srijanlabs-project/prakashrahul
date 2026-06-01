const FALLBACK_SITE_URL = "https://example.com";

function normalizeSiteUrl(rawUrl?: string): string {
  if (!rawUrl) return FALLBACK_SITE_URL;

  const trimmedUrl = rawUrl.trim();
  if (!trimmedUrl) return FALLBACK_SITE_URL;

  const withProtocol = /^https?:\/\//i.test(trimmedUrl)
    ? trimmedUrl
    : `https://${trimmedUrl}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_NAME = "Rahul Prakash";
export const SITE_TITLE =
  "Rahul Prakash | Product Management Leader, Digital Commerce & AI Strategy";
export const SITE_DESCRIPTION =
  "Rahul Prakash is a Product Management and Digital Commerce leader helping businesses build high-scale platforms, AI-powered products, and growth-focused product strategies.";

export const SITE_KEYWORDS = [
  "Rahul Prakash",
  "Rahul Prakash Product Management",
  "Product Management Leader",
  "Product Consultant",
  "Digital Commerce Strategy",
  "AI Product Development",
  "Retail Technology",
  "Omnichannel Commerce",
  "Product Strategy",
  "Product Leadership India",
];

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);
