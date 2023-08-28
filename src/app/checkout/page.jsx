"use client"

import { ChechoutContext } from '@/context/ChechoutContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

const CheckoutPage = () => {
    const { setDetails } = useContext(ChechoutContext);
    const router = useRouter();

    const handleDetails = (e) => {
        const { name, value } = e.target;

        setDetails((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/payment")
    }

    return (
        <div className='py-24'>
            <h2 className='text-2xl text-center font-extrabold text-blue-400 my-4 md:text-4xl'>Enter Your Shipping Details</h2>
            <form className='w-full flex items-center justify-center flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
                <div className='w-[90%] md:w-[60%]'>
                    <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div className="mt-2">
                        <input id='name' onChange={(e) => handleDetails(e)} name="name" type="text" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-[90%] md:w-[60%]'>
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-2">
                        <input id='email' onChange={(e) => handleDetails(e)} name="email" type="email" required className="px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-[90%] md:w-[60%]'>
                    <label for="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div className="mt-2">
                        <input id='phoneNumber' onChange={(e) => handleDetails(e)} name="phoneNumber" type="text" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-[90%] md:w-[60%]'>
                    <label for="zip" className="block text-sm font-medium leading-6 text-gray-900">Zip Code</label>
                    <div className="mt-2">
                        <input id='zip' onChange={(e) => handleDetails(e)} name="zip" type="text" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-[90%] md:w-[60%]'>
                    <label for="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                    <div className="mt-2">
                        <textarea id='address' onChange={(e) => handleDetails(e)} name="address" type="text" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <button type='submit' className='bg-blue-400 w-fit text-white h-10 flex p-4 justify-center items-center rounded px-8 font-medium'>Proceed to Payment</button>
            </form>
        </div>
    )
}

export default CheckoutPage