import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram  } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className="bg-[#111827] text-[#9CA3AF] flex-col p-4 justify-center items-center">
      
      <div className="flex justify-around  mx-16 my-10 border-b-2 pb-8">
        
        <div className="flex flex-col space-y-4">
          <div className="text-white text-xl font-bold ">EduTech <span className="text-[#60A5FA]">Pro</span></div>
          <div>Transforming education through <br/>technology and innovation</div>
        </div>

        <div className="flex flex-col space-y-4">
            <div className="text-lg text-white font-bold">Quick Links</div>
            <div>About Us</div>
            <div>Courses</div>
            <div>Testimonials</div>
            <div>Contact</div>
        </div>

        <div className="flex flex-col space-y-4">
            <div className="text-lg text-white font-bold">Support</div>
            <div>Help Center</div>
            <div>Terms Of Service</div>
            <div>Privacy Policy</div>
            <div>FAQ</div>
        </div>

        <div className="flex flex-col space-y-4">
            <div className="text-lg font-bold text-white">Contact Us</div>
            <div className="flex gap-x-2"><IoIosMail className="text-2xl"/>@email.com</div>
            <div className="flex gap-x-2"><IoCall className="text-xl"/>+1 1234567890</div>
            <div className="flex text-xl gap-x-3">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin/>
              <FaInstagram />
            </div>
        </div>

      </div>

      <div className="flex justify-center my-12">
        <p>© 2025 EduTechPro. All rights reserved.</p>
      </div>
    </div>
  )
}
