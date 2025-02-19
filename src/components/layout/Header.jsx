import React, { useState } from 'react';
import { 
  BellIcon, 
  UserCircleIcon, 
  LogoutIcon,
  ChevronDownIcon
} from '@heroicons/react/outline';
import styles from './Header.module.css';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      message: 'New employee registration request',
      time: '5 mins ago',
      type: 'info'
    },
    {
      id: 2,
      message: 'Late arrival: John Smith',
      time: '10 mins ago',
      type: 'warning'
    },
    {
      id: 3,
      message: 'Attendance report generated',
      time: '1 hour ago',
      type: 'success'
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput}
          />
        </div>

        <div className={styles.headerRight}>
          <div className={styles.notificationWrapper}>
            <button 
              className={styles.notificationButton}
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <BellIcon className={styles.bellIcon} />
              <span className={styles.notificationBadge}>3</span>
            </button>

            {showNotifications && (
              <div className={styles.notificationDropdown}>
                <h3 className={styles.dropdownTitle}>Notifications</h3>
                {notifications.map(notification => (
                  <div key={notification.id} className={`${styles.notificationItem} ${styles[notification.type]}`}>
                    <p className={styles.notificationMessage}>{notification.message}</p>
                    <span className={styles.notificationTime}>{notification.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.profileSection}>
            <button 
              className={styles.profileButton}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className={styles.profileInfo}>
                <UserCircleIcon className={styles.profileIcon} />
                <span className={styles.profileName}>John Doe</span>
                <ChevronDownIcon className={styles.chevronIcon} />
              </div>
            </button>

            {showProfileMenu && (
              <div className={styles.profileDropdown}>
                <div className={styles.profileHeader}>
                  <UserCircleIcon className={styles.largeProfileIcon} />
                  <div>
                    <h4 className={styles.profileFullName}>John Doe</h4>
                    <p className={styles.profileRole}>Administrator</p>
                  </div>
                </div>
                <div className={styles.profileMenu}>
                  <button className={styles.profileMenuItem}>
                    View Profile
                  </button>
                  <button className={styles.profileMenuItem}>
                    Settings
                  </button>
                  <button className={`${styles.profileMenuItem} ${styles.logoutButton}`}>
                    <LogoutIcon className={styles.logoutIcon} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
