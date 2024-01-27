export type ButtonProps = {
    color:string
    text:string
}


// props 전달되는 값
const Button = (props:ButtonProps)=>{
    const buttonStyle:React.CSSProperties = {
        color: 'white',
        fontSize: '24px',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        
      }
    
    const styleMaker = (color:string):React.CSSProperties =>{
        return {...buttonStyle, backgroundColor:color}
    }

    const test = () =>{
        console.log(props.text)
    }
    return (<button onClick={test} style={styleMaker(props.color)}>{props.text}버튼</button>);
} 

export default Button 