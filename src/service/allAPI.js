import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

// 1. add resume

export const addResumeAPI = async (resume)=>{
   return  await commonAPI("POST", `${BASEURL}/all-resumes`,resume)
}


// 2. get a resume

export const getAResumeAPI = async (id)=>{
   return  await commonAPI("GET", `${BASEURL}/all-resumes/${id}`,{})
}

// update resume

export const updateAResumeAPI = async (id,resume)=>{
   return  await commonAPI("PUT", `${BASEURL}/all-resumes/${id}`,resume)
}

// get allresumes
export const getAllResumesAPI = async ()=>{
   return  await commonAPI("GET", `${BASEURL}/all-resumes`)
}

// delete resume
export const deleteResumeAPI = async (id)=>{
   return  await commonAPI("DELETE", `${BASEURL}/all-resumes/${id}`)
}