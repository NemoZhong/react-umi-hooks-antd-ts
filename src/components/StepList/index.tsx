import './index.less'
import React from 'react';
import { Steps } from 'antd';
import { Icon } from 'antd-mobile';
const { Step } = Steps;

interface StepListProps {
  listData:ListDataType[],
  showMenu:any
}
interface ListDataType{
  id:number,
  date:string,
  url:string,
  text?:string
}

const StepListItem: React.FC<StepListProps> = (props) => {
    const {listData,showMenu}=props
    console.log(222,props)
    const img=(url:string,text?:string)=>(
      <div className="content-box">
        <div>{text}</div>
        <img className="img" src={url}/>
        <Icon className="icon" type="ellipsis" onClick={showMenu}/>
      </div>
    )
    return (
    <Steps progressDot direction="vertical" current={-1}>
      {
        listData.map((item:ListDataType)=>{
          return (
            <Step className="step-item" title={item.date} key={item.id} description={img(item.url,item.text)} />
          )
        })
      }
    </Steps>
    )

}

export default StepListItem