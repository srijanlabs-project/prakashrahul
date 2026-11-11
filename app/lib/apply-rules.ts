export const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d][\d\s().-]{6,19}$/;

export type ApplyFields = {
  name: string;
  email: string;
  phone: string;
  role: string;
};

export function validateFields(fields: ApplyFields): string | null {
  if (fields.name.length < 2 || fields.name.length > 100) {
    return "Please enter your full name.";
  }
  if (!EMAIL_PATTERN.test(fields.email) || fields.email.length > 200) {
    return "Please enter a valid email address.";
  }
  if (!PHONE_PATTERN.test(fields.phone)) {
    return "Please enter a valid phone number.";
  }
  if (fields.role.length < 2 || fields.role.length > 100) {
    return "Please tell us which role you are applying for.";
  }
  return null;
}

export function validateResumeMeta(file: { name: string; size: number }): string | null {
  if (file.size === 0) return "The resume file is empty.";
  if (file.size > MAX_RESUME_BYTES) return "The resume must be 5 MB or smaller.";
  if (!file.name.toLowerCase().endsWith(".pdf")) return "The resume must be a PDF file.";
  return null;
}
