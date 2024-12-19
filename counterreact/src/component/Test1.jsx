import React from 'react'
import { useEffect } from 'react'




function Test1() {


    useEffect(() => {
        console.log("kesa hai bhai")
    
        return () => {
            console.log("kesa hai bhai tera remove karega")
            // cleanup code here if needed
        };
    
    }, [])

  return (
    <>
    <h1>Hello From test1</h1>
      
    </>
  )
}

export default Test1
