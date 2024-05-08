

const One = () => {
  return (
    <section className='w-full md:py-28 py-8'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-14 px-4 py-[30px]'>
    
     
      {/* image div */}
      <div className='w-full md:w-1/2 flex justify-center ' 
      style={{
        backgroundImage : "url('./images/cover1.png')",
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover"
      }}>
      <img className='max-w-full md:max-w-none h-auto' src="/images/img1.png" alt="arrow" />
     </div>
     <div >
        
        
        <div className=' p-14 pt-40 '>
         <h1 className="font-medium text-[80px] leading-none">An Interactive Designer</h1>
          
          <p className="font-normal text-[18px] leading-8 pt-6 pb-6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In urna, non nisl tincidunt ut <br /> elementum turpis.</p>
          <div className="flex">
          <div className=" flex gap-10 pt-10 ">
           <button className='border-[1px] md:px-8 px-3 py-3 bg-[#0067B9]  text-[16px] text-white font-bold'>
           Book a Call
          </button>
          
           <h1 className='font-bold text-[18px] pt-4 underline' >My Works</h1>
         
          </div>
          <div className="flex  ">
            <div >
            <h1 className="font-medium text-[18px]  ">Follow me on:</h1>
            </div>
           <div className="pl-6 flex gap-8  ">
           <ion-icon name="logo-behance" size="large" ></ion-icon>
           <ion-icon name="basketball-outline" size="large"></ion-icon>
           <ion-icon name="logo-instagram" size="large"></ion-icon>
           </div>

          </div>
          </div>
        </div>
      </div>

    </main>
  </section>
);
};
  


export default One