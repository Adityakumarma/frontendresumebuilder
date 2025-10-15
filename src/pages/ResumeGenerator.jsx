import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function ResumeGenerator() {
  return (
    <>
    <div className=' container-fluid'>
      <h1 className=' text-center mt-5'> Create a job-winning resume in minutes</h1>
      <div className=' row mt-5'>
        <div className="col-1"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <IoDocumentTextSharp className=' text-primary fs-1 mb-3' />
         <h4>Add Your Information</h4>
         <p>Add pre-written examples to each section</p>
         <h5>Step 1</h5>
        </div>
        <div className="col-2"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <FaFileDownload className=' text-primary fs-1 mb-3'  />
         <h4>Download Your Resume</h4>
         <p>Download and start applying</p>
         <h5>Step 2</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className='text-center m-5'>
        <Link to={"/form"} className='btn btn-primary'> LET'S START</Link>
      </div>
    </div>
    </>
  )
}

export default ResumeGenerator