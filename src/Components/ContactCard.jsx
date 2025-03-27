import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
const ContactCard = ({contacts}) => {
  return (
    <div key={contacts.id} className= ' items-center bg-yellow-300 flex gap-2 justify-around p-2 border rounded-lg mb-2' >


          <HiOutlineUserCircle className='text-4xl text-orange-500'></HiOutlineUserCircle>
          <div className='text-black'>
            <h2 className='text-[14px] font-medium'>{contacts.name}</h2>
            <p className='text-sm font-medium'>{contacts.Email}</p>
          </div>

          <div className='flex gap-2'>
          <IoMdTrash className='text-3xl'></IoMdTrash>
          <RiEditCircleLine className='text-3xl'></RiEditCircleLine>
          </div>

        </div>
  )
}

export default ContactCard
