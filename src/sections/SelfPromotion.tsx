import { useTranslation } from 'react-i18next';

export const SelfPromotion = () => {
  const { t } = useTranslation();

  return (
    <section id="self-promotion" className="scroll-mt-24 space-y-10">
      <h2 className="text-3xl font-bold m-0">{t('self_promotion_title')}</h2>
      <div className="p-6 md:p-8 rounded-3xl border border-(--border) bg-(--social-bg) backdrop-blur-sm hover:border-(--accent-border) hover:shadow-lg transition-all duration-300">
        <p className="text-lg leading-relaxed text-left opacity-90">
          {t('self_promotion_text')}
        </p>
      </div>
    </section>
  );
};
