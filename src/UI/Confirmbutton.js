import React from 'react'
/**
 * @author Daniela
 * This File represents the standard ConfirmButton.
 * myStyle= {{padding: '5px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}} >
 * @visibleName Confirmbutton
 */
class Confirmbutton extends React.Component {
    render() {
        const { onClick, myStyle, hidden} = this.props
        return (
            <button style={myStyle}
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

