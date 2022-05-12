import React,{useState} from 'react'
import { FaWindowClose} from "react-icons/fa";
import './Show.css'

function Showmodel() {
    const [model,setModel]=useState(false);
   const handlemode=()=>{
       setModel(!model)
   }
  return (
    <div>
        
 <button className='btn-modal' aria-hidden="true" onClick={handlemode} >
  Show Model
 </button><br/><br/>
{model && (
    <div>
           <div className='modal'></div>
 <div className='overlay'  onClick={handlemode}>
     <div className="modal-content">
     <p className='content'>There is no Model</p>
     <button className="close-modal"  onClick={handlemode}><FaWindowClose size={'25'}/></button>
     </div>
     
</div>
    </div>

)}


    </div>
  )
}

export default Showmodel