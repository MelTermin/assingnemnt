import React,{useEffect,useState} from 'react'
import {useNavigate,useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
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
    })
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={(e)=>handleChange(e)}>

      <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} ></input>

      <label>Is this page helpfull</label>


      <button>Submit</button>

      </form>

    </div>
  )
}

export default Detail