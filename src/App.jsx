import React, { useEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import { FiSearch } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { collection, getDocs } from 'firebase/firestore';
import {db} from './Config/firebase'; // Import Firebase config
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contact');
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => doc.data());
        setContacts(contactList);
        console.log(contactList)
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navigation />
      <div className="flex relative items-center gap-2 mt-4">
        <FiSearch className="text-3xl text-white absolute ml-2" />
        <input
          type="text"
          className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-10"
          placeholder="Search contacts"
        />
        <GoPlusCircle className="text-white text-4xl cursor-pointer" />
      </div>

      <div>
      {contacts.map((contacts)=>(
        <div key={contacts.id} className='bg-yellow'>


          <HiOutlineUserCircle></HiOutlineUserCircle>
          <div className='text-white'>
            <h2 className=''>{contacts.name}</h2>
            <p className=''>{contacts.Email}</p>
          </div>

          <div>
          <IoMdTrash></IoMdTrash>
          <RiEditCircleLine></RiEditCircleLine>
          </div>

        </div>
      ))}

      </div>
     
    </div>
  );
}

export default App;
