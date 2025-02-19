import React, { useState } from 'react';
import {
  PlusIcon,
  DocumentReportIcon,
  ClockIcon,
  UserAddIcon,
  XIcon
} from '@heroicons/react/outline';
import styles from './QuickActions.module.css';

const QuickActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      id: 'add-employee',
      icon: UserAddIcon,
      label: 'Add Employee',
      onClick: () => console.log('Add Employee clicked')
    },
    {
      id: 'generate-report',
      icon: DocumentReportIcon,
      label: 'Generate Report',
      onClick: () => console.log('Generate Report clicked')
    },
    {
      id: 'view-logs',
      icon: ClockIcon,
      label: 'View Logs',
      onClick: () => console.log('View Logs clicked')
    }
  ];

  return (
    <div className={styles.quickActionsContainer}>
      <button
        className={`${styles.mainButton} ${isExpanded ? styles.active : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <XIcon className={styles.buttonIcon} />
        ) : (
          <PlusIcon className={styles.buttonIcon} />
        )}
      </button>

      {isExpanded && (
        <div className={styles.actionsList}>
          {actions.map((action) => (
            <button
              key={action.id}
              className={styles.actionButton}
              onClick={action.onClick}
              title={action.label}
            >
              <action.icon className={styles.actionIcon} />
              <span className={styles.actionLabel}>{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuickActions;
