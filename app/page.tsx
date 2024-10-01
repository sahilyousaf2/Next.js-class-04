import React from 'react'
import Card from './components/card/Card'

const Home = () => {
  return (
    <>
      <div className="heading text-4xl text-center pt-10 text-black">
        <h1>Student Identification Card</h1>
      </div>
      <div className='flex mt-52 h-full w-full fix'>
        <Card name='Sahil Yousaf'
          age={21}
          rollNumber={1234}
          day='Monday'
          time='2 To 5'
          cardBtnText='Comments' />
        <Card name='Sheza Khokhar'
          age={20}
          rollNumber={12345}
          day='Friday' time='7 To 10'
          cardBtnText='Comments' />
        <Card name='Chris Stanley'
          age={10}
          rollNumber={123456}
          day='Sunday'
          time='9 To 12'
          cardBtnText='Comments' />
      </div>
    </>
  )
}

export default Home
