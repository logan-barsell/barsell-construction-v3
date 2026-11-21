import Link from 'next/link';
import Logo from './Logo';
import Icon from './ui/Icon';
import { navigation, site } from '@/data/site';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='site-container site-footer__grid'>
        <div className='site-footer__brand'>
          <Logo />
          <p>
            Building and remodeling homes across the Bay Area with honesty,
            clear communication, and care.
          </p>
          <p className='site-footer__since'>Serving the Bay Area since 1994.</p>
        </div>

        <div>
          <p className='footer-heading'>Explore</p>
          <ul className='footer-links'>
            {navigation.map(item => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='site-footer__contact'>
          <p className='footer-heading'>Contact</p>
          <ul className='footer-links'>
            <li>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <a href={site.email.href}>{site.email.display}</a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>

        <div>
          <p className='footer-heading'>Connect</p>
          <ul className='footer-links'>
            {site.social.map(item => (
              <li key={item.label}>
                <a
                  className='footer-social-link'
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon name={item.icon} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='site-container site-footer__legal'>
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
