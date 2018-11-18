import React from 'react'
import './UIStylesheet.css'
/**
 * @author Daniela
 * This File represents the standard Input.
 * @visibleName Input
 */
class Input extends React.Component {
    render() {
        const { placeholder, value, onChange, classname } = this.props

        return (
            <input
                className={classname}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        )
    }
}

export default Input