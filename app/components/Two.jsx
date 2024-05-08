import React from 'react'

const Two = () => {
  return (
    <section className=" w-full bg-[#F5F5F5] ">
    <main className="mx-auto max-w-7xl  flex   md:gap-16  pl-4 md:pl-10 py-24">
        {/* main */}
        <div className='w-full flex flex-col md:flex-row'>
        <div className=' flex gap-4 '>
            {/* child one */}
            {/* empty div */}
           <div className='md:w-20 w-40 h-1 border-2 border-[#5D3BEE] my-6'></div>
           {/* 2nd */}
           <div>
           <p className="text-gray-950 text-[36px] md:text-[42px] font-medium font-['DM Sans'] leading-[50px]">Meet my <br /> 
recent clients</p>
           </div>
           </div>

           {/* child two */}
           <div className='flex flex-row md:flex-col gap-8 md:gap-12 justify-center w-max-5xl md:w-full pt-16 pl-0 md:pl-24 '>
           {/* 1st */}
           <div className='flex flex-col md:flex-row gap-14'>
            <img src="/images/Google.png" alt="client-1" />
            <img src="/images/warner bros.png" alt="client-2" />
            <img src="/images/Mailchamp.png" alt="client-3" />
            <img src="/images/Adobe.png" alt="client-4" />
           </div>
           {/* 2nd */}
           <div className='flex flex-col md:flex-row gap-14'>
        <img src="/images/Upwork.png" alt="client-5" />
        <img src="/images/Creative cloude.png" alt="client-6" />
        <img src="/images/Woocommercde.png" alt="client-7" />
        <img src="/images/Canva.png" alt="client-8" />
           </div>
           </div>
        

        </div>
    </main>

</section>

  )
}

export default Two