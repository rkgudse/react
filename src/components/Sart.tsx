import Button, { buttonProps } from "./button/Button"
import Card from "./card/Card"

const Sart = ()=>{
    const data:buttonProps[] =[
        {
          onClick: ()=>{
            window.alert('버튼')
          },
          // 'https://www.naver.com/',
          emoji: '🍨',
          text: '카페',
        },
        {
          onClick: ()=>{
            window.alert('버튼')
          },
          // onClick: 'https://www.starbucks.co.kr/index.do',
          emoji: '🍜',
          text: '식당',
        },
        {
          onClick: ()=>{
            window.alert('버튼')
          },
          // onClick: 'https://www.cgv.co.kr/',
          emoji: '🚗',
          text: '주차',
        }
      ]
    
    const coffeeList = ["아메리카노", "라떼", "바닐라"]

    return(
        <>
          {data.map((value)=>{
              return <Button {...value}/>
          })}
          {coffeeList.map((value)=>{
            return   <Card coffeeName={value}/>
          })}
        </>
    )
}

export default Sart