// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trazo.digital';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/servicios`, lastModified: new Date() },
    // ...añadir URLs de proyectos dinámicamente
  ];
}
