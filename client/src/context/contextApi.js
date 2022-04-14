import React, { useState, useEffect, createContext } from 'react'

const FeedBackContext = createContext()


export const FeedBackProvider = ({children}) => {
const [allFeedBack,setAllFeedback]=useState([])

const fetchAllFeedBack= async() =>  {
  try {

    const response= await fetch('https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback')
    const data= await response.json()
    console.log("countries", data)
    setAllFeedback(data)

  }catch (error) {
    console.log(error)
  }
}
useEffect(()=> {
  fetchAllFeedBack();
},[])

return (
  <FeedBackContext.Provider value={{allFeedBack,setAllFeedback}}>
   {children}
  </FeedBackContext.Provider>
)

}

export default FeedBackContext;