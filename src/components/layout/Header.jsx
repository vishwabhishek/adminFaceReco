import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  BellIcon, 
  UserCircleIcon, 
  LogoutIcon,
  ChevronDownIcon
} from '@heroicons/react/outline';
import styles from './Header.module.css';

const Header = ({ isSidebarCollapsed }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

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
    <header className={`${styles.header} ${isSidebarCollapsed ? styles.headerExpanded : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput}
          />
        </div>

        <div className={styles.headerRight}>
          <div className={styles.notificationWrapper} ref={notificationRef}>
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

          <div className={styles.profileSection} ref={profileRef}>
            <button 
              className={styles.profileButton}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className={styles.profileInfo}>
                <UserCircleIcon className={styles.profileIcon} />
                <span className={styles.profileName}>{user?.name || 'User'}</span>
                <ChevronDownIcon className={styles.chevronIcon} />
              </div>
            </button>

            {showProfileMenu && (
              <div className={styles.profileDropdown}>
                <div className={styles.profileHeader}>
                  <UserCircleIcon className={styles.largeProfileIcon} />
                  <div>
                    <h4 className={styles.profileFullName}>{user?.name || 'User'}</h4>
                    <p className={styles.profileRole}>{user?.role || 'User'}</p>
                  </div>
                </div>
                <div className={styles.profileMenu}>
                  <button 
                    className={styles.profileMenuItem}
                    onClick={() => {
                      navigate('/profile');
                      setShowProfileMenu(false);
                    }}
                  >
                    Profile
                  </button>
                  <button 
                    className={styles.profileMenuItem}
                    onClick={() => {
                      navigate('/settings');
                      setShowProfileMenu(false);
                    }}
                  >
                    Settings
                  </button>
                  <button 
                    className={`${styles.profileMenuItem} ${styles.logoutButton}`}
                    onClick={handleLogout}
                  >
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
