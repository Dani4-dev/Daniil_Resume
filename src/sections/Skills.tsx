import { useTranslation } from 'react-i18next';
import { SkillSection } from '../components/SkillSection';
import type { SkillGroup } from '../types/resume';

export const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true }) as SkillGroup[];

  return (
    <section id="skills" className="scroll-mt-24 space-y-16">
      <h2 className="text-3xl font-bold m-0">{t('skills_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl border border-(--border) hover:border-(--accent-border) hover:shadow-lg transition-all duration-300 text-left"
          >
            <SkillSection group={group} />
          </div>
        ))}
      </div>
    </section>
  );
};
