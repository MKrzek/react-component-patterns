import React from 'react';
import ToggleComponent from "./Toggle(1)"
const Usage = () => {
    const onToggle = (...args) =>console.log('onToggle', ...args)
    return (
        <div>
           <ToggleComponent onToggle={onToggle}/>
        </div>
    );
};

export default Usage;