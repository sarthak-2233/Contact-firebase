import React from 'react'
import Modals from './Modals'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Config/firebase'

const AddUpdate = ({ isOpen, onClose }) => {
    
    // Make the addContact function async
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, 'contact');
            await addDoc(contactRef, contact); // ✅ Pass directly
            console.log('Contact added successfully!');
             onClose()
             refreshData()
             
            } catch (error) {
            console.error('Error adding contact:', error);
        }
    }
  
    return (
        <div>
            <Modals isOpen={isOpen} onClose={onClose}>
                <Formik 
                    initialValues={{
                        name: '',
                        email: ''
                    }}
                    onSubmit={async (values) => {
                        console.log('Submitting:', values);
                        await addContact(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col">
                            <div className="flex flex-col gap-1 mb-2">
                                <label htmlFor="name">Name</label>
                                <Field 
                                    name="name" 
                                    placeholder="Enter Name" 
                                    className="text-black p-2 h-[30px] border-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="Email">Email</label>
                                <Field 
                                    type="email" 
                                    name="Email" 
                                    placeholder="Enter Email" 
                                    className="text-black p-2 h-[30px] border-2 rounded-md"
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="mt-2 bg-orange-400 px-4 py-2 rounded-md self-start text-white hover:bg-orange-500 transition"
                            >
                                {isSubmitting ? 'Adding...' : 'Add Contact'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </Modals>
        </div>
    )
}

export default AddUpdate
