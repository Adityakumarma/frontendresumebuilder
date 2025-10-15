import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { deleteResumeAPI, getAllResumesAPI } from '../service/allAPI';
import Swal from 'sweetalert2'

function History({ }) {
  const [userresume, setUserresume] = useState({
    profesionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      gitHub: "",
      linkedIn: "",
      portfolio: ""
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: ""
    },
    experience: {
      jobRole: "",
      company: "",
      jobLocation: "",
      duration: ""
    },
    skill: [],
    summary: ""
  });

  const getResumeHistory = async () => {
    try {
      const result = await getAllResumesAPI()
      console.log(result.data);
      setUserresume(result.data)
      console.log(userresume);
      
      

    } catch (error) {
      console.log(error);

    }
  }

  console.log(userresume);

  const deleteresume = async(id)=>{
    const result = await deleteResumeAPI(id)
    console.log(result);
    Swal.fire({
  title: "Resume deleted Successfully!",
  icon: "success"
});
    getResumeHistory()
    
  }

  useEffect(() => {
    getResumeHistory()
  }, [])



  return (
    <>
      <div>
        <h1 className='text-center mt-5 text-primary'> Resumes History</h1>
        <Link to={"/"} style={{ marginTop: "-50px" }} className='float-end me-5'>Back</Link>
      </div>
      <div>
        <Box component="section" className='container-fluid' >
          <div className="row mt-5">
            {userresume?.length > 0 ?
              userresume?.map((item,index) => (
                <div className="col-md-4" key={index}>

                  <Paper elevation={3} sx={{ my:5, p:2, textAlign:"center" }}>
                    <div className=' d-flex justify-content-between align-items-center'>
                      <p>resume no:{index+1}</p>
                      <button type='button' onClick={()=>deleteresume(item?.id)}  className='btn btn-danger '>x</button>
                    </div>
                    <div className=' mt-3 p-3'>
                      <h2 className=''>{item.professionalData.name}</h2>
                      <h4>{item.professionalData.JobTitle}</h4>
                      <p><span>{item.professionalData.phone}</span> | <span>{item.professionalData.email}</span> | <span>{item.professionalData.location}</span></p>
            <div className=' d-flex gap-2 justify-content-center'>
              <Link href={item.professionalData.github}>GITHUB</Link>|
              <Link href={item.professionalData.linkedIn}>LINKEDIN</Link>|
              <Link href={item.professionalData.portfolio}>PORTFOLIO</Link>|
            </div>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Summary</Divider>
            <p style={{ textAlign: "justify" }}>{item.summary}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Education</Divider>
            <p>{item.educationData.course} | {item.educationData.college} | {item.educationData.university}  | {item.educationData.year}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Professional Experience</Divider>
            <h5>{item.experience.jobrole}</h5>
            <p>{item.experience.company} | {item.experience.joblocation} | {item.experience.duration}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Skills</Divider>
            <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap", gap: "10px" }}>
              {item.skill.map((item)=>(
              <Button  variant='contained'> {item}</Button>
              ))}
              
              
             

            </Stack>
                      
                    </div>


                  </Paper>
                </div>
              ))

              :
              <h1>No Resumes Available</h1>

            }


          </div>

        </Box>
      </div>

    </>
  )
}

export default History