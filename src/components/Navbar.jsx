"use client"

import { useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { VscSignOut } from 'react-icons/vsc'

import { CartContext } from '@/context/CartContext';
import { CartItemContext } from '@/context/CartItemContext';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const session = useSession()

    const { setIsOpen } = useContext(CartContext);
    const { itemAmount } = useContext(CartItemContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
        })
    }, [])

    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed z-10 w-full transition-all`}>
            <div className="container mx-auto flex items-center justify-between h-full">
                <Link href="/">
                    <img src="/logo.png" alt="logo" className='h-14' />
                </Link>
                <div className='flex items-center justify-center gap-2'>
                    <img className='h-10 w-10 rounded-full' src={session?.data?.user?.image} alt="" />
                    <p className='hidden md:block'>{session?.data?.user?.name}</p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='cursor-pointer flex relative max-w-[50px]' onClick={() => { setIsOpen((prev) => !prev) }}>
                        <BsBag className='text-2xl' />
                        <div className="bg-blue-400 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
                    </div>
                    <div onClick={signOut} className='cursor-pointer h-10 w-10 rounded-full bg-red-500 flex items-center justify-center'>
                        <VscSignOut className='text-2xl' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar