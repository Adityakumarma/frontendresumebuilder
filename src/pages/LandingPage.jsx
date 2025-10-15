import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section style={{width:"100%",overflow:"hidden",height:"450px", backgroundImage:"url('https://nzstaff.com/wp-content/uploads/2020/08/cv-builder-banner-1.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
      <div className='row pt-5'>
        <div className='col-12 col-md-4'></div>
        <div className='col-12 col-md-4 border border-2 border-black py-5 rounded my-5 text-center' style={{backgroundColor:"white"}}>
          <h2>Designed to get hired.</h2>
          <h4>Your skills, your story, your next job - all in one</h4>
          <Link to={"/resume"}><button className=' btn btn-primary mt-2'>Make Your Resume</button></Link>

        </div>
        <div className='col-12 col-md-4'></div>
      </div>
    </section>

    <section>
      <h3 className='text-center text-primary p-5'>TOOLS</h3>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-5">
          <h4>Resume</h4>
          <p>Create Unlimited new resumes and easily edit them afterwards</p>
          <h4>Cover Letter</h4>
          <p>Easily write professional cover letters</p>
          <h4>Jobs</h4>
          <p>Automatically recieve new and releveant job postings</p>
          <h4>Applications</h4>
          <p>Effortlessly manage and track your job application in an organised manner</p>

        </div>
        <div className="col-12 col-md-6">
          <img src="https://framerusercontent.com/images/JWab9OEDYeqwoOSDk7mDjfoQ8.png?lossless=1" alt="img" className='w-75 ms-5' />
          
        </div>
      </div>

    </section>

      <section style={{width:"100%",overflow:"hidden",height:"450px", backgroundImage:"url('https://picjumbo.com/wp-content/uploads/designer-workplace-working-on-website-layout-2210x1473.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
      
    </section>

      {/* testimonial */}
      <section className='px-5'>
        <h1 className="text-center p-5 text-primary">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h3>Trusted by professionals worldwide</h3>
            <p className='text-left fs-5'>Trusted by professionals worldwide.
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
              <br /><br />
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
              <br /><br />
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
            </div>
            <div className="row">
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emilygarland-1499327.jpg&fm=jpg" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg" alt="" /></div>
            </div>
            <div className="row">
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
              <div className="col-3"><img className='w-100 h-75 my-2 ' src="https://imgcdn.stablediffusionweb.com/2024/4/17/6d71579f-ecef-42de-b83e-c0cb8179130c.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default LandingPage