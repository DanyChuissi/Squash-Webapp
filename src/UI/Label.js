import React from 'react'
import './UIStylesheet.css'

class Label extends React.Component {
    render() {
        return (
            <label
                className="standardLabel">{this.props.children}</label>
        )
    }
}

export default Label