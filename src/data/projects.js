import { happyValley, remington } from './gallery';

export const projects = [
  {
    slug: 'remington',
    name: 'Remington',
    type: 'Complete Home Remodel',
    location: 'Bay Area',
    description:
      'A complete home remodel documented from exterior spaces through the finished interiors.',
    cover: remington[0],
    images: remington,
  },
  {
    slug: 'happy-valley',
    name: 'Happy Valley',
    type: 'Complete Home Remodel',
    location: 'Bay Area',
    description:
      'A complete home remodel with a broad collection of exterior and interior project details.',
    cover: happyValley[0],
    images: happyValley,
  },
];

export const getProject = slug =>
  projects.find(project => project.slug === slug);
