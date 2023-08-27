import React, { useContext } from 'react'
import Link from 'next/link';
import { BsPlus, BsEyeFill } from 'react-icons/bs'

import { CartItemContext } from '@/context/CartItemContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartItemContext);
    const { id, image, title, price, category } = product;

    return (
        <div>
            <div className='border border-gray-400 h-[300px] w-[300px] mb-4 relative overflow-hidden group transition'>
                <div className="w-full h-full flex justify-center items-center">
                    {/* product image */}
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
                    </div>

                    {/* add to cart and detailed product page */}
                    <div className='absolute top-4 -right-12 group-hover:right-5 transition-all duration-300 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100'>
                        <button onClick={() => addToCart(product, id)}>
                            <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-400'>
                                <BsPlus className='text-3xl' />
                            </div>
                        </button>
                        <Link className='w-10 h-10 bg-white flex items-center justify-center text-gray-700 drop-shadow-xl' href={`/product/${id}`}><BsEyeFill /></Link>
                    </div>
                </div>
            </div>
            {/* Product details */}
            <div>
                <span className='text-sm capitalize text-gray-500 mb-1'>{category}</span>
                <Link href={`/product/${id}`}>
                    <h2 className='font-semibold mb-1  text-lg'>{title}</h2>
                </Link>
                <div className='text-white bg-blue-400 p-1 rounded w-fit'>${price}</div>
            </div>
        </div>
    )
}

export default Product