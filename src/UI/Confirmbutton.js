import React from 'react'
/**
 * @author Daniela
 * This File represents the standard ConfirmButton.
 * @visibleName Confirmbutton
 */
class Confirmbutton extends React.Component {
    render() {
        const { onClick, myWidth} = this.props
        return (
            <button style={{width: 'myWith'}}
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