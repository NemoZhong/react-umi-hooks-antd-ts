import React,{useState,useEffect,useRef} from 'react';
import StepList from '@/components/StepList/'
import {Button} from 'antd-mobile'
import moment from 'moment'
import HandleMenu from '@/components/HandleMenu/'
import './Home.less'

const Home: React.FC<{}> = ({ children }) => {
  //初始状态
  const [listData,setlistData] = useState([]);
  const childRef:any = useRef();
  // 挂载
  useEffect(()=>{
    console.log(2222)
    const data:any=[{
      id:1,
      date:'2010-01-01',
      url:'/home_bg.png'
    },{
      id:2,
      date:'2010-01-02',
      url:'/'
    }]
    setlistData(data)
  },[])

  // methods
  const showMenu = () => {
    childRef.current.showMenu();
  }

  const addItem=()=>{
    const data=JSON.parse(JSON.stringify(listData))
    data.unshift({
      id:+new Date(),
      date:moment.now(),
      url:'/',
      text:'有文字'
    })
    setlistData(data)
  }
  return (
    <div className="home-container">
      <HandleMenu ref={childRef} handleList={[{name:'编辑',handleFn:()=>{console.log('编辑')}},{name:'删除',color:'#f00',handleFn:()=>{console.log('删除')}}]}/>
      <div className="list-container">
        <StepList listData={listData} showMenu={showMenu}/>
      </div>
      <Button style={{'width':'30%',margin:'auto',marginTop:'3rem'}} type="primary" onClick={addItem}>记录</Button>
    </div>
  );
}

export default (): React.ReactNode => (
  <Home>
  </Home>
);
