
import React from 'react';
import { InlineError } from '../components/InlineError';

export const GlobalValidations = props => {
    return (<div class={props.divClass}>

        <label class={props.labelClass}>{props.label}</label>
        <TextFormComp
            inputType={props.inputType}
            inputId={props.inputId}
            inputPlaceholder={props.inputPlaceholder}
            className={props.textInputClassName}
            onChange={props.onChange}
            name={props.name}
            value={props.realValue}
        />
        <InlineError message={props.errorMessage} />
        

    </div>)
}


export const TextFormComp = props => {
    return (
        <input {...props} type={props.inputType} class={props.className} id={props.inputId} placeholder={props.inputPlaceholder} onChange={props.onChange}  name={props.name} />
    )
}