import React from 'react'
import Laptop from '../../assets/laptop.jpg'

const Analysis = () => {
  return (
    <div className='w-full bg-white'>
        <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto'>
            <img src={Laptop} alt='/'/>
            <div className='flex flex-col my-auto text-center'>
                <h1 className='text-3xl font-bold'>Manage Data Analytics</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem rem ea non facere sequi, officia quia fugit at, distinctio voluptate consequuntur eos laborum maiores officiis delectus nisi. Officia, sunt?
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default Analysis
