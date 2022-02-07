import { Secondary, Success, Primary, Error, Info, Warning, Show} from "./MassegeTyps"



export const success = (value)=>{
    return(
        {type:Success,payload:value}
    )
}

export const secondary = ()=>{
    return(
        {type:Secondary,payload:"Secondary"}
    )
}

export const primary = ()=>{
    return(
        {type:Primary,payload:"Primary"}
    )
}

export const error = ()=>{
    return (
        {type:Error,payload:"Error"}
    )
}

export const info = ()=>{
    return (
        {type:Info,payload:"Info"}
    )
}

export const warning = ()=>{
    return (
        {type:Warning,payload:"Warning"}
    )
}

export const show = (value)=>{
    return(
        {type:Show,payload:value}
    )
}