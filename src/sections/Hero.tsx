import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { CVModal } from '../components/CVModal';

export const Hero = () => {
  const { t } = useTranslation();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <section className="space-y-8 relative">
      {/* Статичное свечение за именем */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-(--accent) opacity-15 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="flex flex-col md:flex-row-reverse items-center md:justify-center gap-6 md:gap-12 relative z-10">
        {/* Контейнер для фото со свечением снизу */}
        <div className="relative shrink-0 overflow-visible">
          <div className="laser-line-core" />
          <div className="laser-line-glow" />
          
          {/* Рассеянное свечение (Bloom) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[160%] h-20 bg-(--accent) opacity-30 blur-3xl z-10" />
          
          <img
            src={t('photo_path')}
            alt={t('name')}
            className="w-40 md:w-64 h-auto block relative z-10 photo-drop-shadow"
          />
        </div>

        <header className="space-y-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-(--accent-bg) text-(--accent) border border-(--accent-border)">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent)"></span>
              </span>
              {t('status_open_to_work')}
            </span>
          </div>
          <h1 className="leading-tight m-0">{t('name')}</h1>
          <p className="text-xl opacity-80 font-mono">{t('role')}</p>
        </header>
      </div>

      <div className="p-6 rounded-3xl border border-(--border) bg-(--social-bg) backdrop-blur-sm shadow-sm relative z-10 text-center md:text-left">
        <p className="leading-relaxed text-lg">{t('about')}</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center pt-2">
        <button 
          onClick={() => setIsCVModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-(--accent) text-white font-medium hover:scale-105 transition-transform shadow-lg inline-block cursor-pointer"
        >
          {t('download_cv')}
        </button>
        <a 
          href={`mailto:${t('email')}`} 
          className="px-8 py-4 rounded-2xl border border-(--border) hover:bg-(--code-bg) transition-colors inline-block"
        >
          {t('contact')}
        </a>
        <a
          href={t('github_link')}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl border border-(--border) hover:bg-(--code-bg) transition-colors inline-block"
        >
          GitHub
        </a>
      </div>

      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </section>
  );
};