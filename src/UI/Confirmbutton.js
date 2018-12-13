import React from 'react'
/**
 * @author Daniela
 * This File represents the standard ConfirmButton.
 * @visibleName Confirmbutton
 */
class Confirmbutton extends React.Component {
    render() {
        const { onClick, myWidth, hidden} = this.props
        return (
            <button style={{width: 'myWith'}}
                className="confirmButton"
                type="button"
                onClick={onClick}
                    hidden={hidden}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Confirmbutton