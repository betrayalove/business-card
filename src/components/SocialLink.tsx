import React, { useState } from 'react';
import styles from './SocialLink.module.css';
import Toast from './Toast';
import { useTranslation } from '@/hooks/useTranslation';

interface SocialLinkProps {
  platform: string;
  platformKey: string;
  url?: string;
  username: string;
  icon: React.ReactNode;
  copyable?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platformKey, url, username, icon, copyable = false }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(username);
      setToastVisible(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleLinkClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const translatedPlatform = t(platformKey);

  return (
    <>
      <div 
        className={`${styles.socialLink} ${url ? styles.clickable : ''}`}
        onClick={url ? handleLinkClick : undefined}
      >
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <span className={styles.usernameContainer}>
          <span className={styles.platformName}>{translatedPlatform}:</span>
          <span 
            className={`${styles.username} ${copyable ? styles.copyable : ''}`}
            onClick={copyable ? handleCopy : undefined}
            title={copyable ? 'Click to copy username' : undefined}
          >
            {username}
          </span>
        </span>
      </div>
      <Toast 
        message={`${username} скопирован!`}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
};

export default SocialLink;
