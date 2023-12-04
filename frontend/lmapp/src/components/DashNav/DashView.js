// PageView.js - Display todos, overview,...

import React from 'react';
import TodoList from './ToDoList/TodoList';

const DashView = ({ view }) => {

    return (
        <div className="view-container">
            {/* Display the a view */}
            {view}
        </div>
    );
};

export default DashView;