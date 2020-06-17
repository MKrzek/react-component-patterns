import React from 'react';

class Toggle extends React.Component {

    state = { on: false }
    toggle = () =>
        this.setState(
            ({ on }) => ({ on: !on }),
            () => {
                this.props.onToggle(this.state.on)
            },
        )

    render() {
        const { on } = this.state

        return this.props.children({ on, toggle: this.toggle })
    }
}
export default Toggle