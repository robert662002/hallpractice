import React from 'react'
import ReactDom from 'react-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../api/axios'
import { BarLoader } from 'react-spinners'


export default function Modal({ isOpen, closeModal, setIsOpen }) {

    const [loading, setLoading] = useState(false)
    const [feedbackContent, setFeedbackContent] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        if (isOpen) {
            // Add 'overflow-hidden' class to the root element when the modal is Open
            document.documentElement.classList.add('overflow-hidden');
        } else {
            // Remove 'overflow-hidden' class when the modal is closed
            document.documentElement.classList.remove('overflow-hidden');
        }
        // Cleanup function to remove 'overflow-hidden' class when the component unmounts
        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrMsg('');

        try {
            // Get the current date as a string in the format "YYYY-MM-DD"
            const currentDate = new Date().toISOString().split('T')[0];

            // Make a POST request to the backend API
            const response = await axios.post('/feedback', {
                date: currentDate,
                content: feedbackContent,
            });
            // Handle the response here (e.g., show success message, update UI, etc.)
            console.log('Feedback submitted:', response.data);
            // Clear the feedback content and close the modal
            setFeedbackContent('');
            setIsOpen(false)
        } catch (error) {
            // Handle the error here (e.g., show error message, update UI, etc.)
            console.error('Error submitting feedback:', error);
            setErrMsg('Error submitting feedback');
        } finally {
            setLoading(false);
        }
    };


    if (!isOpen) return null
    return ReactDom.createPortal(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50" onClick={closeModal} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-2xl p-4 ">
                <div className='flex flex-col items-center justify-center text-black '>
                    <p className='bg-red-600 font-semibold text-red-200'>{errMsg}</p>
                    <form className='bg-white p-4 shadow-xl flex flex-col border-4 border-[#eb4d5f] rounded-2xl md:min-w-[600px] min-w-[330px] ' onSubmit={handleSubmit}>
                        <h1 className='text-3xl my-4'>Enter your Feedback</h1>
                        <div className='flex my-1 flex-col'>
                            <textarea
                                className='text-black p-2 border border-1 border-gray-400 rounded-xl'
                                id='event-description'
                                value={feedbackContent}
                                onChange={(e) => setFeedbackContent(e.target.value)}
                                maxLength={50}
                                required
                            />
                            <p className='text-red-600'>Characters remaining: {50 - feedbackContent.length}</p>
                        </div>
                        <div className='flex justify-center my-3'>
                            <button className={`bg-[#eb4d5f] text-white hover:font-semibold border-4 border-white p-3 px-6 rounded-xl ${!loading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={loading}>
                                {loading ? (
                                    <BarLoader color='#fff' height={4} width={100} />
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
