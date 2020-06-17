import React from 'react';
import ToggleComponent from "./Toggle-compoundUsage"
const CompoundUsage = () => {
    const onToggle = (...args) => console.log('onToggle', ...args)
    return (
        <div>
            <ToggleComponent onToggle={onToggle} >
                <ToggleComponent.On>the button is on </ToggleComponent.On>
                <ToggleComponent.Off>The button is off</ToggleComponent.Off>
                <ToggleComponent.Button/>
            </ToggleComponent>
        </div>
    );
};

export default CompoundUsage;