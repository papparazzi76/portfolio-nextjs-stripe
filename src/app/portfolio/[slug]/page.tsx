// src/app/(pages)/portfolio/[slug]/page.tsx
import { createClient } from '@/lib/supabase/client';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

// Generar metadatos dinámicos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient();
  const { data: project } = await supabase
    .from('projects')
    .select('title, description, image_url')
    .eq('slug', params.slug)
    .single();

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description || '',
      images: [
        {
          url: project.image_url || '',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  // Lógica para obtener y mostrar los detalles del proyecto
  // ...
  return <div>Detalles del proyecto {params.slug}</div>;
}
