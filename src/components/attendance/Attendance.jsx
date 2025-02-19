import React, { useState } from 'react';
import { 
  HiUserGroup,
  HiXCircle,
  HiClock,
  HiChartBar,
  HiCalendar,
  HiSearch,
  HiFilter,
  HiDownload
} from 'react-icons/hi';
import { format } from 'date-fns';
import styles from './Attendance.module.css';
import AttendanceSummaryCards from './AttendanceSummaryCards';
import AttendanceGraphs from './AttendanceGraphs';
import AttendanceTable from './AttendanceTable';
import AttendanceFilters from './AttendanceFilters';

const Attendance = () => {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentView, setCurrentView] = useState('daily'); // daily, weekly, monthly

  // Mock data - replace with actual data from your backend
  const summaryData = {
    totalPresent: 45,
    totalAbsent: 5,
    totalLate: 3,
    weeklyAverage: 92,
    monthlyRate: 95
  };

  const handleExport = (format) => {
    // Implement export logic here
    console.log(`Exporting in ${format} format`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters) => {
    setDateRange(filters.dateRange);
    setStatusFilter(filters.status);
  };

  return (
    <div className={styles.attendanceContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Attendance Management</h1>
        <div className={styles.actions}>
          <button 
            className={styles.exportButton}
            onClick={() => handleExport('pdf')}
          >
            <HiDownload className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <AttendanceSummaryCards data={summaryData} />

      {/* Filters Section */}
      <AttendanceFilters 
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />

      {/* View Toggle */}
      <div className={styles.viewToggle}>
        <button 
          className={`${styles.toggleButton} ${currentView === 'daily' ? styles.active : ''}`}
          onClick={() => setCurrentView('daily')}
        >
          Daily
        </button>
        <button 
          className={`${styles.toggleButton} ${currentView === 'weekly' ? styles.active : ''}`}
          onClick={() => setCurrentView('weekly')}
        >
          Weekly
        </button>
        <button 
          className={`${styles.toggleButton} ${currentView === 'monthly' ? styles.active : ''}`}
          onClick={() => setCurrentView('monthly')}
        >
          Monthly
        </button>
      </div>

      {/* Graphs Section */}
      <AttendanceGraphs view={currentView} />

      {/* Table Section */}
      <AttendanceTable 
        searchQuery={searchQuery}
        dateRange={dateRange}
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default Attendance;
