import React from 'react'
import {Link} from "react-router-dom"

function FeedbackList({details}) {
  console.log("from feedback list",details)

  if(details.length===0) {
    return <h3 style={{textAlign:"center", margin:"90px"}}>No feedback has been added yet.</h3>
  }
  return (
    <div>
     
      {details.map((item,index)=>{
        return (
          <div key={index}>
            <p>Comment :{item.comment}</p>
            <p>Page helpfull: {item.wasHelpful}</p>
            <p>Created at :{item.createdAt}</p>
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