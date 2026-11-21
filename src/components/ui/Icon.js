import {
  LuBath,
  LuClipboardCheck,
  LuDoorOpen,
  LuHammer,
  LuHandshake,
  LuHousePlus,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMessagesSquare,
  LuPhone,
  LuWrench,
  LuX,
} from 'react-icons/lu';
import { FaFacebookF, FaHouzz, FaLinkedinIn } from 'react-icons/fa';

function KitchenIcon({ className = '', ...props }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M3 10h18v10H3Z' />
      <path d='M8 10v2a4 4 0 0 0 8 0v-2' />
      <path d='M12 10V7a2 2 0 0 1 2-2h2v2' />
      <path d='M12 16v4' />
    </svg>
  );
}

function CabanaIcon({ className = '', ...props }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M2 10 12 3l10 7H2Z' />
      <path d='M6 10v11M18 10v11' />
      <rect x='8' y='16' width='8' height='4' rx='0.75' />
      <path d='M3 21h18' />
    </svg>
  );
}

function DeckIcon({ className = '', ...props }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M3 7h18' />
      <path d='M4 7v5M9 7v5M15 7v5M20 7v5' />
      <path d='M3 12h18l2 7H1l2-7Z' />
      <path d='M8 12 7 19M12 12v7M16 12l1 7' />
      <path d='M5 19v2M19 19v2' />
    </svg>
  );
}

const icons = {
  bath: LuBath,
  cabana: CabanaIcon,
  'clipboard-check': LuClipboardCheck,
  deck: DeckIcon,
  'door-open': LuDoorOpen,
  facebook: FaFacebookF,
  hammer: LuHammer,
  handshake: LuHandshake,
  'house-plus': LuHousePlus,
  kitchen: KitchenIcon,
  houzz: FaHouzz,
  linkedin: FaLinkedinIn,
  mail: LuMail,
  'map-pin': LuMapPin,
  menu: LuMenu,
  messages: LuMessagesSquare,
  phone: LuPhone,
  wrench: LuWrench,
  close: LuX,
};

export default function Icon({ name, className = '', ...props }) {
  const Component = icons[name] || LuHammer;
  return <Component className={className} aria-hidden='true' {...props} />;
}
