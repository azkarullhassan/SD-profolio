'use client'
import React, { useState } from 'react'
 
 
 const Navbar = () => {
   let Links =[
     {name:"Projects",link:"/"},
     {name:"Journey",link:"/"},
     {name:"Service",link:"/"},
     {name:"Contact",link:"/"},
     
     
   ];
   let [open,setOpen]=useState(false);
 return (
   <div className=' w-full'>
     <div className='mx-auto max-w-[80rem] md:flex items-center justify-between bg-white py-4 md:px-5 px-2'>
     <div className='flex '>
              <img className='p-5' src="/images/nav1.png" alt="" />
              <h1 className='font-medium text-[22px]  pt-6'>hi@arif.interactive</h1>
          </div>
     
     <div onClick={()=>setOpen(!open)} className=' absolute right-8 top-6 cursor-pointer md:hidden pt-4'>
     <ion-icon name="grid-outline" size="large"></ion-icon>

     </div>
      
 
     <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white   left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      <div className='hidden md:flex pr-24'>
        <img src="/images/nav2.png" alt="" />
      </div>
       {
         Links.map((link)=>(
           <li key={link.name} className='md:ml-8 font-medium text-[16px] md:my-0 my-5 '>
             <a href={link.link} className='  px-4 '>{link.name}</a>
            
           </li>
          
         ))
        
       }
      
     </ul>
    
     </div>
    
   </div>
 )
 }
 
 
  
export default Navbar