
import React from 'react'

const Ten = () => {
  return (
    <section className='w-full bg-[#F5F5F5]'>
      <main className='mx-auto max-w-[80rem] pt-24'>
        <div className='md:flex flex-row md:justify-end justify-start gap-40  md:p-0 p-4 '>
            <div>

            </div>
            <div>
             <img src="/images/nav2.png" alt="" />
            </div>
            <div className='font-normal text-[18px] flex gap-16 pt-10 pr-3'>
             <a href="">Projects</a>
             <a href="">Journey</a>
             <a href="">Service</a>
             <a href="">Contact</a>
            </div>
        </div>

        <div className=' h-0.5 border-2 border-[#a2a0ad] my-6'></div>
        <div className='p-5 flex md:flex-row flex-col md:justify-between  gap-5'>
            <h1 className='font-normal text-[18]'>©interactiveArif 2021. All rights reserved.</h1>
            <div className='flex '>
                <h1  className='font-normal text-[18] '>Privacy Policy</h1>
                <h2  className='font-normal text-[18]'>:  Terms of Conditions</h2>
            </div>
        </div>

      </main>
    </section>
  )
}

export default Ten