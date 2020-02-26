import React from 'react';
const Input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [props.className];
    const errorClasses = [props.errorClassName];
    if (props.invalid && props.touched) {
        inputClasses.push('invalid');
        validationError = <p className={errorClasses.join(' ')}>Please enter a valid {props.valueType}</p>;
    }
    if (props.customError !== undefined && props.invalid && props.touched) {
        validationError = <p className={errorClasses.join(' ')}>{props.customError}</p>;
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onKeyDown={props.onKeyDown}
                {...props} />;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} {...props} />;
    }
    return (
        <React.Fragment>
            {inputElement}
            {props.errorMessage && validationError}
        </React.Fragment>
    );
}
export default Input