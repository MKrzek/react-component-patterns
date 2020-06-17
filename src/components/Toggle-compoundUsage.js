import React, { useState, useContext } from 'react';
import { Switch } from "./Switch";
const ToggleContext = React.createContext()

class ToggleComponent extends React.Component {

    state = { on: false }

    toggle = () => this.setState(({ on }) => ({on: !on}), () => [
        this.props.onToggle(this.state.on)
    ])
    static On = ({ on, children }) => (
        <ToggleContext.Consumer>
        {contextValue => (
                contextValue.on ? children : null)}
        </ToggleContext.Consumer>)

    static Off = ({ on, children }) => (
        <ToggleContext.Consumer>
            {contextValue => contextValue.on ? null : children}
        </ToggleContext.Consumer>)

    static Button = (props) => (
        <ToggleContext.Consumer>
            {contextValue=>(<Switch on={contextValue.on} onClick={contextValue.toggle}{...props} />)}
        </ToggleContext.Consumer>
    )

    render() {
        const { on } = this.state
        return <ToggleContext.Provider value={{ on, toggle: this.toggle }}>
            {this.props.children}
        </ToggleContext.Provider>
    //     return (
    //         React.Children.map(this.props.children, childElement => React.cloneElement(childElement, { on, toggle: this.toggle }))
    // );
    }
};

export default ToggleComponent;