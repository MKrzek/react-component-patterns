import React from 'react'
import { Switch } from './Switch'



export default class Toggle extends React.Component {
    state = { on: false, xx:100}
    isControlled(prop) {
       return this.props[prop]!==undefined
   }
    getState() {
        return Object.entries(this.state).reduce(
            (combinedState, [key, value]) => {

                if (this.isControlled(key)) {
                    combinedState[key]=this.props[key]
                } else {
                    combinedState[key]=value
                }

                return combinedState
            },{}
        )

    }

    toggle = () => {
        if (this.isControlled('on')) {

            this.props.onToggle(!this.getState().on)
        } else {
            this.setState(
                ({ on }) => ({ on: !on }),
                () => {

                    this.props.onToggle(this.getState().on)
                },
            )
        }
    }
    render() {

        const { on } = this.state
        return <Switch on={this.getState().on} onClick={this.toggle} />
    }
}