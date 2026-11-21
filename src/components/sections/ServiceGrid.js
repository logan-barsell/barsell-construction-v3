import Link from 'next/link';
import { services } from '@/data/services';
import Icon from '@/components/ui/Icon';

export default function ServiceGrid({ limit }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className='service-grid'>
      {items.map(service => (
        <Link
          className='service-card'
          href={`/services/${service.slug}`}
          key={service.slug}
        >
          <span className='service-card__icon'>
            <Icon name={service.icon} />
          </span>
          <span className='service-card__body'>
            <span className='service-card__title'>{service.name}</span>
            <span className='service-card__description'>
              {service.description}
            </span>
            <span className='text-link'>Explore service</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
