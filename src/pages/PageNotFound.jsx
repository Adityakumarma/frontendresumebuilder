import React from 'react'
import { BiSolidError } from 'react-icons/bi'

function PageNotFound() {
  return (
    <>
    <div style={{marginBottom:"8%"}}>
      <BiSolidError  style={{color:"yellow",width:"100px",height:"50px", marginTop:"100px",marginLeft:"46%"}} />
       <h1 className=' text-center fw-bolder ' >404 ERROR!</h1> 
       <h5 className=' text-center fw-bolder pb-5' >PAGE NOT FOUND</h5>
    </div >
    </>
  )
}

export default PageNotFound