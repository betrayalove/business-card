import { useState, useEffect } from 'react';

export type Language = 'ru' | 'en' | 'zh';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
    zh: string;
  };
}

const translations: Translations = {
  greeting: {
    ru: 'Привет! 👋',
    en: 'Hello! 👋',
    zh: '你好！👋'
  },
  personalInfo: {
    ru: 'Меня зовут Кирилл, я из России, мне',
    en: 'I\'m Kirill from Russia, I am',
    zh: '我是基里尔，来自俄罗斯，我'
  },
  aboutMe: {
    ru: 'Увлекаюсь созданием веб-приложений, изучением новых технологий и написанием музыки. Всегда открыт для интересных проектов и новых знакомств!',
    en: 'Passionate about creating web applications, exploring new technologies, and composing music. Always open to exciting projects and new connections!',
    zh: '热衷于创建网络应用程序、探索新技术和创作音乐。总是乐于接受令人兴奋的项目和新的联系！'
  },
  connectWithMe: {
    ru: 'Связаться со мной',
    en: 'Connect with me',
    zh: '联系我'
  },
  copyTooltip: {
    ru: 'Нажмите, чтобы скопировать',
    en: 'Click to copy',
    zh: '点击复制'
  },
  // Social networks
  vkontakte: {
    ru: 'вконтакте',
    en: 'vkontakte',
    zh: 'vkontakte'
  },
  instagram: {
    ru: 'Instagram',
    en: 'Instagram',
    zh: 'Instagram'
  },
  telegram: {
    ru: 'Telegram',
    en: 'Telegram',
    zh: 'Telegram'
  },
  wechat: {
    ru: 'Wechat',
    en: 'Wechat',
    zh: '微信'
  },
  gmail: {
    ru: 'Gmail',
    en: 'Gmail',
    zh: 'Gmail'
  },
  github: {
    ru: 'GitHub',
    en: 'GitHub',
    zh: 'GitHub'
  },
  youtube: {
    ru: 'YouTube',
    en: 'YouTube',
    zh: 'YouTube'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['ru', 'en', 'zh'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const getYearsWord = (age: number): string => {
    if (language === 'ru') {
      const lastDigit = age % 10;
      const lastTwoDigits = age % 100;
      
      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'лет';
      } else if (lastDigit === 1) {
        return 'год';
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'года';
      } else {
        return 'лет';
      }
    } else if (language === 'en') {
      return 'years old';
    } else {
      return '岁';
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { language, changeLanguage, t, getYearsWord };
};
