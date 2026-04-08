import { useTranslation } from 'react-i18next';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmojiFlag = ({ code, alt }: { code: string; alt: string }) => (
  <img 
    src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${code}.svg`}
    className="w-6 h-6 object-contain"
    alt={alt}
  />
);

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-(--bg) border border-(--border) p-8 rounded-3xl shadow-2xl max-w-sm w-full space-y-6 animate-in zoom-in-95 fade-in duration-200">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-(--text-h)">{t('cv_modal_title')}</h3>
          <button onClick={onClose} className="p-2 hover:bg-(--accent-bg) rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="grid gap-3">
          {/* English CV */}
          <a
            href={t('cv_en_path')}
            download
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-2xl bg-(--social-bg) border border-(--border) hover:border-(--accent-border) hover:bg-(--accent-bg) group transition-all"
          >
            <div className="flex items-center gap-3">
              <EmojiFlag code="1f1ec-1f1e7" alt="EN" />
              <span className="font-semibold text-(--text-h)">{t('cv_en_label')}</span>
            </div>
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-(--accent)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </a>

          {/* Japanese CV */}
          <a
            href={t('cv_ja_path')}
            download
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-2xl bg-(--social-bg) border border-(--border) hover:border-(--accent-border) hover:bg-(--accent-bg) group transition-all"
          >
            <div className="flex items-center gap-3">
              <EmojiFlag code="1f1ef-1f1f5" alt="JP" />
              <span className="font-semibold text-(--text-h)">{t('cv_ja_label')}</span>
            </div>
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-(--accent)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};
