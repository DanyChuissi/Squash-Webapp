import React from 'react'

class Confirmbutton extends React.Component {
    render() {
        const { onClick, disabled} = this.props

        return (
            <button
                className="confirmButton"
                type="button"
                onClick={onClick}
                disabled={disabled}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Confirmbutton