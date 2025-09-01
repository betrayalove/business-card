import React from 'react';
import styles from './LanguageToggle.module.css';

interface LanguageToggleProps {
  currentLanguage: 'ru' | 'en' | 'zh';
  onLanguageChange: (lang: 'ru' | 'en' | 'zh') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'ru' as const, label: 'RU', flag: 'RU' },
    { code: 'en' as const, label: 'EN', flag: 'EN' },
    { code: 'zh' as const, label: '中', flag: 'ZH' }
  ];

  return (
    <div className={styles.languageToggle}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.langButton} ${currentLanguage === lang.code ? styles.active : ''}`}
          onClick={() => onLanguageChange(lang.code)}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className={styles.label}>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
