import React,{useEffect,useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  let params = useParams(); 
  const [userDetail,setUserDetail]=useState({
    comment:"",
    wasHelpful:""
  });

  const {comment,wasHelpful}=userDetail

  const onInputChange = e => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  
  useEffect(()=> {

   
    axios.get(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback/${params.id}`)
    .then((response)=> {
     setUserDetail(response.data) 
    })
  },[])
  return (
    <div>
      <from>

      <input type="text" value={comment}  onChange={e => onInputChange(e)}></input>

      <label>Is this page helpfull</label>
      <select>
        <option>Yes</option>
        <option>No</option>
      </select>

      <button>Submit</button>

      </from>

    </div>
  )
}

export default Detail