import React from 'react'

/**
 * @author Daniela
 * This File represents the standard Footer.
 * @visibleName Footer
 */

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer"}>
                <a href={"https://www.fh-dortmund.de"}>Impressum </a>
                 ||
                <a href={"https://www.fh-dortmund.de"}> Datenschutz</a>
            </div>
        )
    }
}

export default Footer