import React, { ChangeEvent, KeyboardEvent } from "react";

type InputPropsType = {
    type?: string
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>)=>void
    onKeyUp?: (e : KeyboardEvent<HTMLInputElement>)=>void
    value?: string
}

export const Input=(props: InputPropsType)=>{
    return (
        <input type={props.type} checked={props.checked} onChange={props.onChange} onKeyUp={props.onKeyUp} value ={props.value}/>
    )
}