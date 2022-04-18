import React,{useEffect,useState,useContext} from 'react'
import {useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import FeedBackContext from "../context/contextApi"
import image from "../images/Vector.png";
import down from "../images/down.png";


function Detail({setIsCliked}) {
 const {setPostedFeedBack}=useContext( FeedBackContext)
  const params = useParams(); 
  const navigate = useNavigate();
  
  const [comment,setComment]=useState("")
  const [positive,setPositive]=useState("")
  const [negative,setNegative]=useState("")
  const [disable,setDisable]=useState(false)
  const [disable1,setDisable1]=useState(false)


  useEffect(()=> {
    axios.get(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${params.id}`)
    .then((response)=> {
      setComment(response.data.comment) 
    })
  },[params.id])

  const feedbackHandler =(e)=> {

    if (e.target.innerText==="Yes") {
      setPositive(true)
      setDisable(true)
    } else  {
      setNegative(false)
      setDisable1(true)
   
    }

  }

  const handleEdit = async (e)=> {
    e.preventDefault();
     await axios.put(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${params.id}`,{
      comment,
      wasHelpful:positive || negative ,
    }).then((data)=> {
      setPostedFeedBack([data.data])
    })
      navigate("/")
  }

  const closeHandler= ()=> {
    navigate("/")
  }
  return (
    <div className='edit-wrapper'>

      <form onSubmit={handleEdit}>
      <div className="titleCloseBtn">
        <button onClick={closeHandler}>X</button>
      </div>
        <h2>Edit Feedback</h2>

        <label>Is this page helpfull ?</label>
          <div className="button">
            <div  className="up">
              <button className="answer" disabled={disable} onClick={(e)=>feedbackHandler(e)}><img src= {image} alt="thums-up"/> Yes</button>
            </div>
        
            <div  className="up">
              <button className="answer1" disabled={disable1} onClick={(e)=>feedbackHandler(e)} > <img src= {down} alt="thums-down"/> No </button>
            </div>
          </div>

          <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} />

          <button  className='btn-edit' >Edit</button>

      </form>

    </div>
  )
}

export default Detail