import { useTranslation } from 'react-i18next';

export const Certifications = () => {
  const { t } = useTranslation();
  const certifications = t('certifications', { returnObjects: true }) as any[];

  return (
    <section id="certifications" className="scroll-mt-24 space-y-10">
      <h2 className="text-3xl font-bold m-0">{t('certifications_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {certifications.map((cert, index) => (
          <div key={index} className="p-6 rounded-2xl border border-(--border) hover:border-(--accent-border) hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-(--text-h)">{cert.title}</h3>
            <p className="font-medium text-(--accent)">{cert.issuer}</p>
            <span className="text-sm font-mono opacity-60">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
