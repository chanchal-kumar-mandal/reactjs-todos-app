import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        top: "63vh"
    }
    return (
        <footer className="bg-dark text-light py-3 my-3" style={footerStyle}>
            <p className="text-center">Footer Copyright &copy; Todos By Chanchal Kumar Mandal</p>
        </footer>
    )
}
