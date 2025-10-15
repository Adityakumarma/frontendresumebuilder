import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAResumeAPI, updateAResumeAPI } from '../service/allAPI';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto"
};


function Edit({ resumeId,setUserInput }) {
    const [edituserInput, setedituserInput] = useState({
        id: "",
        professionalData: {
            name: "",
            JobTitle: "",
            location: "",
            email: "",
            phone: "",
            github: "",
            linkedIn: "",
            portfolio: "",
        },
        educationData: {
            course: "",
            college: "",
            university: "",
            year: ""

        },
        experience: {
            jobrole: "",
            company: "",
            joblocation: "",
            duration: "",
        },
        skill: [],
        summary: ""
    })
    const [inputSkill, setInputskill] = useState("")

    const addSkill = (inputSkill) => {
        // console.log("user input :" + inputSkill);
        if (inputSkill) {
            if (edituserInput.skill.includes(inputSkill)) {
                alert("ALREADY ADDED!")
            } else {
                setedituserInput({ ...edituserInput, skill: [...edituserInput.skill, inputSkill] })
            }
        }

    }

    const removeskill = (skill) => {
        setedituserInput({ ...edituserInput, skill: edituserInput.skill.filter(item => item != skill) })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        getEditResume(resumeId)
    }
    const handleClose = () => setOpen(false);

    const SkillsArray = ["HTML", 'CSS', 'JAVASCRIPT', 'REACT', 'MONGODB', 'NODE.JS']
    // console.log(resumeId);

    const getEditResume = async (resumeId) => {
        try {
            const result = await getAResumeAPI(resumeId)
            // console.log(result);
            setedituserInput(result.data)

        } catch (error) {
            // console.log(error);

        }
    }
    // console.log(edituserInput);

  const UpdateResume = async () => {
    try {
        const result = await updateAResumeAPI(resumeId, edituserInput);

        if (result.status >= 200 && result.status < 300) {
            Swal.fire({
  title: "Edit Successfull!",
  icon: "success"
});

            // Update parent component state if needed
            if (setUserInput) {
                setUserInput(edituserInput);
            }

            // Close modal after successful update
            handleClose();
        } else {
            Swal.fire({
  icon: "error",
  title: "Failed To Update",
  text: "Please Try Again!"
  
});
        }
    } catch (error) {
        console.error("Error updating resume:", error);
       Swal.fire({
  icon: "error",
  title: "Oops! Something went wrong!"
});
    }
};

const handleClear = () => {
    setedituserInput({
        id: "",
        professionalData: {
            name: "",
            JobTitle: "",
            location: "",
            email: "",
            phone: "",
            github: "",
            linkedIn: "",
            portfolio: "",
        },
        educationData: {
            course: "",
            college: "",
            university: "",
            year: ""
        },
        experience: {
            jobrole: "",
            company: "",
            joblocation: "",
            duration: "",
        },
        skill: [],
        summary: ""
    });
    setInputskill(""); // clear the skill input field too
};



    return (
        <>
            <button onClick={handleOpen} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaEdit /></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <div >
                            <h1 >Personal Details</h1>
                            <div className='d-flex row p-5'>
                                <TextField value={edituserInput.professionalData.name} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, name: e.target.value } })} id="name" label="Full Name" variant="standard" />
                                <TextField value={edituserInput.professionalData.JobTitle} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, JobTitle: e.target.value } })} id="jobtitle" label="Job Title" variant="standard" />
                                <TextField value={edituserInput.professionalData.location} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, location: e.target.value } })} id="location" label="Location" variant="standard" />

                            </div>
                        </div >
                        <div>
                            <h1>Contact Details</h1>
                            <div className='d-flex row p-5'>
                                <TextField value={edituserInput.professionalData.email} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, email: e.target.value } })} id="email" label="Email" variant="standard" />
                                <TextField value={edituserInput.professionalData.phone} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, phone: e.target.value } })} id="phno" label="Phone Number" variant="standard" />
                                <TextField value={edituserInput.professionalData.github} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, github: e.target.value } })} id="git" label="GitHub Profile Link" variant="standard" />
                                <TextField value={edituserInput.professionalData.linkedIn} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, linkedIn: e.target.value } })} id="linkedin" label=" LinkedIn Profile Link" variant="standard" />
                                <TextField value={edituserInput.professionalData.portfolio} onChange={(e) => setedituserInput({ ...edituserInput, professionalData: { ...edituserInput.professionalData, portfolio: e.target.value } })} id="portfolio" label="Portfolio Link" variant="standard" />

                            </div>
                        </div >
                        <div>
                            <h1> Education Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={edituserInput.educationData.course} onChange={(e) => setedituserInput({ ...edituserInput, educationData: { ...edituserInput.educationData, course: e.target.value } })} id="coursename" label="Course Name" variant="standard" />
                                <TextField value={edituserInput.educationData.college} onChange={(e) => setedituserInput({ ...edituserInput, educationData: { ...edituserInput.educationData, college: e.target.value } })} id="clgname" label="College Name" variant="standard" />
                                <TextField value={edituserInput.educationData.university} onChange={(e) => setedituserInput({ ...edituserInput, educationData: { ...edituserInput.educationData, university: e.target.value } })} id="uni" label="University" variant="standard" />
                                <TextField value={edituserInput.educationData.year} onChange={(e) => setedituserInput({ ...edituserInput, educationData: { ...edituserInput.educationData, year: e.target.value } })} id="passyr" label="Year of Passing" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <h1> Professional Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={edituserInput.experience.jobrole} onChange={(e) => setedituserInput({ ...edituserInput, experience: { ...edituserInput.experience, jobrole: e.target.value } })} id="joborintern" label="Job or Intership" variant="standard" />
                                <TextField value={edituserInput.experience.company} onChange={(e) => setedituserInput({ ...edituserInput, experience: { ...edituserInput.experience, company: e.target.value } })} id="companynams" label="Company Name" variant="standard" />
                                <TextField value={edituserInput.experience.joblocation} onChange={(e) => setedituserInput({ ...edituserInput, experience: { ...edituserInput.experience, joblocation: e.target.value } })} id="companyloc" label="Location" variant="standard" />
                                <TextField value={edituserInput.experience.duration} onChange={(e) => setedituserInput({ ...edituserInput, experience: { ...edituserInput.experience, duration: e.target.value } })} id="duration" label="Duration" variant="standard" />
                            </div>
                        </div>
                        <div>
                            <h1>Skills</h1>
                            <div className=' d-flex  align-items-center justify-content-between'>
                                <TextField value={inputSkill} onChange={(e) => setInputskill(e.target.value)} sx={{ width: "550px" }} id="skill" label="Add Skill" variant="standard" />
                                <Button onClick={() => addSkill(inputSkill)} variant="outlined">Add</Button>

                            </div>
                            <div className=' mt-3'>
                                <h4>Suggestions :</h4>
                                <div className=' d-flex flex-wrap gap-3 mt-2 '>
                                    {
                                        SkillsArray.map((userskills) => (
                                            <Button onClick={() => addSkill(userskills)} key={userskills} sx={{ color: "white", backgroundColor: "blue" }} variant="outlined">{userskills}</Button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h4 className=' mt-3'>Added Skills :</h4>
                                {
                                    edituserInput.skill.map((item) => (
                                        <span key={item} className=' btn btn-primary me-3'> {item} <button onClick={() => removeskill(item)} className=' text-light btn'><MdDelete />
                                        </button></span>

                                    ))
                                }

                            </div>
                        </div>
                        <div>
                            <h1> Summary</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={edituserInput.summary} onChange={e => setedituserInput({ ...edituserInput, summary: e.target.value })} multiline rows={3} id="summary" label="Write a short summary of yourself" variant="standard" />

                            </div>
                        </div>
                        <div className='d-flex justify-content-end gap-4'>
                            <Button onClick={handleClear} variant='outlined' color='error'>Clear</Button>
                            <Button onClick={UpdateResume} variant='outlined'>Update</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
