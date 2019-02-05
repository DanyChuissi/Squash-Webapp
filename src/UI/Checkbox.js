import React from 'react'
import './UIStylesheet.css'
/**
 * @author Daniela
 * This File represents the standard Input.
 * @visibleName Checkbox
 */
class Checkbox extends React.Component {
    render() {
        const { onChange, classname, active,style} = this.props

        return (
            <input type="checkbox" className="checkboxdef"  defaultChecked={active} onChange={onChange}  style={style}/>

        )
    }
}

export default Checkbox