import React from 'react';
import  Toggle  from './Toggle-controlProps';

class ControlPropsUsage extends React.Component {
    state = { bothOn: false }
    handleToggle = on => {

        this.setState({ bothOn: on })
    }
    render() {
        const { bothOn } = this.state
        const { toggle1Ref, toggle2Ref } = this.props
        return (
            <div>
                <Toggle
                    on={bothOn}
                    onToggle={this.handleToggle}
                    ref={toggle1Ref}
                />
                <Toggle
                    on={bothOn}
                    onToggle={this.handleToggle}
                    ref={toggle2Ref}
                />
            </div>
        )
    }
}
ControlPropsUsage.title = 'Control Props'

export default ControlPropsUsage
