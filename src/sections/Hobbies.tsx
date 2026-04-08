import { useTranslation } from 'react-i18next';

export const Hobbies = () => {
  const { t } = useTranslation();
  const hobbies = t('hobbies', { returnObjects: true }) as string[];

  return (
    <section id="hobbies" className="scroll-mt-24 space-y-10">
      <h2 className="text-3xl font-bold m-0">{t('hobbies_title')}</h2>
      <div className="p-6 md:p-8 rounded-3xl border border-(--border) bg-(--social-bg) backdrop-blur-sm hover:border-(--accent-border) transition-all duration-300">
        <div className="flex flex-wrap gap-3 justify-center">
          {hobbies.map((hobby, index) => (
            <span key={index} className="px-4 py-2 rounded-xl bg-(--code-bg) text-(--text-h) border border-(--border) text-sm font-medium">
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
