"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
function ThankYouModal({ isOpen, onClose }) {

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[50]">
            <div className="mx-auto max-w-[90%] sm:max-w-[445px] rounded-[15px] bg-[#f3f4f8] p-6 text-center flex justify-center items-center">
                <div className='mx-auto flex justify-center items-center flex-col '>
                    <Image
                        src='/images/checked.webp'
                        width={200}
                        height={150}
                        loading='lazy'
                        alt='checked'
                    />
                    <h4 className='text-oceanBlue font-bold text-[22px] mt-2'>
                        Thank You!
                    </h4>
                    <p className='text-gray-700 mt-2'>
                        Thankyou for reservation, we will get back to you as soon As possible for further Process.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ThankYouModal;
