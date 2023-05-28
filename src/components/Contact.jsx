import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const email = useSelector((state) => state.user.userDetails.email);
 
  return (
    <div>This is contact page your email is {email} </div>
  )
}

export default Contact