// Menu.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';
import Overview from '../Overview/Overview';
import TodoList from '../ToDoList/TodoList';
import Goals from '../Goals/Goals';
import Challenges from '../Challenges/Challenges';
import Knowledge from '../Knowledge/Knowledge';
import Guide from '../Guide/Guide';
import Friends from '../Friends/Friends';
import Achievements from '../Achievements/Achievements';
import Settings from '../Settings/Settings';
import Logout from '../Logout/Logout';
import { NavigationOutlined } from '@mui/icons-material';

const Menu = ({ buttons, handleView }) => {
    const [activeButton, setActiveButton] = useState(buttons[0].text);
    const navigate = useNavigate();

    // Map other button texts to their corresponding components
    const componentMapping = {
        'Overview' : Overview,
        'Todo List' : TodoList,
        'Goals' : Goals,
        'Challenges' : Challenges,
        'Knowledge' : Knowledge,
        'Guide' : Guide,
        'Friends' : Friends,
        'Achievements' : Achievements,
        'Settings' : Settings,
        'Logout' : Logout  
    };

    const ActiveComponent = componentMapping[activeButton];

    const handleLogout = () => {
        navigate('/signin');
    }

    const handleButtonClick = (text) => {
        setActiveButton(text);
        if(text == 'Logout'){
            handleLogout();
        } else {
            handleView(componentMapping[text]);
        }
    };

    return (
        <div className="menu-container">
            {buttons.map((button) => (
                <MenuButton
                    key={button.text}
                    text={button.text}
                    active={activeButton === button.text}
                    onClick={() => handleButtonClick(button.text)}
                />
            ))}
            {ActiveComponent ? <ActiveComponent /> : <Overview />}
        </div>
    );
};

export default Menu;