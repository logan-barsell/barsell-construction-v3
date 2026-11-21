import '../../styles/globals.css';

import { Roboto, Alegreya_SC } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/data/site';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});
const alegreyaSC = Alegreya_SC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [{ url: '/images/OG.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/images/OG.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/favicons/favicon.ico' },
      {
        url: '/images/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/images/favicons/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: site.name,
    image: `${site.url}/images/OG.png`,
    logo: `${site.url}/images/logos/bclogo.png`,
    url: site.url,
    telephone: '+1-925-260-4331',
    email: site.email.display,
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alamo',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Place',
      name: site.serviceArea,
    },
    description: site.description,
    sameAs: site.social.map(item => item.href),
  };

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${alegreyaSC.variable}`}>
        <a className='skip-link' href='#main-content'>
          Skip to content
        </a>
        <Header />
        <main id='main-content'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
