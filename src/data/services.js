export const services = [
  {
    slug: 'remodels',
    name: 'Remodels',
    shortName: 'Whole-home remodels',
    description:
      'Transform your existing space with expert design and construction.',
    intro:
      'Thoughtful remodeling starts with understanding what is working, what is not, and how your home needs to support everyday life.',
    icon: 'hammer',
    highlights: [
      'Whole-home transformations',
      'Reconfigured living spaces',
      'Coordinated finish updates',
    ],
  },
  {
    slug: 'additions',
    name: 'Additions',
    shortName: 'Room & home additions',
    description:
      'Expand your home with additional space to meet your growing needs.',
    intro:
      'A well-planned addition should feel connected to the home you already love while creating space for what comes next.',
    icon: 'house-plus',
    highlights: [
      'Added living space',
      'Expanded primary suites',
      'Connected indoor-outdoor areas',
    ],
  },
  {
    slug: 'kitchens',
    name: 'Kitchens',
    shortName: 'Kitchen remodeling',
    description:
      'Create a beautiful and functional kitchen that suits your style.',
    intro:
      'The best kitchens balance daily function, durable materials, and a layout that brings people together.',
    icon: 'kitchen',
    highlights: [
      'Layout improvements',
      'Cabinetry and surfaces',
      'Lighting and finish coordination',
    ],
  },
  {
    slug: 'bathrooms',
    name: 'Bathrooms',
    shortName: 'Bathroom remodeling',
    description:
      'Design and build the bathroom of your dreams with expert precision.',
    intro:
      'A successful bathroom remodel makes limited space work harder while delivering the calm, finished feel you want.',
    icon: 'bath',
    highlights: [
      'Primary bathroom updates',
      'Guest and powder rooms',
      'Fixture and finish coordination',
    ],
  },
  {
    slug: 'doors-windows',
    name: 'Doors & Windows',
    shortName: 'Doors & windows',
    description:
      'Install energy-efficient doors and windows that enhance your home.',
    intro:
      'New doors and windows can improve comfort, function, efficiency, and the way a home connects to its surroundings.',
    icon: 'door-open',
    highlights: [
      'Window replacement',
      'Exterior and interior doors',
      'Openings that connect living spaces',
    ],
  },
  {
    slug: 'cabanas',
    name: 'Cabanas',
    shortName: 'Custom cabanas',
    description:
      'Build custom cabanas for your outdoor space, perfect for relaxation.',
    intro:
      'A custom cabana creates a comfortable destination outdoors and gives the landscape a useful architectural anchor.',
    icon: 'cabana',
    highlights: [
      'Covered outdoor rooms',
      'Poolside structures',
      'Entertaining and relaxation spaces',
    ],
  },
  {
    slug: 'decks',
    name: 'Decks',
    shortName: 'Custom decks',
    description: 'Create a stunning outdoor living space with a custom deck.',
    intro:
      'A deck should feel like a natural extension of the home, built for the way you gather, relax, and move outdoors.',
    icon: 'deck',
    highlights: [
      'New deck construction',
      'Deck replacement and updates',
      'Outdoor living connections',
    ],
  },
  {
    slug: 'repairs',
    name: 'Repairs',
    shortName: 'Home repairs',
    description:
      'Get reliable, high-quality repairs for all areas of your home.',
    intro:
      'Careful repair work protects the home, resolves the immediate problem, and restores the surrounding finish with attention to detail.',
    icon: 'wrench',
    highlights: [
      'Interior repairs',
      'Exterior repairs',
      'Ongoing needs for returning clients',
    ],
  },
];

export const getService = slug =>
  services.find(service => service.slug === slug);
