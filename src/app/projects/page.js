import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import ContactBand from '@/components/sections/ContactBand';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description:
    'Explore complete home remodel projects by Barsell Construction in the Bay Area.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow='Completed work'
        title='The details tell the story.'
        description='Explore complete home remodels and see how each space comes together, from the exterior through the finished interiors.'
      />

      <section className='section section--light'>
        <div className='site-container project-index'>
          {projects.map((project, index) => (
            <article
              className={`project-feature ${index % 2 ? 'project-feature--reverse' : ''}`}
              key={project.slug}
            >
              <Link
                href={`/projects/${project.slug}`}
                className='project-feature__image'
                aria-label={`View ${project.name} project`}
              >
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={1000}
                  height={750}
                  sizes='(max-width: 800px) 100vw, 55vw'
                  priority={index === 0}
                />
              </Link>
              <div className='project-feature__content'>
                <p className='eyebrow'>{project.type}</p>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <Link className='button button--outline' href={`/projects/${project.slug}`}>
                  <span>View project</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
