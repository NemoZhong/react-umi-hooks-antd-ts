import React,{useImperativeHandle,forwardRef} from 'react';
import { useBoolean } from 'ahooks';
import { Modal, List, Button,WhiteSpace } from 'antd-mobile';

interface HandleProps {
    handleList:HandleDataType[],
    ref?:any
}
interface HandleDataType{
    name:string,
    color?:string,
    handleFn:any
}
const HandleMenu: React.FC<HandleProps> = forwardRef((props,ref) => {
    const {handleList}=props
    const [showModal, { setTrue, setFalse }] = useBoolean(false);
    //methods
    useImperativeHandle(ref,()=>({
        showMenu:()=>{
            setTrue()
        }
    }))

    return (
        <div>
          
            <Modal
                popup
                visible={showModal}
                onClose={setFalse}
                animationType="slide-up"
                // afterClose={() => { alert('afterClose'); }}
            >
                <List className="popup-list">
                    <WhiteSpace size="lg"/>
                    {
                        handleList.map((item, index) => (
                            <List.Item key={index} onClick={item.handleFn} style={{color:item.color,textAlign:'center'}}>{item.name}</List.Item>
                        ))
                    }
                    <List.Item>
                        <Button type="ghost" onClick={setFalse}>取消</Button>
                    </List.Item>
                </List>
            </Modal>
        </div>

    )
})

export default HandleMenu