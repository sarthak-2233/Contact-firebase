import React, { useEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import { FiSearch } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import {db} from './Config/firebase'; // Import Firebase config

import ContactCard from './Components/ContactCard';
import Modals from './Components/Modals';
import AddUpdate from './Components/AddUpdate';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [contacts, setContacts] = useState([]);
  const[isOpen,setOpen]=useState(false)
  
  const onOpen=()=>{
    setOpen(true)
  }

const onClose=()=>{
    setOpen(false)
}
  {/*Use effect to render one time in firebase that is required*/}
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contact');
        

        onSnapshot(contactsRef,(snapshot)=>{
          
        const contactList = snapshot.docs.map((doc) => ({
          id: doc.id, // ✅ Include document ID
          ...doc.data()
      }))

        {/**const contactList = contactSnapshot.docs.map((doc) => doc.data());*/}
        setContacts(contactList);
        console.log(contactList)
        return contactList
        })




      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navigation />
      <div className="flex relative items-center gap-2 mt-4">
        <FiSearch className="text-3xl text-white absolute ml-2" />
        <input
          type="text"
          className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-10"
          placeholder="Search contacts"
        />
        <GoPlusCircle onClick={onOpen} className="text-white text-4xl cursor-pointer" />
      </div>

      <div className='mt-3 '>
      {contacts.map((contacts)=>(
        <ContactCard key={contacts.id} contacts={contacts}/>
      ))}

      </div>
     
    </div>
      <AddUpdate isOpen={isOpen} onClose={onClose}/>
      <ToastContainer/>
    </>
  );
}

export default App;
