import React from 'react'
import { LuMenu } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { BsQuestion } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";

const Sidebar = () => {

    const [extended, setExtended] = React.useState(false)



  return (
  <div className={`h-screen overflow-hidden flex  flex-col justify-between bg-[#f0f4f9] px-4 py-5  transition-all  ${extended ? 'w-64' : 'w-20'}`}>

      {/* -------- top ------ */}
    <div className="flex flex-col ">

   <div className={`text-3xl  cursor-pointer  ${extended ? '': 'self-center'}`} 
   onClick={()=>setExtended(prev=>!prev)}
   > <LuMenu /> </div>   

   <div className={`mt-7 flex items-center gap-4 py-4 px-4 bg-[#e6eaf1] rounded-full ${extended ? 'justify-start' : 'justify-center '}`}> 

     <IoAddSharp className={`${extended ? 'text-2xl' : 'text-4xl'}`} />
     
    {extended ? <p className='text-gray-600 text-sm'>New Chat</p> : null }
   </div>    

     {extended ?
      <div>
         <p className='flex flex-col mt-10 mb-5'>Recent</p>
      <div className='text-lg flex items-start gap-3 py-4 px-4 pr-2  rounded-full cursor-pointer hover:bg-[#e2e6eb]'> <FaRegMessage /> 
      <p className='text-sm text-[#282828]'> What is react ....</p>
      </div>
      </div>
      :null}
   

        </div>  
        


        {/* --------- bottom ------ */}
        <div className='flex flex-col '>

        <div className='flex items-start gap-3 py-3 px-4 pr-2 rounded-full cursor-pointer hover:bg-[#e2e6eb] text-2xl'>
       <BsQuestion className={`${extended ? '' : 'items-center'}`} /> 
        {extended ? <p className='text-sm text-[#282828]'> Help</p>: null }
        </div>
           
         <div className='flex items-start gap-3 py-3 px-4 pr-2 rounded-full cursor-pointer hover:bg-[#e2e6eb] text-2xl'> 
        <MdOutlineHistory className={`${extended ? '' : 'items-center'}`} />

        {extended ?<p className='text-sm text-[#282828]'> Activity</p> :null}
        </div>
          

        <div className='flex items-start gap-3 py-3 px-4 pr-2 rounded-full cursor-pointer hover:bg-[#e2e6eb] text-2xl'> 
        <IoSettingsOutline  className={`${extended ? '' : 'items-center'}`}/>

        {extended ?  <p className='text-sm text-[#282828]'> Settings</p> :null}
          </div>
            
        </div>
    </div>
  )
}

export default Sidebar