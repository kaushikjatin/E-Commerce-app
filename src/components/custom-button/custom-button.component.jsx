import React from 'react';

import './custom-button.styles.scss'

const CustomButton=({children,is_google_signin,inverted,...otherProps})=>{
    return(
        <button className={`${inverted ? 'inverted' : ''} ${is_google_signin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>
    )
        
}

export default CustomButton;