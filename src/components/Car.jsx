import React from 'react'

function Car({data}) {
  return (
    <div className='bg-teal-300 p-7 rounded-3xl m-2 w-72' >
      <img src={`${data.image}`} alt=""className='h-40' />
      <p>name is: {data.name}</p>
      <p>make is:{data.make}</p>
      <p>year is:{data.year}</p>
      <p>colour is:{data.colour}</p>
    </div>
  )
}

export default Car