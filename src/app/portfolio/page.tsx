// src/app/(pages)/portfolio/page.tsx
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { createClient } from '@/lib/supabase/client'; // Usaremos el client para SSR también
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Mi Marca',
  description: 'Explora mis últimos proyectos de diseño y desarrollo web.',
};

// Revalidar los datos cada hora para mantener la frescura
export const revalidate = 3600;

export default async function PortfolioPage() {
  const supabase = createClient();
  const { data: projects, error } = await supabase.from('projects').select('*');

  if (error) {
    console.error('Error fetching projects:', error);
    return <p>No se pudieron cargar los proyectos. Inténtalo de nuevo más tarde.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            imageUrl={project.image_url}
            tags={project.tags || []}
          />
        ))}
      </div>
    </main>
  );
}
