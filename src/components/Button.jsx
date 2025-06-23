import React from 'react';
import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({className , children , href , onclick , px , white}) => {
    const classes = `button1 relative inline-flex items-center  justify-center h-11 transition-colors  hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8':'text-n-1'} ${className || ''} `

    const spanClasses = `relative z-10`

    const renderButton = () => (
        <button className={classes} onClick={onclick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <a className={classes} href={href}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return href ? renderLink() : renderButton();
}

export default Button;