import React from 'react'
import { Switch } from './Switch';


const callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args))




export default class Toggle extends React.Component {
    static defaultProps = {
        initialOn: false,
        onReset: () => { },

    }
    static stateChangeTypes = {
        reset: "__reset__",
        toggle: "__toggle__"
    }
    initialState = { on: this.props.initialOn }
    state = this.initialState

    internalSetState(changes, cb) {
        this.setState(state => {
            const changesObject = typeof changes === 'function' ? changes(state) : changes
            console.log('changesOBJ', changesObject)
            console.log('cb', cb)
            const reducedChanges = this.props.stateReducer(state, changesObject)
            const {type:ignoredType, ...onlyChanges} =reducedChanges
            return onlyChanges
        }, cb)
    }
    reset = () =>
        this.internalSetState({ ...this.initialState, type: Toggle.stateChangeTypes.reset}, () =>
            this.props.onReset(this.state.on),
        )
    toggle = ({type=Toggle.stateChangeTypes.toggle}={}) =>
        this.internalSetState(
            ({ on }) => ({ on: !on, type}),
            () => this.props.onToggle(this.state.on),
        )
    getTogglerProps = ({ onClick, ...props } = {}) => ({
        onClick: callAll(onClick, ()=>this.toggle()),
        'aria-pressed': this.state.on,
        ...props,
    })
    getStateAndHelpers() {
        console.log('state', this.state)
        return {
            on: this.state.on,
            toggle: this.toggle,
            reset: this.reset,
            getTogglerProps: this.getTogglerProps,
        }
    }
    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}