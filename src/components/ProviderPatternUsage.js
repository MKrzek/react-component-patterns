import React, { Fragment } from 'react';
import { Switch } from './Switch';
import Toggle from './Toggle-providerPattern';

const Layer1 = () => <Layer2 />
const Layer2 = () => (
    <Toggle.Consumer>
        {({ on }) => (
            <Fragment>
                {on ? 'The button is on' : 'The button is off'}
                <Layer3 />
            </Fragment>
        )}
    </Toggle.Consumer>
)
const Layer3 = () => <Layer4 />
const Layer4 = () => (
    <Toggle.Consumer>
        {({ on, toggle }) => <Switch on={on} onClick={toggle} />}
    </Toggle.Consumer>
)

export default function ProviderPatternUsage({
    onToggle = (...args) => console.log('onToggle', ...args),
}) {
    return (
        <Toggle onToggle={onToggle}>
            <Layer1 />
        </Toggle>
    )
}
