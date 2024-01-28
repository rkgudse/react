import { CSSProperties, useState } from "react"

export type buttonProps = {
    emoji?: string,
    text?: string,
    // url: string,
    onClick: ()=>void
    // onClick:MouseEventHandler<HTMLButtonElement>,
}




const Button = (props:buttonProps)=>{
   
    
    
    const {emoji, text, onClick} = props


    const style:CSSProperties ={
        border: '1px solid #f7f7f7',
        backgroundColor: '#f7f7f7',
        borderRadius: '20px',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
    }

    // const gotoUrl = ()=>{
    //     window.open(url, '_blank') //open 새페이지로 열어주세요
    //     // window.location.href = "https://www.naver.com/" //현재 페이지에서 열어주세요
    // }
    // ??: nullish 연산자
    return <button onClick={onClick} style={style}>
        <span>{emoji ?? '😊' }</span>
        <span>{text ?? '버튼'}</span>
        </button>

}

export default Button