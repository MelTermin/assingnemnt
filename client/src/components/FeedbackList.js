import React from 'react'
import {Link} from "react-router-dom"

function FeedbackList({details}) {
 

  if(details.length===0) {
    return <h3 style={{textAlign:"center", margin:"90px"}}>No feedback has been added yet.</h3>
  }
  return (
    <div className='wrapper'>
     
      {details.map((item,index)=>{
        return (
          <div className='feedback-wrapper' key={index}>
            <p>Comment : <span className=''>{item.comment}</span></p>
            <p>Page helpfull: {item.wasHelpful.toString()}</p>
            <Link to= {`/feedback/${item.id}`}>
              <button className="btn btn-edit" >Edit</button>
            </Link>
          </div>
        )
 
      })}
    </div>
  )
}

export default FeedbackList