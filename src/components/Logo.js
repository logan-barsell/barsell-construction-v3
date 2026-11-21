import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';

export default function Logo() {
  return (
    <Link className='brand' href='/' aria-label={`${site.name} home`}>
      <Image
        src='/images/logos/bclogo.png'
        alt=''
        width={72}
        height={63}
        className='brand__mark'
        priority
      />
      <span className='brand__type'>
        <span>Barsell</span>
        <span>Construction Inc.</span>
      </span>
    </Link>
  );
}
