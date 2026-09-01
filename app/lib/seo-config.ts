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
  "Rahul Prakash | Product & Platform Leader, 0→1 SaaS";
export const SITE_DESCRIPTION =
  "Rahul Prakash is a product and platform leader with 20+ years building and scaling SaaS, retail, commerce, and supply chain platforms from 0→1.";

export const SITE_KEYWORDS = [
  "Rahul Prakash",
  "Rahul Prakash Product Leader",
  "0 to 1 Product Building",
  "Product & Platform Leader",
  "Enterprise SaaS Product Leader",
  "AI Workflow Platforms",
  "Business Technology Leadership",
  "Platform Architecture Strategy",
  "Product Consultant",
  "Digital Commerce Strategy",
  "Supply Chain Platforms",
  "AI Product Development",
  "Retail Technology",
  "Omnichannel Commerce",
  "Product Leadership India",
];

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);
