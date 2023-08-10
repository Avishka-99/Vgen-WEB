import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/popupContainer.css'
import {MostCount} from './MostCount';
const PopupContainer = (props) => {
    
  
    return props.trigger ? ( 
      <div className="popup-c">
        <div className="popup-inner-c">
            <button className='Close-Btn' onClick={() => props.setTrigger(false)}><CloseIcon/></button>
            <h2>{props.title}</h2>
            {props.data.map((p)=>(
                <MostCount productData={p}></MostCount>
            ))}
        </div>
      </div>
    ): null;
}
 
export default PopupContainer;