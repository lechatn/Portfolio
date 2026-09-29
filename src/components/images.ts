import type { ImageMetadata } from 'astro';

// Charge toutes les images de src/assets/images et les retrouve par nom de fichier.
const all = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{png,jpg,svg}', { eager: true });

export function getImage(file: string): ImageMetadata {
  const entry = all[`../assets/images/${file}`];
  if (!entry) throw new Error(`Image introuvable : ${file}`);
  return entry.default;
}
