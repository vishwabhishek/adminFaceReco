import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import AttendanceTable from './components/attendance/AttendanceTable';
import ReportGenerator from './components/reports/ReportGenerator';
import Settings from './components/settings/Settings';
import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapse = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar onCollapse={handleSidebarCollapse} />
        <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <Header />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance" element={<AttendanceTable />} />
              <Route path="/reports" element={<ReportGenerator />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
