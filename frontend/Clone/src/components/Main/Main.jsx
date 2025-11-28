import React, { useContext } from 'react'
import Boy from '../../assets/boy.jpeg'
import { HiLocationMarker } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { TfiGallery } from "react-icons/tfi";
import { FaMicrophone } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import {Context} from '../../context/Context';
import { RiGeminiFill } from "react-icons/ri";



const Main = () => {

    const {onSent , recentprompt, showresult , loading ,  resultdata , setInput , input} = useContext(Context)




  return (
<div className='flex-1 pb-[15vh] relative min-h-screen'>    {/* ----main */}
          
            {/* ----nav */}
        <div className='flex items-center justify-between text-3xl px-6  py-4 text-[#585858] '>
                <p>Gemini</p>
                <img src={Boy} alt="user_img" 
                className="w-[60px] h-[60px] rounded-full object-cover cursor-pointer"/>
        </div>

        {/* main-container */}
      <div className='w-[900px] mx-auto'>

        {!showresult ?
        <> 
        <div className='mx-6 my-5 text-6xl text-[#c4c7c5] font-semiboldbold p-6 '>

      <p><span id='name'>Hello , Sujal</span></p>
      <p className='mt-4'>How can I Help you today ?</p>
      </div>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-8 p-10'> 

        {/* card */}
        <div className='h-[200px] p-5 bg-[#f0f4f9] rounded-lg cursor-pointer relative  hover:bg-[i#dfe4ea]'>
        <p className='text-[#585858] text-lg'>Suggest beautiful places to see on an upcoming road trip</p>
        <div className='absolute bg-white rounded-lg bottom-4  right-4 w-12 h-12 flex items-center justify-center'> 
          <HiLocationMarker className="text-2xl"/> </div>
        </div>
    {/* ----------- */}
         <div className='h-[200px] p-5 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] transition-all'>
        <p className='text-[#585858] text-lg'>Briefly summarize this concept: urban planning </p>
        <div className='absolute bg-white rounded-lg bottom-4  right-4 w-12 h-12 flex items-center justify-center'>
         <FaLightbulb className="text-2xl" /> </div>
        </div>
        {/* ------------- */}
         <div className='h-[200px] p-5 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] transition-all'>
        <p className='text-[#585858] text-lg'>Brainstorm team bonding activities for our work retreat</p>
        <div className='absolute bg-white rounded-lg bottom-4  right-4 w-12 h-12 flex items-center justify-center'> <FaRegMessage className="text-2xl"/> </div>
        </div>
        {/* -------- */}
         <div className='h-[200px] p-5 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] transition-all' >
        <p className='text-[#585858] text-lg'>Improve the readability of the following code</p>
        <div className='absolute bg-white rounded-lg bottom-4  right-4 w-12 h-12 flex items-center justify-center'> <IoCodeSlash className="text-2xl"/> </div>
        </div>

      </div>
        </>
        :  (
  <div id="resultScroll" className="p-3 max-h-[70vh] overflow-y-scroll">

    {/* 2 rows, 2 columns layout */}
    <div className="grid grid-cols-[50px_1fr] gap-y-6 gap-x-4">

      {/* Row 1: user */}
      <img
        src={Boy}
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />
      <p className="text-lg">{recentprompt}</p>

      {/* Row 2: Gemini */}
      <RiGeminiFill
        className="text-3xl text-[#1a73e8] bg-[#e8f0fe] p-2 rounded-full"
      />
      {loading ? <div id='loader'>  
        <hr /> <hr /> <hr /> 
      </div> :
      <div
        className="text-[15px] leading-7 whitespace-pre-line font-light"
        dangerouslySetInnerHTML={{ __html: resultdata }}
      />
      }
      

    </div>

  </div>
)
}

      
      {/* main-bottom */}
      <div className='absolute bottom-10 w-full max-w-[900px]  py-2 m-auto'> 

        {/* search-box */}
        <div className='flex items-center justify-between gap-10 bg-[#f0f4f9] px-10 py-5 rounded-full'>

          <input 
          onChange={(e)=>setInput(e.target.value)}
          value={input}
          type="text" placeholder='Ask Anything'
          className='w-full px-2 py-2 outline-none cursor-pointer'/>

          <div className='flex gap-5'>
          <div className='text-2xl'> <TfiGallery /> </div>
          <div className='text-2xl'> <FaMicrophone /> </div>
          <div
          onClick={()=>onSent()}
           className='text-2xl'> <IoSendSharp /> </div>
          </div>

          </div>

          {/* bottominfo */}
          <p className='text-center mt-3'> Gemini can make mistakes , so double-check it</p>

         
       
      </div>

      </div>

            </div>
  )
}

export default Main