import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../types/resume';

export const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="scroll-mt-24 space-y-16">
      <h2 className="text-3xl font-bold m-0">{t('projects_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
