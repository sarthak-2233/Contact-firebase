import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modals = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null

  return createPortal(
    <>   
      {/* Modal */}
      <div className="relative min-h-[200px] max-w-[80%] bg-white z-50 mx-auto">
        <div className="flex justify-end p-4">
          <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>

      <div 
        className="absolute top-0 z-40 h-screen w-screen backdrop-blur-2xl"
        onClick={onClose}
      />
    </>,
    document.getElementById("modal-root")
  )
}

export default Modals
