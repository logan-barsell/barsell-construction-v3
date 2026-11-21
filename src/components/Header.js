'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from '@/components/ui/Icon';
import { navigation, site } from '@/data/site';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const isActive = href =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className='site-header'>
      <div className='site-container site-header__inner'>
        <Logo />

        <nav
          id='primary-navigation'
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label='Primary navigation'
        >
          <ul>
            {navigation.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? 'is-active' : ''}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a className='site-nav__phone' href={site.phone.href}>
            <Icon name='phone' />
            <span>{site.phone.display}</span>
          </a>
        </nav>

        <button
          type='button'
          className='menu-toggle'
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls='primary-navigation'
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
