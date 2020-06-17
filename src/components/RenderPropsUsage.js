import React from 'react';
import Toggle from './Toggle-renderProps';
import { Switch } from './Switch';
function RenderPropsUsage({
    onToggle = (...args) => console.log('onToggle', ...args),
}) {
    return (
        <Toggle onToggle={onToggle}

        >
            {({ on, togglerProps }) => (
                <div>
                    {on ? 'The button is on' : 'The button is off'}
                    <Switch on={on} {...togglerProps} />
                    <hr />
                    <button aria-label="custom-button" {...togglerProps}>
                        {on ? 'on' : 'off'}
                    </button>
                </div>
            )}
        </Toggle>
    )
}
RenderPropsUsage.title = 'Render Props'

export default RenderPropsUsage
