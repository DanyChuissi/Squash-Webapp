import React from 'react'
/**
 * @author Daniela
 * This File represents the standard ConfirmButton.
 * @visibleName Confirmbutton
 */
class Confirmbutton extends React.Component {
    render() {
        const { onClick} = this.props

        return (
            <button
                className="confirmButton"
                type="button"
                onClick={onClick}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Confirmbutton