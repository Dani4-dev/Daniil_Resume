import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-(--border) bg-(--bg)/80 backdrop-blur-md py-12 mt-auto">
      <div className="max-w-5xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-sm opacity-60">
        <div className="md:flex-1 text-center md:text-left md:whitespace-nowrap">
          <p className="font-bold text-(--text-h) opacity-100">{t('name')}</p>
          <p>© {currentYear} {t('resume_title')}</p>
        </div>

        <div className="md:flex-1 text-center md:whitespace-nowrap">
          <p className="font-bold text-(--text-h) opacity-100 mb-1">{t('contact')}</p>
          <a href={`mailto:${t('email')}`} className="hover:text-(--accent) transition-colors">
            {t('email')}
          </a>
        </div>

        <div className="md:flex-1 text-center md:text-right font-mono md:whitespace-nowrap">
          <p>{t('footer_built_with')}</p>
          <p className="text-[10px] uppercase tracking-widest mt-1">
            Deployed via Vercel / {' '}
            <a href={t('github_link')} target="_blank" rel="noopener noreferrer" className="hover:text-(--accent) transition-colors">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};