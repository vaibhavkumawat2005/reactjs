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
    <h1 className='hey'>Hello from Test1</h1>
      
    </>
  )
}

export default Test1
