import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  DocumentReportIcon, 
  CogIcon, 
  LogoutIcon 
} from '@heroicons/react/outline';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', path: '/', icon: HomeIcon },
    { title: 'Attendance', path: '/attendance', icon: UserGroupIcon },
    { title: 'Reports', path: '/reports', icon: DocumentReportIcon },
    { title: 'Settings', path: '/settings', icon: CogIcon },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <h2>FR Attendance</h2>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
            >
              <Icon className={styles.navIcon} />
              <span className={styles.navText}>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <button className={styles.navItem}>
          <LogoutIcon className={styles.navIcon} />
          <span className={styles.navText}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
