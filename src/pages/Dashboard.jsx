import React from 'react';
import DashboardCard from '../components/dashboard/DashboardCard';
import AttendanceTable from '../components/attendance/AttendanceTable';
import { 
  UserGroupIcon, 
  UserIcon, 
  ClockIcon, 
  XCircleIcon 
} from '@heroicons/react/outline';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const dashboardStats = [
    {
      title: 'Total Employees',
      value: '150',
      description: 'Active employees in the system',
      icon: UserGroupIcon,
      type: 'total'
    },
    {
      title: 'Present Today',
      value: '132',
      description: '88% attendance rate',
      icon: UserIcon,
      type: 'present'
    },
    {
      title: 'Late Arrivals',
      value: '8',
      description: '5.3% of total employees',
      icon: ClockIcon,
      type: 'late'
    },
    {
      title: 'Absent Today',
      value: '10',
      description: '6.7% of total employees',
      icon: XCircleIcon,
      type: 'absent'
    }
  ];

  return (
    <div className={styles.dashboard}>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Dashboard Overview
      </h1>
      <div className={styles.statsGrid}>
        {dashboardStats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            type={stat.type}
          />
        ))}
      </div>
      <div className={styles.attendanceSection}>
        <h2 className={styles.sectionTitle}>Recent Attendance</h2>
        <AttendanceTable />
      </div>
    </div>
  );
};

export default Dashboard;
