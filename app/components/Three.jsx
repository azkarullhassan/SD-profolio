import React from 'react'

const Three = () => {
  return (
    <section className='w-full bg-[#F5F5F5]'>
      <main className='mx-auto max-w-[80rem] '>
        <div>
           <div>
           <h1 className='font-medium text-[56px] text-center'> Specialities</h1>
            <p className='font-normal text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, <br /> non nisl tincidunt ut elementum turpis.</p>
           </div>
           <div className='flex md:flex-row flex-col justify-center gap-10 pt-20 p-6'>
               <div className='shadow-sm rounded-lg p-9 bg-white'>
                <img src="/images/icon.png" alt="" />
                <h2 className='font-medium text-[32px]'>Product design</h2>
                <p>Lorem ipsum dolor sit amet, solor <br /> adipiscing elit. Non nisl solor ut <br /> elementum turpis.</p>
               </div>

               <div  className='shadow-sm rounded-lg p-9 bg-white'>
                <img src="/images/icon (1).png" alt="" />
                <h2 className='font-medium text-[32px]'>UI/UX Design</h2>
                Lorem ipsum dolor sit amet, solor <br /> adipiscing elit. Non nisl solor ut <br /> elementum turpis.
               </div>

               <div  className='shadow-sm rounded-lg p-9 bg-white'>
                <img src="/images/icon (2).png" alt="" />
                <h2 className='font-medium text-[32px]'>Interactive design</h2>
                <p>Lorem ipsum dolor sit amet, solor <br /> adipiscing elit. Non nisl solor ut <br /> elementum turpis.</p>
               </div>
           </div>
        </div>
      </main>
    </section>
  )
}

export default Three