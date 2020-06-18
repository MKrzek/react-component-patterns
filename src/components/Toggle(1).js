import React,{useState} from 'react';
import {Switch} from "./Switch"
const ToggleComponent = (props) => {
    const [ on, setOn ] = useState(false)
    const toggle = () => setOn(on => !on, () => [
        props.onToggle(on)
    ])
    console.log('on', on)
    return (
        <div>
            <Switch on={on} onClick={toggle}/>
        </div>
    );
};

export default ToggleComponent;