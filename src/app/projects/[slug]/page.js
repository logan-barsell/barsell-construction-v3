import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ContactBand from '@/components/sections/ContactBand';
import { getProject, projects } from '@/data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} Project`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      images: [{ url: project.cover.src }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.type}
        title={project.name}
        description={project.description}
      />

      <section className='project-meta'>
        <div className='site-container project-meta__inner'>
          <div>
            <span>Project</span>
            <strong>{project.name}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{project.type}</strong>
          </div>
          <div>
            <span>Region</span>
            <strong>{project.location}</strong>
          </div>
          <Link href='/projects'>All projects</Link>
        </div>
      </section>

      <section className='section section--light project-gallery-section'>
        <div className='site-container'>
          <ProjectGallery images={project.images} projectName={project.name} />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
