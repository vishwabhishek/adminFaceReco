import React, { useState } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight,
  HiCheckCircle,
  HiXCircle,
  HiClock
} from 'react-icons/hi';
import styles from './AttendanceTable.module.css';

const AttendanceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data - replace with actual data
  const attendanceData = [
    { id: 1, name: 'John Doe', date: '2025-02-18', time: '09:00 AM', status: 'present' },
    { id: 2, name: 'Jane Smith', date: '2025-02-18', time: '09:15 AM', status: 'late' },
    { id: 3, name: 'Mike Johnson', date: '2025-02-18', time: '--', status: 'absent' },
  ];

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      present: { icon: HiCheckCircle, className: styles.present },
      absent: { icon: HiXCircle, className: styles.absent },
      late: { icon: HiClock, className: styles.late },
    };

    const { icon: Icon, className } = statusConfig[status];

    return (
      <span className={`${styles.statusBadge} ${className}`}>
        <Icon className="w-4 h-4" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record) => (
            <tr key={record.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{record.name}</td>
              <td className={styles.tableCell}>{record.date}</td>
              <td className={styles.tableCell}>{record.time}</td>
              <td className={styles.tableCell}>
                <StatusBadge status={record.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button 
          className={styles.paginationButton}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>
        <span className={`${styles.paginationButton} ${styles.active}`}>{currentPage}</span>
        <button 
          className={styles.paginationButton}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AttendanceTable;
