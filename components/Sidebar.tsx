
import React from 'react'
import {GiTie} from "react-icons/gi"
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import Image from 'next/image'
import {GoLocation} from "react-icons/go"
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div>
       <Image
      src="/porfoliopic.png"
      width={500}
      height={500}
      alt="Picture"
      className='w-32 h-32 mx-auto rounded-full'
    />
   <h3 className='my-4 text-3xl font-medium tracking-wider'><span>Ajay </span>Choudhary</h3>
   <p className='px-2 py-1 my-3 bg-red-200 rounded-full'>Associate UI Developer</p>
   <Link className='flex items-center justify-center px-2 py-1 my-3 bg-orange-700 rounded-full' href='' download='name'>
      <GiTie className="w-6 h-6" />Download Resume</Link>
   {/* social icons */}
   {/* address  */}
   <div style={{display:'flex', justifyContent:'center'}}>
      <a href=''>
         <AiFillYoutube className="w-18 h-18"/>
      </a>
      <a href=''>
         <AiFillGithub className="w-18 h-18"/>
      </a>
      <a href=''>
         <AiFillLinkedin className="w-18 h-18"/>
      </a>
      </div>
      <div>
         <GoLocation />
         <span>Kolkata, India</span>
      </div>
      <div>
      <p>ajay.choudhary@brainvire.com</p>
      <p>9116881192</p>
   </div>
   {/* Email Button  */}
   <button>Email Me</button>
   <button>Toggle Theme</button>
    </div>
  )
}

export default Sidebar
