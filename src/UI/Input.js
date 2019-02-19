import React from 'react'
import './UIStylesheet.css'
/**
 * @author Daniela
 * This File represents the standard Input.
 * @visibleName Input
 */
class Input extends React.Component {
    render() {
        const { placeholder, value, onChange, classname,width,heigth ,style, type,hidden} = this.props
         let inputTyp = 'text';
            inputTyp = type;
        return (
            <input
                className={classname}
                type={inputTyp}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            width={width}
            height={heigth}
            style={style}
            hidden={hidden}/>
        )
    }
}

export default Input