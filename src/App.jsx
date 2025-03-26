import React from 'react'
import Navigation from './Components/Navigation'
import { FiSearch } from 'react-icons/fi'
import {GoPlusCircle} from 'react-icons/go'
function App() {
  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navigation></Navigation>

      <div className='flex relative items-center gap-2'>
        <FiSearch className='text-3xl text-white absolute ml-2'/>
        <input type="text" className='bg-transparent border border-white rounded-md  h-10 flex-grow text-white pl-10' />
     
        <GoPlusCircle className='text-white text-4xl'/>
      </div>

    </div>
  )
}

export default App
