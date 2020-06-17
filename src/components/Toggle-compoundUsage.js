import React, { useState, useContext } from 'react';
import { Switch } from "./Switch"
class ToggleComponent extends React.Component {

    state = { on: false }

    toggle = () => this.setState(({ on }) => ({on: !on}), () => [
        this.props.onToggle(this.state.on)
    ])
    static On = ({ on, children }) => { console.log('chill', children); return (on ? children : null) }
    static Off = ({ on, children }) => (on ? null : children)
    static Button = ({ on, toggle, ...props }) => (
        <Switch on = { on } onClick = { toggle }{...props }/>
    )
    render() {
        const { on } = this.state
        console.log('children', this.props.children)
        return (
            React.Children.map(this.props.children, childElement => React.cloneElement(childElement, { on, toggle: this.toggle }))
    );
    }
};

export default ToggleComponent;