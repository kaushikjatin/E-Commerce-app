import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './withSpinner.styles';

const WithSpinner = (Component) =>{

    const FinalComponent = ({isLoading,...otherProps}) => {
    return isLoading ? (<SpinnerOverlay><SpinnerContainer></SpinnerContainer></SpinnerOverlay>) : (<Component {...otherProps}></Component>)}

    return FinalComponent
}

// WithSpinner is a high-order component which is taking a component as a parameter and returns a function to us which we need to call in our
// file with some parameters..and based upon those parameters it will return us either the spinner or the component.

export default WithSpinner;

