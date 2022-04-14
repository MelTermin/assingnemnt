import React,{useEffect,useState,useContext} from 'react'
import {useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import FeedBackContext from "../context/contextApi"


function Detail() {
 const {setAllFeedback,allFeedBack}=useContext( FeedBackContext)
  let params = useParams(); 
  let navigate = useNavigate();

  const [comment,setComment]=useState("")
  




  
  useEffect(()=> {

   
    axios.get(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${params.id}`)
    .then((response)=> {
      setComment(response.data.comment) 
    })
  },[params.id])

  const handleChange = async (e)=> {
    e.preventDefault();
     await axios.put(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${params.id}`,{
      comment
    }).then((data)=> {
      setAllFeedback([...allFeedBack, data.data])
    })
      navigate("/")
  }
  return (
    <div>
      <form onSubmit={handleChange}>

      <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} ></input>

      <label>Is this page helpfull</label>


      <button>Submit</button>

      </form>

    </div>
  )
}

export default Detail