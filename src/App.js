import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import AppRoutes from './routes';
import styles from './App.module.css';

const AppContent = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleSidebarCollapse = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  if (!isAuthenticated()) {
    return <AppRoutes />;
  }

  return (
    <div className="app-container">
      <Sidebar onCollapse={handleSidebarCollapse} />
      <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <Header isSidebarCollapsed={isSidebarCollapsed} />
        <main className="content-wrapper">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
