import { useTranslation } from 'react-i18next';
import type { Project } from '../types/resume';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-6 rounded-3xl border border-(--border) bg-(--social-bg) shadow-sm space-y-2 hover:border-(--accent-border) hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-(--text-h) flex items-center gap-2">
        {project.title}
        {project.isInDevelopment && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-(--accent-bg) text-(--accent) border border-(--accent-border) shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent)"></span>
            </span>
            {t('status_in_development')}
          </span>
        )}
      </h3> 
      <p className="text-sm opacity-80 text-left">{project.description}</p>
      <div className="flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-(--accent-bg) text-(--accent) border border-(--accent-border) font-semibold">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};