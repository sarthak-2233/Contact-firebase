import React from 'react';
import Modals from './Modals';
import { Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { toast } from 'react-toastify';

const AddUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
    
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, 'contact');
            await addDoc(contactRef, contact);
            console.log('Contact added successfully!');
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    const UpdateContact = async (contact, id) => {
        if (!id) {
            console.error("Error: No contact ID provided for update.");
            return;
        }
        try {
            const contactRef = doc(db, 'contact', id);
            await updateDoc(contactRef, contact);
            toast.success("updated successfully")
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    return (
        <Modals isOpen={isOpen} onClose={onClose}>
            <Formik 
                initialValues={isUpdate && contact ? { 
                    name: contact.name || '', 
                    email: contact.email || '' 
                } : { 
                    name: '', 
                    email: '' 
                }}
                onSubmit={async (values) => {
                    console.log('Submitting:', values);
                    if (isUpdate) {
                        await UpdateContact(values, contact?.id); // Ensure update is awaited
                    } else {
                        await addContact(values);
                    }
                    onClose(); // Ensure modal closes after submission
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
                                type="Email" 
                                name="Email" 
                                placeholder="Enter Email" 
                                className="text-black p-2 h-[30px] border-2 rounded-md"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="mt-2 bg-orange-400 px-4 py-2 rounded-md self-start text-white hover:bg-orange-500 transition min-w-[120px]"
                        >
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </Form>
                )}
            </Formik>
        </Modals>
    );
}

export default AddUpdate;
