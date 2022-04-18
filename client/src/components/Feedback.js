import React,{useState,useContext} from 'react';
import image from "../images/Vector.png";
import down from "../images/down.png";
import axios from "axios";
import FeedbackList from './FeedbackList';
import FeedBackContext from "../context/contextApi"

function Feedback() {

  const {postFeedBack,setPostedFeedBack}=useContext( FeedBackContext)

  const [text, setText]=useState("")
  const [positive,setPositive]=useState("")
  const [negative,setNegative]=useState("")
  const [disable,setDisable]=useState(false)
  const [disable1,setDisable1]=useState(false)
 
  const feedbackHandler =(e)=> {

    if (e.target.innerText==="Yes") {
      setPositive(true)
      setDisable(true)
    } else  {
      setNegative(false)
      setDisable1(true)
   
    }

  }


  const formHandler = async (e) => {
    try {
      e.preventDefault();
      axios.post("https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback", {
        createdAt: new Date(),
        wasHelpful:positive || negative ,
        comment: text
      }).then (data => {
        setPostedFeedBack([...postFeedBack, data.data])
        setDisable(false);
        setDisable1(false);
        setText("");
      })
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className="container">
        <p className="question">Is this page helpfull?</p>
       
        <form onSubmit={formHandler}>

        <div className="button">
            <div  className="up">
              <button className="answer" disabled={disable} onClick={(e)=>feedbackHandler(e)}><img src= {image} alt="thums-up"/> Yes</button>
            </div>
        
            <div  className="up">
              <button className="answer1" disabled={disable1} onClick={(e)=>feedbackHandler(e)} > <img src= {down} alt="thums-down"/> No </button>
            </div>
          </div>

          <div className='submit-container'>

            <input placeholder='Any additional feedback?' onChange= {(e)=>setText(e.target.value)}/>
            <div className='btns'>
              <p className='skip'>Skip</p>
              <button className='btn-submit' >Submit</button>
            </div>
            
          </div>

        </form>

    </div>
    
    <FeedbackList details={postFeedBack} />
    </>
  )
}

export default Feedback