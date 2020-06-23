// The provider pattern
import React, { Fragment } from 'react'
import { Switch }  from './Switch'

const ToggleContext = React.createContext({
    on: false,
    toggle:()=>{}
})

export default class Toggle extends React.Component {
    static Consumer = ToggleContext.Consumer

    toggle = () =>
        this.setState(
            ({ on }) => ({ on: !on }),
            () => this.props.onToggle(this.state.on),
        )
    state = { on: false, toggle: this.toggle }
    render() {
        return <ToggleContext.Provider value={this.state} {...this.props}/>

    }
}