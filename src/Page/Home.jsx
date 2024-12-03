import React from 'react'

const Home = () => {
  return (
    <div className= 'w-full h-full grid grid-cols-5 grid-rows-3 gap-5  rounded-3xl'>
      <div className='bg-[#32e969] rounded-3xl overflow-hidden text-center'>1</div>
      <div className='bg-[#cc6767] notification relative text-center rounded-3xl'>2</div>
      <div className='bg-[#5cc23c] rounded-3xl overflow-hidden text-center'>3</div>
      <div className='bg-[#3e339e] rounded-3xl overflow-hidden text-center'>4</div>
      <div className='bg-[#c03333] rounded-3xl overflow-hidden text-center'>5</div>
      <div className='bg-[#7e2034] row-span-2 col-span-1 rounded-3xl overflow-hidden text-center'>6</div>
      <div className='bg-[#3926a7] row-span-2 col-span-1 mt-8 rounded-3xl overflow-hidden text-center'>7</div>
      <div className='bg-[#d44339] row-span-2 col-span-3 rounded-3xl overflow-hidden text-center'>8</div>
    </div>
  )
}

export default Home