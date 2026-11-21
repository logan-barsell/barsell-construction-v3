import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import ButtonLink from '@/components/ui/ButtonLink';
import ContactBand from '@/components/sections/ContactBand';
import Icon from '@/components/ui/Icon';
import { getService, services } from '@/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.shortName,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = services.filter(item => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow='Residential service'
        title={service.name}
        description={service.description}
      />

      <section className='section section--light'>
        <div className='site-container service-detail'>
          <div className='service-detail__icon'>
            <Icon name={service.icon} />
          </div>
          <div className='service-detail__content'>
            <p className='eyebrow'>Built for your home</p>
            <h2>{service.intro}</h2>
            <p>
              Every project begins with a careful conversation about the space,
              your goals, and the details that matter most. From there, clear
              expectations and open communication help keep the work aligned.
            </p>
            <ul className='detail-list'>
              {service.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ButtonLink href='/contact'>Discuss this service</ButtonLink>
          </div>
        </div>
      </section>

      <section className='section section--orange'>
        <div className='site-container'>
          <p className='eyebrow'>Related services</p>
          <h2 className='compact-heading'>More ways we can help.</h2>
          <div className='related-grid'>
            {related.map(item => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <Icon name={item.icon} />
                <strong>{item.name}</strong>
                <span>Explore service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
