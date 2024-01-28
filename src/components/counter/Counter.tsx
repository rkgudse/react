import { CSSProperties, useState } from "react"

export type counterProps ={
    increment:number,
    init:number,
}

const Counter = (props:counterProps) =>{
    
    //component화, fragments, props, state
     // type assertion -> as, :number, <generic>
    // state: 데이터, 변경하는 함수(변경하려는 함수를 넣으면 됨), 상태가 변하는 함수를 state -변수 취급 ()는 초기값
   

    const {init, increment} = props;
    const [num, setNum] = useState<number>(init);
  



    const style:CSSProperties = {
        display: 'flex',
        padding: '10px',
        gap: '10px',
       
    }


    const up = ()=>{
        setNum((value)=> value+increment)
    }

    const down = ()=>{
        setNum((value)=> value-increment)
    }
   
    return(
        //부모는 하나만(부모가 있어야 함) <>과 같이 빈 것도 가능:(파편fragments)

        <div style={style}> 
            <button onClick={down}>-</button>
            <div>{num}</div>
            <button onClick={up}>+</button>
        </div>
    )
}

export default Counter