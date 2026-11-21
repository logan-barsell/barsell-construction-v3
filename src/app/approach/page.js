import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import ContactBand from '@/components/sections/ContactBand';
import { missionStatements } from '@/data/missionStatements';
import { principles } from '@/data/principles';
import { site } from '@/data/site';

export const metadata = {
  title: 'Our Approach',
  description:
    'Learn about Barsell Construction’s commitment to honest estimates, quality workmanship, open communication, and lasting client relationships.',
  alternates: { canonical: '/approach' },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow='Our approach'
        title='A commitment that extends beyond the build.'
        description='Since 1994, Barsell Construction has approached residential work with honesty, creativity, clear communication, and respect for each client’s priorities.'
      />

      <section className='section section--light'>
        <div className='site-container approach-intro'>
          <div>
            <p className='eyebrow'>The Barsell standard</p>
            <h2>Personal care. Professional expectations.</h2>
          </div>
          <div>
            <p>
              Every home and every client brings a different set of needs. The
              work begins by listening, then setting clear expectations around
              scope, schedule, changes, and budget.
            </p>
            <p>
              That combination of personal attention and disciplined project
              communication is the foundation for quality work and lasting
              relationships.
            </p>
          </div>
        </div>
      </section>

      <section className='section section--ink'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='What guides the work'
            title='Principles you can feel throughout the project.'
            tone='light'
          />
          <div className='principle-grid'>
            {principles.map(principle => (
              <article className='principle-card' key={principle.title}>
                <Icon name={principle.icon} />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='section section--light mission-section'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='Our mission'
            title='The commitments behind every project.'
            description='These principles have long defined the way Barsell Construction works with clients, employees, and the community.'
          />
          <div className='mission-list'>
            {missionStatements.map(statement => (
              <p key={statement}>{statement}</p>
            ))}
          </div>
          <div className='signature-block'>
            <span>A commitment to our clients</span>
            <strong>{site.owner}</strong>
            <small>Owner &amp; Founder</small>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
