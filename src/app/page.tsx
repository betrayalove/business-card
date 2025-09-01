'use client';

import React from 'react';
import styles from './page.module.css';
import SocialLink from '@/components/SocialLink';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from '@/hooks/useTranslation';
import {
  VKIcon,
  InstagramIcon,
  TelegramIcon,
  WeChatIcon,
  GmailIcon,
  GitHubIcon,
  YouTubeIcon
} from '@/components/SocialIcons';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const { language, changeLanguage, t, getYearsWord } = useTranslation();


  // Calculate age based on birthdate (09.06.2002)
  const calculateAge = () => {
    const birthDate = new Date(2002, 5, 9); // Month is 0-indexed
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const socialLinks = [
    {
      platform: 'VKontakte',
      platformKey: 'vkontakte',
      url: 'https://vk.com/betrayalove',
      username: 'betrayalove',
      icon: <VKIcon />,
      copyable: true
    },
    {
      platform: 'Instagram',
      platformKey: 'instagram',
      url: 'https://www.instagram.com/betrayalove/',
      username: '@betrayalove',
      icon: <InstagramIcon />,
      copyable: true
    },
    {
      platform: 'Telegram',
      platformKey: 'telegram',
      url: 'https://t.me/lifevainer',
      username: '@lifevainer',
      icon: <TelegramIcon />,
      copyable: true
    },
    {
      platform: 'WeChat',
      platformKey: 'wechat',
      url: 'weixin://dl/chat?betrayalove',
      username: 'betrayalove',
      icon: <WeChatIcon />,
      copyable: true
    },
    {
      platform: 'Gmail',
      platformKey: 'gmail',
      url: 'mailto:betrayalove1@gmail.com',
      username: 'betrayalove1@gmail.com',
      icon: <GmailIcon />,
      copyable: true
    },
    {
      platform: 'GitHub',
      platformKey: 'github',
      url: 'https://github.com/betrayalove',
      username: 'betrayalove',
      icon: <GitHubIcon />,
      copyable: true
    },
    {
      platform: 'YouTube',
      platformKey: 'youtube',
      url: 'https://www.youtube.com/@betrayalove6390',
      username: '@betrayalove6390',
      icon: <YouTubeIcon />,
      copyable: true
    }
  ];

  return (
    <div className={styles.container}>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <LanguageToggle currentLanguage={language} onLanguageChange={changeLanguage} />
      
      <main className={styles.main}>
        <div className={styles.profileSection}>
          <div className={styles.avatar}>
            <img 
              src="/business-card/my-photo.png" 
              alt="Kirill's photo" 
              className={styles.profilePhoto}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className={styles.avatarPlaceholder} style={{display: 'none'}}>
              <span>К</span>
            </div>
          </div>
          
          <div className={styles.bio}>
            <h1 className={styles.greeting}>
              {t('greeting')}
            </h1>
            <p className={styles.personalInfo}>
              {t('personalInfo')} {calculateAge()} {getYearsWord(calculateAge())}
            </p>
            <p className={styles.aboutMe}>
              {t('aboutMe')}
            </p>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>{t('connectWithMe')}</h2>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={`${index}-${language}`}
                platform={link.platform}
                platformKey={link.platformKey}
                url={link.url}
                username={link.username}
                icon={link.icon}
                copyable={link.copyable}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
