import React from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Edit from './Edit';
import Stack from '@mui/material/Stack';
import {jsPDF} from "jsPDF";
import html2canvas from "html2canvas";

function Preview({userInput,isResumeAdded,resumeId,setUserInput}) {
  console.log(userInput);

  const downloadPDF = async()=>{
    const input = document.getElementById("result")
    const canvas = await html2canvas(input, {scale : 2})
    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("P","mm","a4")
    // const pdfWidth = pdf.internal.pageSize.getWidth()
    // const pdfHeight =(canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,"png",0,0,210,297)
    pdf.save("resume.pdf")

  }

  
  return (
    <>
      <Box component="section">
        <Stack direction={'row'} sx={{ gap: "10px", display: "flex", justifyContent: "end" }}>

     {isResumeAdded && <div className=' d-flex  gap-2'>
        <p><Edit resumeId={resumeId} setUserInput={setUserInput} /></p>
        <p><button type='button' onClick={downloadPDF} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaFileDownload /></button></p>
     </div>}
          <Link href="/History"> <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaHistory /></button></Link>
          <Link href="/" ><p className=' btn text-primary'>BACK</p>
          </Link>

        </Stack>
        <div className='mt-3 ms-4 p-2'>
          <Paper id="result"   elevation={3} sx={{ p: 2, textAlign: "center", padding: "50px" }} >
            <h2>{userInput.professionalData.name}</h2>
            <h4>{userInput.professionalData.JobTitle}</h4>
            <p><span>{userInput.professionalData.phone}</span> | <span>{userInput.professionalData.email}</span> | <span>{userInput.professionalData.location}</span></p>
            <div className=' d-flex gap-2 justify-content-center'>
              <Link href={userInput.professionalData.github}>GITHUB</Link>|
              <Link href={userInput.professionalData.linkedIn}>LINKEDIN</Link>|
              <Link href={userInput.professionalData.portfolio}>PORTFOLIO</Link>|
            </div>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Summary</Divider>
            <p style={{ textAlign: "justify" }}>{userInput.summary}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Education</Divider>
            <p>{userInput.educationData.course} | {userInput.educationData.college} | {userInput.educationData.university}  | {userInput.educationData.year}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Professional Experience</Divider>
            <h5>{userInput.experience.jobrole}</h5>
            <p>{userInput.experience.company} | {userInput.experience.joblocation} | {userInput.experience.duration}</p>
            <Divider sx={{ fontSize: "20px", marginBottom: "10px" }} >Skills</Divider>
            <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap", gap: "10px" }}>
              {userInput.skill.map((item)=>(
              <Button  variant='contained'> {item}</Button>
              ))}
              
              
             

            </Stack>


          </Paper>
        </div>

      </Box>



    </>
  )
}

export default Preview