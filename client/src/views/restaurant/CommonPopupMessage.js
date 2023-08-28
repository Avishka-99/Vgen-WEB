import React from "react";
import '../../styles/Restaurant/CommonPopupMessage.css';
import CloseIcon from '@mui/icons-material/Close';
const  CommonPopupMessage= (props) => {
    return props.triggerNew ? ( 
        <div className="messageContainer">
            <div className="messageContainerInner">
                <button className='Close-Btn' onClick={() => props.setTriggerNew(false)}><CloseIcon/></button>
                <h1 className="popup_message" style={{marginLeft:"0%"}}>Are you sure you want to {props.action} this {props.type} ?</h1><br />
                <button className="msg_cancel_btn" onClick={() => props.setTriggerNew(false)}>cancel</button>
                {props.action==='delete'?(
                    <button className="msg_delete_btn" onClick={()=>{props.myFunction()}}>delete</button>
                ):(
                    <button className="msg_delete_btn" onClick={()=>{props.myFunction()}} style={{backgroundColor:"#16bb58"}}>update</button>
                )}
                
            </div>
        </div>
    ): null
    
}
 
export default CommonPopupMessage;