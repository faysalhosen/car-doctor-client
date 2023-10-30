import {AiOutlineSchedule } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
const ContactBanner = () => {
  return (
  
     <div className="flex items-center justify-around rounded-lg py-14 bg-black my-20">
      <div className="flex items-center gap-4 text-white">
        <AiOutlineSchedule size={35} className="text-[#FF3811]"/>
      <div>
      <p className="text-xs">We are open monday-friday</p>
      <h3 className="text-xl font-medium">7:00 am - 9:00 pm</h3>
      </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <FaPhoneVolume size={35} className="text-[#FF3811]"/>
      <div>
      <p className="text-xs">Have a question?</p>
      <h3 className="text-xl font-medium">+2546 251 2658</h3>
      </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <FaMapMarkedAlt size={35} className="text-[#FF3811]"/>
      <div>
      <p className="text-xs">Need a repair? our address</p>
      <h3 className="text-xl font-medium">Liza Street, New York</h3>
      </div>
      </div>
     </div>
    
  )
}

export default ContactBanner


