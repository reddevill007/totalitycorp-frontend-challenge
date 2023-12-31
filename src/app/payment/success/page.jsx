"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const SuccessPage = () => {
    const session = useSession()
    const router = useRouter()

    if (session.status === "unauthenticated") {
        router.push("/login")
    }

    return (
        <section className='py-32 flex justify-center items-center h-screen'>
            <div className="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                    <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                    <p> Have a great day!  </p>
                    <div className="flex items-center justify-center w-full">
                        <Link href="/" className='flex justify-center items-center gap-2 w-fit px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded'>
                            Continue Shopping
                            <IoMdArrowForward className='text-xl text-white' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPage