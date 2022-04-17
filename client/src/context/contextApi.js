import React, { useState,createContext } from 'react'

const FeedBackContext = createContext()


export const FeedBackProvider = ({children}) => {

const [postFeedBack,setPostedFeedBack]=useState([])


return (
  <FeedBackContext.Provider value={{postFeedBack,setPostedFeedBack}}>
   {children}
  </FeedBackContext.Provider>
)

}

export default FeedBackContext;