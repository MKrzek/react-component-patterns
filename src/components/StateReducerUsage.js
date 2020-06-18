import React from 'react';
import Toggle from './Toggle-stateReducer';
import { Switch } from './Switch';

class StateReducerUsage extends React.Component {
    static defaultProps = {
        onToggle: (...args) => console.log('onToggle', ...args),
        onReset: (...args) => console.log('onReset', ...args),
    }
    initialState = { timesClicked: 0 }
    state = this.initialState
    handleToggle = (...args) => {
        this.setState(({ timesClicked }) => ({
            timesClicked: timesClicked + 1,
        }))
        this.props.onToggle(...args)
    }
    handleReset = (...args) => {
        this.setState(this.initialState)
        this.props.onReset(...args)
    }
    toggleStateReducer = (state, changes) => {
        console.log('changes', changes)
        if (changes.type === "forced") {
            return changes
        }
        if (this.state.timesClicked >= 4) {
            return { ...changes, on: false }
        }
        return changes
    }
    render() {
        const { timesClicked } = this.state
        return (
            <Toggle
                stateReducer={this.toggleStateReducer}
                onToggle={this.handleToggle}
                onReset={this.handleReset}
            >
                {toggle => (
                    <div>
                        <Switch
                            {...toggle.getTogglerProps({
                                on: toggle.on,
                            })}
                        />
                        {timesClicked > 4 ? (
                            <div data-testid="notice">
                                Whoa, you clicked too much!
                                <br />
                                <button onClick={()=>toggle({type: 'force'})}>Force Toggle</button>
                            </div>
                        ) : timesClicked > 0 ? (
                            <div data-testid="click-count">
                                Click count: {timesClicked}
                            </div>
                        ) : null}
                        <button onClick={toggle.reset}>Reset</button>
                    </div>
                )}
            </Toggle>
        )
    }
}
StateReducerUsage.title = 'State Reducers'

export default StateReducerUsage