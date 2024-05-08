import React from 'react'

const Six = () => {
  return (
    <section className='w-full'>
      <main className='mx-auto max-w-[80rem]'>
        <div>
            <h1 className='font-medium text-[56px] text-center pt-20'>What people says</h1>
            <p className='font-normal text-[18px] text-center text-[#51586A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non <br /> nisl tincidunt ut elementum turpis.</p>
             <p className='font-normal text-[24px] text-center pt-14 text-[#51586A]'>“Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> cupidatat non proident, sunt in culpa.”</p>
        </div>

        <div className='flex justify-center pt-10'>
            <div>
                <img src="/images/Group 16.png" alt="" />
            </div>
            <div>
                <h1 className='font-medium text-[30px]'>Joe Elia</h1>
            </div>
        </div>
        <p className='font-normal text-[16px] text-center text-[#51586A]'>User Interface Design at PCL Lab</p>
        
      </main>
    </section>
  )
}

export default Six