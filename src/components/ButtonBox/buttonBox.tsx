import Button from "../button/button";

type buttonBoxprops = {

}


const ButtonBox = (props:buttonBoxprops) =>{
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <Button color='red' text='빨간색'/>
            <Button color='pink' text='핑크색'/>
            <Button color='black' text='검은색'/>
        </div>
    );
} 

export default ButtonBox 