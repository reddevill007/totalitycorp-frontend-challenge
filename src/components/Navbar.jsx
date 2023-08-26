"use client"

import { useContext } from 'react'
import { BsBag } from 'react-icons/bs'

import { CartContext } from '@/context/CartContext';

const Navbar = () => {

    const { setIsOpen } = useContext(CartContext);
    return (
        <header>
            <div>Logo</div>
            <div className='cursor-pointer flex relative' onClick={() => { setIsOpen((prev) => !prev) }}>
                <BsBag className='text-2xl' />
            </div>
        </header>
    )
}

export default Navbar