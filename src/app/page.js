import Link from 'next/link';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ContactBand from '@/components/sections/ContactBand';
import { process } from '@/data/principles';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

const HomePage = () => {
  return (
    <>
      <section className='home-hero'>
        <div className='home-hero__grid' aria-hidden='true' />
        <div className='home-hero__shape' aria-hidden='true'>
          <span />
          <span />
        </div>
        <div className='site-container home-hero__inner'>
          <div className='home-hero__content'>
            <p className='eyebrow eyebrow--light'>{site.tagline}</p>
            <h1>Clear plans. Honest work. Lasting craftsmanship.</h1>
            <p className='home-hero__lead'>
              Expert residential construction and remodeling shaped around
              your home, your priorities, and the way you live.
            </p>
            <div className='button-row'>
              <ButtonLink href='/contact'>Start a project</ButtonLink>
              <ButtonLink href='/projects' variant='outline-light'>
                Explore our work
              </ButtonLink>
            </div>
          </div>

          <div className='home-hero__facts' aria-label='Company details'>
            <div>
              <span>Serving</span>
              <strong>The Bay Area</strong>
            </div>
            <div>
              <span>Established</span>
              <strong>Since 1994</strong>
            </div>
            <div>
              <span>Based in</span>
              <strong>Alamo, California</strong>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--light'>
        <div className='site-container'>
          <div className='section-intro-row'>
            <SectionHeading
              eyebrow='What we build'
              title='One trusted partner for the spaces that make a house feel like home.'
              description='From complete remodels to focused repairs, every service is grounded in careful planning, quality work, and clear communication.'
            />
            <ButtonLink href='/services' variant='outline'>
              View all services
            </ButtonLink>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className='section section--ink'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='The Barsell standard'
            title='Built on clear expectations.'
            description='Good construction depends on more than the finished result. It depends on the way the work is handled from the first conversation forward.'
            tone='light'
          />
          <div className='section-action'>
            <ButtonLink
              href='/approach'
              variant='light'
              className='section-action__cta'
            >
              Read our approach
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className='section section--orange process-section'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='How we work'
            title='A straightforward path from conversation to completion.'
          />
          <div className='process-grid'>
            {process.map((item, index) => (
              <article className='process-card' key={item.title}>
                <span className='process-card__number' aria-hidden='true'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section section--light'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='Completed work'
            title='Homes shaped with purpose.'
            description='Explore two complete home remodels and see the details that bring each project together.'
          />
          <div className='project-link-grid'>
            {projects.map(project => (
              <Link
                href={`/projects/${project.slug}`}
                className='project-link-card'
                key={project.slug}
              >
                <img
                  className='project-link-card__image'
                  src={project.cover.src}
                  alt={project.cover.alt}
                />
                <span className='project-link-card__type'>{project.type}</span>
                <strong>{project.name}</strong>
                <span className='text-link'>View project</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
};

export default HomePage;
