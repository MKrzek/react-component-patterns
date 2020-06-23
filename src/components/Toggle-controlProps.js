import React from 'react'
import { Switch } from './Switch'



export default class Toggle extends React.Component {
    static defaultProps = {
        onToggle: () => {},
        onStateChange:()=>{}

    }
    state = { on: false, xx:100}
    isControlled(prop) {
       return this.props[prop]!==undefined
   }
    getState(state= this.state) {
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

    internalSetState(changes, callback) {
        let allChanges
        this.setState(state => {
            const combinedState = this.getState(state)
            const changesObject = typeof changes === "function" ? changes(combinedState) : changes
            allChanges=changesObject
            const nonControlledChanges = Object.entries(changesObject).reduce((newChanges, [key, value]) => {
                if (!this.isControlled(key)) {
                    newChanges[key] = value
                }
                return newChanges
            }, {})
            return Object.keys(nonControlledChanges).length ? nonControlledChanges: null
        }, () => {
                this.props.onStateChange(allChanges, this.getState())
            callback()
        })
    }

    toggle = () => {
            this.internalSetState(
                ({ on }) => ({ on: !on }),
                () => {

                    this.props.onToggle(this.getState().on)
                },
            )
    }

    render() {
        const { on } = this.state
        return <Switch on={this.getState().on} onClick={this.toggle} />
    }
}