import React from 'react'


const styles = {
    footer: {
        textAlign: 'center'
    }
}

const Footer = () => {
    return (
        <footer className="align-center">
            <span> © {new Date().getFullYear()}, IBCL </span>
        </footer>
    )
}
export default Footer;