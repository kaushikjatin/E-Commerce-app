import React from 'react';

import './custom-button.styles.scss'

const CustomButton=({children,is_google_signin,...otherProps})=>{
    return(
        <button className={`${is_google_signin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>
    )
        
}

export default CustomButton;