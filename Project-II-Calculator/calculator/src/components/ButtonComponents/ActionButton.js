import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`bigger-button`}>
            {props.text}
        </button>
    );
};

export default ActionButton;