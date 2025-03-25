// src/utils/nameToFilename.ts
export function nameToFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/gi, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
}
