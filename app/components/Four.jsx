import React from 'react'

const Four = () => {
  return (
   <section className='w-full md:bg-[#5D3BEE]'>
      <main className='mx-auto max-w-[80rem]'>
        {/* heading and para  */}
        <div className='md:text-white p-10 flex md:flex-row flex-col justify-center pt-12 md:gap-8 gap-8'>
            <h1 className='font-medium text-[56px] leading-tight pr-28'>Take a look at <br />
               my recent projects</h1>
             <p className='font-normal text-[18px] md:pt-8 '>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In urna, non nisl tincidunt ut <br /> elementum turpis.</p>  
        </div>

       <div className='flex md:flex-row flex-col justify-center md:gap-10 gap-2'>
        {/* card 1 */}
       <div className='flex md:flex-row flex-col md:gap-8 gap-4 p-10 md:bg-[#FBFAFF] '>
          <div>
            <h1 className='font-medium text-[32px] pt-4'>Wally Website</h1>
            <p className='font-normal text-[#51586A] text-[16px] pt-4'>Lorem ipsum dolor amet, <br /> consectetur adipiscing st elit.</p>
            <h2 className='font-bold text-[18px] underline pt-4'>Case Study</h2>
          </div>
          <div>
            <img src="/images/Rectangle 550.png" alt="error" />
          </div>
        </div>
           {/* card 1 */}
        <div className='flex md:flex-row flex-col md:gap-8 gap-4 p-10 md:bg-[#FBFAFF] '>
          <div>
            <h1 className='font-medium text-[32px] pt-4'>Wally Website</h1>
            <p className='font-normal text-[#51586A] text-[16px] pt-4'>Lorem ipsum dolor amet, <br /> consectetur adipiscing st elit.</p>
            <h2 className='font-bold text-[18px] underline pt-4'>Case Study</h2>
          </div>
          <div>
            <img src="/images/Rectangle 557.png" alt="error" />
          </div>
        </div>
       </div>
      {/* second */}
       <div className='flex md:flex-row flex-col justify-center md:gap-10 gap-2 pt-8'>
        {/* card 1 */}
       <div className='flex md:flex-row flex-col md:gap-8 gap-4 p-10 md:bg-[#FBFAFF] '>
          <div>
            <h1 className='font-medium text-[32px] pt-4'>Wally Website</h1>
            <p className='font-normal text-[#51586A] text-[16px] pt-4'>Lorem ipsum dolor amet, <br /> consectetur adipiscing st elit.</p>
            <h2 className='font-bold text-[18px] underline pt-4'>Case Study</h2>
          </div>
          <div>
            <img src="/images/Rectangle 554.png" alt="error" />
          </div>
        </div>
           {/* card 1 */}
        <div className='flex md:flex-row flex-col md:gap-8 gap-4 p-10 md:bg-[#FBFAFF] '>
          <div>
            <h1 className='font-medium text-[32px] pt-4'>Wally Website</h1>
            <p className='font-normal text-[#51586A] text-[16px] pt-4'>Lorem ipsum dolor amet, <br /> consectetur adipiscing st elit.</p>
            <h2 className='font-bold text-[18px] underline pt-4'>Case Study</h2>
          </div>
          <div>
            <img src="/images/Rectangle 553.png" alt="error" />
          </div>
        </div>
       </div>
          {/* button */}
          <div className='flex md:justify-center pl-10 md:pt-20 md:pb-20 '>
            <h1 className='font-bold  md:bg-white bg-slate-300 text-[18px] p-1.5'>All Projects</h1>
          </div>

      </main>
   </section>
  )
}

export default Four