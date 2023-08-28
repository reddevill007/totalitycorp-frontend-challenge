"use client"

import React, { useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

import CartItem from './CartItem';
import { CartContext } from '@/context/CartContext';
import { CartItemContext } from '@/context/CartItemContext';

const Cart = () => {
    const { isOpen, handleClose } = useContext(CartContext);
    const { cart, clearCart, itemAmount, totalPrice } = useContext(CartItemContext);

    const router = useRouter();

    const handleEmptyCart = () => {
        handleClose();
        router.push('/')
    }

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] lg:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b h-12">
                <span className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</span>
                <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            {/* Cart Items */}
            {cart.length === 0
                ? (
                    <div className='w-full h-[calc(100vh-80px)] flex items-center justify-center flex-col gap-2'>
                        <div className="flex items-center justify-center w-full">
                            <img src="/cartempty.png" alt="" className='w-3/4' />
                        </div>
                        <p className='font-bold mt-4'>Your Shopping Bag Is Empty.</p>
                        <button onClick={() => handleEmptyCart()} className='inline-block px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded'>
                            Continue shopping
                        </button>

                    </div>
                ) :
                (
                    <>
                        <div className='h-[calc(100vh-170px)] overflow-y-scroll'>
                            {cart.map(item => {
                                return <CartItem item={item} key={item.id} />
                            })}
                        </div>
                        <div className="flex flex-col gap-y-3 py-1 mt-4 h-14">
                            <div className='flex flex-col w-full justify-between items-center gap-2'>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='uppercase font-semibold'>
                                        <span className='mr-2'>Total:</span>$ {totalPrice}
                                    </div>
                                    <div className='cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl bg-red-500' onClick={clearCart}>
                                        <FiTrash2 />
                                    </div>
                                </div>
                                <Link href="/checkout" className='bg-blue-400 h-10 flex p-4 justify-center items-center text-gray-800 w-full font-medium'>Checkout</Link>
                            </div>
                        </div>
                    </>
                )}

        </div>
    )
}

export default Cart