import React from 'react'
import './UIStylesheet.css'
class Input extends React.Component {
    render() {
        const { placeholder, value, onChange } = this.props

        return (
            <input
                className="textInput"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        )
    }
}

export default Input