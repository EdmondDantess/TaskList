import React from "react";

type ButtonPropsType ={
    titleName: string
    callBackFunction?: (any: any)=>void
}

export const Button=(props: ButtonPropsType)=>{

    return (
        <button onClick={props.callBackFunction}>{props.titleName}</button>
    )
}