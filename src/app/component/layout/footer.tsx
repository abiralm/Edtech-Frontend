import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#111827] text-[#9CA3AF] flex-col p-4 justify-center items-center">
      
      <div className="flex flex-col sm:flex-row justify-around sm:justify-evenly mx-8 my-5 sm:mx-16 sm:my-10 border-b-2 pb-6 sm:pb-8 gap-4">
        
        {/* Logo and Tagline */}
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
          <div className="text-white text-xl font-bold">EduTech <span className="text-[#60A5FA]">Pro</span></div>
          <div className="hidden md:block">
            Transforming education through <br/>technology and innovation
          </div>
        </div>
        
        {/* Quick Links and Support - Combined in mobile, separate in desktop */}
        <div className="flex justify-between sm:justify-around gap-12">
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <div className="text-base sm:text-lg text-white font-bold">Quick Links</div>
            <div className="text-sm sm:text-base">About Us</div>
            <div className="text-sm sm:text-base">Courses</div>
            <div className="text-sm sm:text-base">Testimonials</div>
            <div className="text-sm sm:text-base">Contact</div>
          </div>

          <div className="flex flex-col space-y-2 sm:space-y-4">
            <div className="text-base sm:text-lg text-white font-bold">Support</div>
            <div className="text-sm sm:text-base">Help Center</div>
            <div className="text-sm sm:text-base">Terms Of Service</div>
            <div className="text-sm sm:text-base">Privacy Policy</div>
            <div className="text-sm sm:text-base">FAQ</div>
          </div>
        </div>
        
        {/* Contact Us */}
        <div className="flex flex-col space-y-2 sm:space-y-4">
          <div className="text-base sm:text-lg font-bold text-white">Contact Us</div>
          <div className="flex gap-x-2 items-center"><IoIosMail className="text-2xl"/>info@edutechpro.com</div>
          <div className="flex gap-x-2 items-center"><IoCall className="text-xl"/>+1 1234567890</div>
          <div className="flex text-xl gap-x-3">
            <FaFacebook className="hover:text-[#60A5FA] cursor-pointer" />
            <FaTwitter className="hover:text-[#60A5FA] cursor-pointer" />
            <FaLinkedin className="hover:text-[#60A5FA] cursor-pointer" />
            <FaInstagram className="hover:text-[#60A5FA] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center my-6 sm:my-12">
        <p>© 2025 EduTechPro. All rights reserved.</p>
      </div>
    </div>
  );
};