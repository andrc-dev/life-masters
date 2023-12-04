import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import MyIcon from '../Icons/MyIcon';
import '../../styles/Goals/goalsHeader.css';

const GoalsHeader = () => {
    return (
        <div className='header-container'>
            <div className="header-title">
                <MyIcon icon={FlagIcon} backgroundColor='' color='grey' />
                Goals
            </div>
        </div>
    );
};

export default GoalsHeader;