
import D1 from '../assets/images/download.png'
import D2 from '../assets/images/download2.png'
import Banner1 from '../assets/images/banner1.png'
function Banner(props){
    return (
      <main className='h-[594px] w-full  grid grid-cols-2 gap-[25px]'>
        <div className=" flex flex-col space-y-[16px]">
          <h1 className="text-[46px] font-bold leading-[60px]">Start your journey
by one click, explore beautiful world!</h1>
<p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
       
       <div className='flex flex-row gap-[29px]'>
        <img src={D1} className='h-[40px] w-[136px]' alt=""  />
        <img src={D2} className='h-[40px] w-[136px]' alt=""  />
       </div>
        </div>
        <div className="">
          <img src={Banner1} alt="" className='w-full' />
        </div>
      </main>
    )
}

export default Banner