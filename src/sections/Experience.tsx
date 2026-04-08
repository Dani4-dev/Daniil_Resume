import { useTranslation } from 'react-i18next';
import type { Experience as ExperienceType } from '../types/resume';

export const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience', { returnObjects: true }) as ExperienceType[];

  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold m-0">{t('experience_title')}</h2>
      <div className="space-y-6 text-left">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-2xl border border-(--border) hover:border-(--accent-border) transition-colors flex flex-col gap-1.5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-bold text-(--text-h)">{exp.company}</h3>
                <span className="text-base font-bold text-(--accent)">{exp.title}</span>
              </div>
              <span className="text-sm font-mono opacity-60 md:pt-1 shrink-0 md:text-right whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="text-sm font-medium opacity-70">{exp.position}</p>
            <p className="opacity-80 leading-relaxed mb-1">{exp.description}</p>
            {exp.location && (
              <div className="flex items-center gap-1.5 text-sm font-mono opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-(--accent)">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{exp.location}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
