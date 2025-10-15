import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {

  return (
    <>
   
    <div className=' bg-primary shadow'>
     <div className="row pt-3 mt-2 ms-3 me-5 d-flex justify-content-evenly">
      <div className="col-2 "><h5>Our customers have been hired by</h5></div>
      <div className="col-2 pb-1 "><img src="https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent-1024x1024.png" alt="amazon" style={{width:"70px" }} /></div>
      <div className="col-2"><img src="https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo.png" alt="" style={{width:"90px"}} /></div>
      <div className="col-2 pt-2"><img src="https://camunda.com/wp-content/uploads/2022/09/TCS_NewLogo_Final_RGB.png" alt="" style={{width:"90px"}}/></div>
      <div className="col-2 pt-2"><img src="https://e7.pngegg.com/pngimages/318/367/png-clipart-logo-deloitte-brand-product-font-blockchain-text-logo.png" alt="" style={{width:"90px"}}/></div>
      <div className="col-2"><img src="https://www.pngall.com/wp-content/uploads/15/EY-Logo-PNG-Images-HD.png" alt="" style={{width:"40px"}}/></div>
     </div>
     <div className=' d-flex justify-content-center  '>
      <FaFacebook className=' me-4' style={{width:"30px", height:"40px"}} />
      <FaInstagram className=' me-4'  style={{width:"30px", height:"40px"}}/>
      <FaXTwitter style={{width:"30px", height:"40px"}}/>


     </div>
     <div className=' text-center mt-3 pb-2  '>
    <p   >About Us | Terms & Conditions | Privacy Policy | Affiliates | Contact Us | Faqs | Accessibility | Cookies and Tracking Policy | Sitemap | Our AI Resume Builder</p>
    <p>© Copyright Owned by Rbuilder</p>
     </div>

    </div>
    
    </>
  )
}

export default Footer