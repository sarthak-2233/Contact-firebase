import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../Config/firebase'


const ContactCard = ({ contacts, refreshData }) => {
    const contactDelete = async (id) => {
        if (!id) {
            console.error('Invalid ID'); // ✅ Catch undefined ID
            return;
        }

        try {
            await deleteDoc(doc(db, 'contact', id))
            console.log('Contact deleted successfully!')
            refreshData()
        } catch (error) {
            console.error('Error deleting contact:', error)
        }
    }

    return (
        <div key={contacts.id} className='items-center bg-yellow-300 flex justify-around p-2 border rounded-lg mb-2'>
            <HiOutlineUserCircle className='text-4xl text-orange-500' />
            <div className='text-black'>
                <h2 className='text-[14px] font-medium'>{contacts.name}</h2>
                <p className='text-sm font-medium'>{contacts.email}</p>
            </div>

            <div className='flex gap-2'>
                <IoMdTrash 
                    onClick={() => contactDelete(contacts.id)} 
                    className='text-3xl cursor-pointer' 
                />
                <RiEditCircleLine className='text-3xl cursor-pointer' />
            </div>
        </div>
    )
}

export default ContactCard
