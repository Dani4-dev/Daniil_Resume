import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#top', label: t('nav_top') },
    { href: '#skills', label: t('skills_title') },
    { href: '#experience', label: t('experience_title') },
    { href: '#education', label: t('education_title') },
    { href: '#certifications', label: t('certifications_title') },
    { href: '#projects', label: t('projects_title') },
    { href: '#hobbies', label: t('hobbies_title') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-(--border) bg-(--bg)/80 backdrop-blur-md transition-all">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
        {/* Левая часть: кнопка меню на мобилках / пустой блок для баланса на десктопе */}
        <div className="flex-1 flex items-center">
          <button 
            className="md:hidden p-2 -ml-2 text-(--text-h) hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Центральная часть: ссылки на десктопе и заголовок на мобилках */}
        <div className="flex items-center justify-center">
          <div className="md:hidden font-bold text-(--text-h)">
            {t('resume_title')}
          </div>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-(--accent) transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Правая часть: переключатель языка */}
        <div className="flex-1 flex justify-end items-center">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`
        md:hidden absolute top-16 left-0 w-full bg-(--bg)/95 backdrop-blur-lg border-b border-(--border) transition-all duration-300 ease-in-out z-50
        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 gap-4 text-left">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-(--text-h) hover:text-(--accent) transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
