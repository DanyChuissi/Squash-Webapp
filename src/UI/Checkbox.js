import React from 'react'
import './UIStylesheet.css'
/**
 * @author Daniela
 * This File represents the standard Input.
 * @visibleName Checkbox
 */
class Checkbox extends React.Component {
    render() {
        const { onChange, classname } = this.props

        return (
            <input type="checkbox" className="checkbox" value="Bike" onChange={onChange}/>

        )
    }
}

export default Checkbox