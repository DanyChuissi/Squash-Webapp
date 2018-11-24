import React from 'react'
import './UIStylesheet.css'
/**
 * @author Daniela
 * This File represents the standard Input.
 * @visibleName SaveButton
 */
class SaveButton extends React.Component {
    render() {
        const { onChange, classname } = this.props

        return (
            <button type="submit" className={"saveButton"}  onChange={onChange}> Text</button>

        )
    }
}

export default SaveButton