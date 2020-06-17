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
    getStateAndHelpers() {
        return {
            on: this.state.on,
            toggle: this.toggle,
            togglerProps: {
                onClick: this.toggle,
                'aria-pressed': this.state.on
            }
        }
    }

    render() {
        const { on } = this.state

        return this.props.children(this.getStateAndHelpers())
    }
}
export default Toggle