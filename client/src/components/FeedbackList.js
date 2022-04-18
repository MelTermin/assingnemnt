import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

function FeedbackList({details}) {
  const [isClicked,setIsCliked]=useState(false);
  const navigate = useNavigate();

  const openModal = (id) => {
    setIsCliked(true)
    navigate(`/feedback/${id}`)
  }

  if(details.length===0) {
    return <h3 style={{textAlign:"center", margin:"90px"}}>No feedback has been added yet.</h3>
  }
  return (
    <div className='wrapper'>
     
      {details.map((item,index)=>{
        return (
          <div className='feedback-wrapper' key={index}>
            <p>Comment : <span >{item.comment}</span></p>
            <p>Page helpfull: {item.wasHelpful.toString()}</p>
           
              <button className="btn-submit" onClick={()=>openModal(item.id)} >Edit</button>
            
          </div>
        )
 
      })}
    </div>
  )
}

export default FeedbackList