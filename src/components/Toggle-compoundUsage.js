import React from 'react';
import { Switch } from "./Switch";
const ToggleContext = React.createContext()


function ToggleConsumer(props) {
    return (
        <ToggleContext.Consumer>
            {context => {
                if (!context) {
                    throw new Error('Toggle compound components must be rendered within the Toggle component provider')
                }
                return props.children(context)
            }}
        </ToggleContext.Consumer>
    )
}

class ToggleComponent extends React.Component {



    toggle = () => this.setState(({ on }) => ({on: !on}), () => [
        this.props.onToggle(this.state.on)
    ])
    static On = ({ on, children }) => (
        <ToggleConsumer>
        {contextValue => (
                contextValue.on ? children : null)}
        </ToggleConsumer>)

    static Off = ({ on, children }) => (
        <ToggleConsumer>
            {contextValue => contextValue.on ? null : children}
        </ToggleConsumer>)

    static Button = (props) => (
        <ToggleConsumer>
            {contextValue=>(<Switch on={contextValue.on} onClick={contextValue.toggle}{...props} />)}
        </ToggleConsumer>
    )
    state = { on: false, toggle:this.toggle }
    render() {
        // const { on } = this.state
        return <ToggleContext.Provider value={this.state}>
            {this.props.children}
        </ToggleContext.Provider>
    //     return (
    //         React.Children.map(this.props.children, childElement => React.cloneElement(childElement, { on, toggle: this.toggle }))
    // );
    }
};

export default ToggleComponent;