import React, { Fragment } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Switch } from './Switch';
import Toggle from './Toggle-HOC';

function withToggle(Component) {
    const Wrapper = (props, ref) => (
        <Toggle.Consumer>
            {toggleContext => <Component ref={ref} toggle={toggleContext} {...props}/>}
        </Toggle.Consumer>
    )
    Wrapper.displayName= `withToggle(${Component.displayName||Component.name})`
    return hoistNonReactStatics(React.forwardRef(Wrapper), Component)
}

const Layer1 = () => <Layer2/>
const Layer2 = withToggle(({ toggle: { on, toggle } }) => (
    <Switch on={on} onClick={toggle} />
))

export default function HOCUsage({
    onToggle = (...args) => console.log('onToggle', ...args),
}) {
    return (
        <Toggle onToggle={onToggle}>
            <Layer1 />
        </Toggle>
    )
}
