import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'


function Backbutton({destination = '/'}) {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-800 text-white px-4 rounded-lg w-fit'>
      <BsArrowLeft />
      </Link>
    </div>
  )
}


export default Backbutton