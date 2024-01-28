import { CSSProperties, ChangeEvent, useState } from "react";

export type IdInputProps = {
    placeholder:string,
    value:number,
}


const IdInput = (props:IdInputProps)=>{
    const [value, setValue] = useState<string>("");
    const [isLengthOver, setIsLengthover] = useState<boolean>(true);
    const {placeholder} = props

    const style:CSSProperties = {
        padding: '10px 20px',

    }


    const change = (e:ChangeEvent<HTMLInputElement>) => {
        setValue((value)=> e.target.value)
        setIsLengthover(e.target.value.length < 20)
    }

    
    
    return (
        <>
            <input onChange={change} value={value} style={style} type="text" placeholder={placeholder}/>
            {isLengthOver ? <span>{value.length}</span> : <span>죄송합니다.</span>}
            
        </>
    )
}

export default IdInput;