import React from 'react'

const Five = () => {
  return (
    <section className='w-full'>
       <main className='mx-auto max-w-[80rem]'>

        <div className='pt-24'>
            <h1 className='font-medium text-[32px] text-center text-[#5D3BEE]'>Hey,,,,It’s Arif</h1>
            <h2 className='font-medium text-[56px] text-center'>Interactive Designer</h2>
            <p className='font-normal text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non <br /> nisl tincidunt ut elementum turpis.</p>
        </div>

        <div>
        <div className=' h-0.5 border-2 border-[#b6bac4] my-16 mx-24'></div>
        <div className='flex justify-center md:gap-24 gap-10 md:p-0 p-10'>
            <div>
                <h1 className='font-medium md:text-[56px] text-[40] underline'>08+</h1>
                <h2 className='font-normal text-[18px]'>Years Experience</h2>
            </div>
            <div>
            <h1 className='font-medium md:text-[56px]  text-[40] underline'>21+</h1>
             <h2 className='font-normal md:text-[18px]  text-[30]'>Features & Awards</h2>
            </div>
            <div>
            <h1 className='font-medium md:text-[56px]  text-[40] underline'>97%</h1>
             <h2 className='font-normal text-[18px]'>Clients Rating</h2>
            </div>
        </div>
        <div className=' h-0.5 border-2 border-[#b6bac4] my-16 mx-24'></div>
        </div>
        <div className='flex justify-center'>
            <img src="/images/Group 18408.png" alt="arr" />
        </div>

       </main>
    </section>
  )
}

export default Five
