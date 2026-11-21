import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const pages = ['', '/services', '/projects', '/approach', '/contact'];
  const routes = [
    ...pages,
    ...services.map(service => `/services/${service.slug}`),
    ...projects.map(project => `/projects/${project.slug}`),
  ];

  return routes.map(route => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }));
}
