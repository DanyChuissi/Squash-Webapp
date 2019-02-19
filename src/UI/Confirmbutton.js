import React from 'react'
/**
 * @author Dany
 * This File represents the standard ConfirmButton.
 * myStyle= {{padding: '5px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}} >
 * @visibleName Confirmbutton
 */
class Confirmbutton extends React.Component {
    render() {
        const { onClick, myStyle, hidden,type} = this.props
        return (
            <button style={myStyle}
                    className="confirmButton"
                    type={type}
                    onClick={onClick}
                    hidden={hidden}
            >
                {this.props.children}
            </button>
        )
    }
}
export default Confirmbutton

