import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ContactBand from '@/components/sections/ContactBand';

export const metadata = {
  title: 'Construction & Remodeling Services',
  description:
    'Explore remodeling, additions, kitchens, bathrooms, doors and windows, cabanas, decks, and repair services from Barsell Construction.',
  alternates: { canonical: '/services' },
};

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow='Services'
        title='Built around your home and the way you want to live.'
        description='From complete remodels to the details that make a space work better, Barsell Construction brings care, clarity, and craftsmanship to every project.'
      />

      <section className='section section--light'>
        <div className='site-container'>
          <SectionHeading
            eyebrow='Residential construction'
            title='Focused expertise for every part of the home.'
            description='Select a service to learn more about the work and start a conversation about your project.'
          />
          <ServiceGrid />
        </div>
      </section>

      <ContactBand />
    </>
  );
};

export default ServicesPage;
