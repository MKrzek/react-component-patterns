import React from 'react';
import  Toggle  from './Toggle-controlProps';

class ControlPropsUsage extends React.Component {
    state = { bothOn: false }
    handleStateChange = ({ on }) => {
        this.setState({ bothOn: on })
    }
    render() {
        const { bothOn } = this.state

        return (
            <div>
                <Toggle
                    on={bothOn}
                    onStateChange = {this.handleStateChange}

                />
                <Toggle
                    on={bothOn}
                    onStateChange={this.handleStateChange}

                />
            </div>
        )
    }
}
ControlPropsUsage.title = 'Control Props'

export default ControlPropsUsage
