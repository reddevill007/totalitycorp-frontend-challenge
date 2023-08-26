"use client"

import React, { useContext } from 'react'
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

import CartItem from './CartItem';
import { CartContext } from '@/context/CartContext';
import { CartItemContext } from '@/context/CartItemContext';

const Cart = () => {
    const { isOpen, handleClose } = useContext(CartContext);

    const { cart, clearCart } = useContext(CartItemContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] lg:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <span className='uppercase text-sm font-semibold'>Shopping Bag (0)</span>
                <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            {/* Cart Items */}
            {cart.length === 0
                ? (
                    <h3>Add items to cart</h3>
                ) :
                (
                    <>
                        <div>
                            {cart.map(item => {
                                return <CartItem item={item} key={item.id} />
                            })}
                        </div>
                        <div className="flex flex-col gap-y-3 py-4 mt-4">
                            <div className='flex w-full justify-between items-center'>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='uppercase font-semibold'>
                                        <span className='mr-2'>Total:</span>$ 1000
                                    </div>
                                    <div className='cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl bg-red-500' onClick={clearCart}>
                                        <FiTrash2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

        </div>
    )
}

export default Cart