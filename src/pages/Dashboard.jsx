import React from 'react';
import DashboardCard from '../components/dashboard/DashboardCard';
import AttendanceTable from '../components/attendance/AttendanceTable';
import { 
  UserGroupIcon, 
  UserIcon, 
  ClockIcon, 
  ExclamationIcon 
} from '@heroicons/react/outline';

const Dashboard = () => {
  const dashboardStats = [
    {
      title: 'Total Employees',
      value: '150',
      description: 'Active employees in the system',
      icon: UserGroupIcon,
      type: 'present'
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
      icon: ExclamationIcon,
      type: 'absent'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Dashboard Overview
      </h1>

      <div className="dashboard-cards">
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

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Attendance
        </h2>
        <AttendanceTable />
      </div>
    </div>
  );
};

export default Dashboard;
