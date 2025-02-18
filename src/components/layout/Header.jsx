import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.notificationIcon}>
        <BellIcon className="w-6 h-6 text-white cursor-pointer" />
        <span className={styles.notificationBadge}>
          3
        </span>
      </div>

      <div className={styles.profileSection}>
        <span className={styles.adminName}>John Doe</span>
        <div className={styles.profilePicture}>
          <UserCircleIcon className="w-10 h-10 text-white" />
        </div>
        <button className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
