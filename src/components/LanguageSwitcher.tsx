import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Вспомогательный компонент для отображения флага-эмодзи через Twemoji
const EmojiFlag = ({ code, alt }: { code: string; alt: string }) => (
  <img 
    src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${code}.svg`}
    className="w-5 h-5 object-contain"
    alt={alt}
    draggable={false}
  />
);

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    // Коды для Twemoji: 1f1ec-1f1e7 (GB), 1f1f7-1f1fa (RU)
    { code: 'en', label: 'English', flag: <EmojiFlag code="1f1ec-1f1e7" alt="UK" /> },
    { code: 'ru', label: 'Русский', flag: <EmojiFlag code="1f1f7-1f1fa" alt="RU" /> },
    { code: 'ja', label: '日本語', flag: <EmojiFlag code="1f1ef-1f1f5" alt="JP" /> },
  ];

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  // Закрываем выпадающий список при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex items-center justify-center gap-x-2 rounded-2xl bg-(--bg) px-4 py-2 text-sm font-semibold text-(--text-h) shadow-sm ring-1 ring-inset ring-(--border) hover:bg-(--accent-bg) hover:ring-(--accent) transition-all duration-200"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center gap-2">
            <span className="uppercase font-mono tracking-wider">{currentLanguage.code}</span>
            <div className="flex items-center leading-none">{currentLanguage.flag}</div>
          </div>
          <svg 
            className={`h-4 w-4 text-(--text) group-hover:text-(--accent) transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-50 mt-2 w-32 origin-top rounded-2xl bg-(--bg) shadow-xl ring-1 ring-(--border) focus:outline-none overflow-hidden animate-in fade-in zoom-in-95 duration-100"
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-sm text-center transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-(--accent-bg) text-(--accent) font-bold'
                    : 'text-(--text) hover:bg-(--code-bg) hover:text-(--text-h)'
                }`}
                role="menuitem"
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{lang.label}</span>
                  <div className="flex items-center leading-none">{lang.flag}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};