import PageHero from '@/components/ui/PageHero';
import Icon from '@/components/ui/Icon';
import ButtonLink from '@/components/ui/ButtonLink';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description:
    'Call, text, or email Barsell Construction to discuss a residential construction or remodeling project in the Bay Area.',
  alternates: { canonical: '/contact' },
};

const contactItems = [
  {
    icon: 'phone',
    label: 'Call or text',
    value: site.phone.display,
    href: site.phone.href,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: site.email.display,
    href: site.email.href,
  },
  {
    icon: 'map-pin',
    label: 'Based in',
    value: site.location,
    href: 'https://maps.google.com?q=Alamo,+CA',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow='Contact'
        title='Tell us what you’re planning.'
        description='For inquiries, estimates, or a conversation about your project, reach out directly using the information below.'
      />

      <section className='section section--light contact-section'>
        <div className='site-container contact-layout'>
          <div className='contact-list'>
            {contactItems.map(item => (
              <a
                className='contact-item'
                href={item.href}
                key={item.label}
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className='contact-item__icon'>
                  <Icon name={item.icon} />
                </span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>

          <aside className='project-planner'>
            <p className='eyebrow'>Before you reach out</p>
            <h2>A few details help start the conversation.</h2>
            <p>
              You do not need a finished plan. A simple description is enough
              to begin.
            </p>
            <ul className='detail-list'>
              <li>The type of project you are considering</li>
              <li>Your home’s location</li>
              <li>Your priorities for the space</li>
              <li>Any timing or budget considerations</li>
            </ul>
            <div className='button-row'>
              <ButtonLink
                href={site.phone.href}
                className='project-planner__phone'
              >
                Call or text
              </ButtonLink>
              <ButtonLink href={site.email.href} variant='outline'>
                Send an email
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className='section section--orange contact-social'>
        <div className='site-container contact-social__inner'>
          <div>
            <p className='eyebrow'>Follow the work</p>
            <h2>Find Barsell Construction online.</h2>
          </div>
          <div className='social-links'>
            {site.social.map(item => (
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                key={item.label}
              >
                <Icon name={item.icon} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
