import React, { useState } from "react";
import AllGoals from './AllGoals';
import PendingGoals from './PendingGoals';
import CompletedGoals from './CompletedGoals';
import TabButton from './TabButton';
import MyIcon from "../Icons/MyIcon";
import AddIcon from '@mui/icons-material/Add';
import CreateGoal from './CreateGoal';
import '../../styles/Goals/goalsLayout.css';

const GoalsLayout = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedGoal, setSelectGoal] = useState(null);

  const itemList = [
    { text: 'Complete a daily task', status: '', },
    { text: 'Complete at least 8 tasks in a day', status: '', },
    { text: 'Complete 20 tasks in a week', status: '', },
    { text: 'Complete a daily task', status: '', },
    { text: 'Complete at least 8 tasks in a day', status: '', },
    { text: 'Complete 20 tasks in a week', status: '', },
    { text: 'Complete a daily task', status: '', },
    { text: 'Complete at least 8 tasks in a day', status: '', },
    { text: 'Complete 20 tasks in a week', status: '', },
    { text: 'Complete a daily task', status: '', },
    { text: 'Complete at least 8 tasks in a day', status: '', },
    { text: 'Complete 20 tasks in a week', status: '', },
    { text: 'Complete a daily task', status: '', },
    { text: 'Complete at least 8 tasks in a day', status: '', },
    { text: 'Complete 20 tasks in a week', status: '', },
  ];

  const renderView = () => {
    switch (activeTab) {
      case 'All':
        return <AllGoals listData={itemList} />;
      case 'Pending':
        return <PendingGoals />;
      case 'Completed':
        return <CompletedGoals />;
      case 'Create':
        return <CreateGoal />;
      default:
        return null;
    }
  };

  return (
    <div className="goals-body-container">
      <div className="goals-tabs">
        <div className="tabs-row">
          <TabButton text="All" onClick={() => setActiveTab('All')} active={activeTab === 'All'} />
          <TabButton text="Pending" onClick={() => setActiveTab('Pending')} active={activeTab === 'Pending'} />
          <TabButton text="Completed" onClick={() => setActiveTab('Completed')} active={activeTab === 'Completed'} />
        </div>
        <div className="plus-button">
          <MyIcon icon={AddIcon} size="20px" backgroundColor='lightgreen' color='white' onClick={() => setActiveTab('Create')} />
        </div>
      </div>
      <div className="goals-list-container">
        {renderView()}
      </div>
    </div>
  );
};

export default GoalsLayout;