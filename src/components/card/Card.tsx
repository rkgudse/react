import Counter from "../counter/Counter"
import IdInput from "../idinput/IdInput"

export type CardProps = {
    coffeeName:string
}



const Card = (props:CardProps)=>{
    const {coffeeName} = props
    return(
        <div>
            <span>{coffeeName}</span>
                <Counter init={0} increment={1}/>
                <IdInput placeholder={'주문입력'} value={9} />
      
       
        </div>
    )
}

export default Card