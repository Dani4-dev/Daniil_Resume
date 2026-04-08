import { useTranslation } from 'react-i18next';
import type { Education as EducationType } from '../types/resume';

export const Education = () => {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true }) as EducationType[];

  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold m-0">{t('education_title')}</h2>
      <div className="space-y-6 text-left">
        {education.map((edu, index) => (
          <div key={index} className="p-6 rounded-2xl border border-(--border) hover:border-(--accent-border) transition-colors flex flex-col gap-1.5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-bold text-(--text-h)">{edu.school}</h3>
                {edu.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-(--accent-bg) text-(--accent) border border-(--accent-border) shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent)"></span>
                    </span>
                    {t('status_studying')}
                  </span>
                )}
              </div>
              <span className="text-sm font-mono opacity-60 md:pt-1 shrink-0 md:text-right whitespace-nowrap">{edu.duration}</span>
            </div>
            <p className="font-medium text-(--accent)">
              {edu.degree}
              {edu.degreeTitle && <span className="opacity-70 font-normal text-(--text)"> — {edu.degreeTitle}</span>}
            </p>
            {edu.location && (
              <div className="flex items-center gap-1.5 text-sm font-mono opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-(--accent)"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{edu.location}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
