import ProjectsPage, { metadata as projectsMetadata } from '../projects/page';

export const metadata = {
  ...projectsMetadata,
  alternates: { canonical: '/projects' },
};

export default ProjectsPage;
