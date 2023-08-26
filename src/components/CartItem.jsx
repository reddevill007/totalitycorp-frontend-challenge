import Link from 'next/link';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartItemContext } from '@/context/CartItemContext';
import { useContext } from 'react';


const CartItem = ({ item }) => {
    const { id, title, image, price, amount } = item;
    const { removeFromCart, increaseCount, decreaseCount, } = useContext(CartItemContext);
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
            <div className='w-full min-h-[140px] flex items-center gap-x-4'>
                <Link href={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt="" />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link href={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-gray-700 hover:underline'>
                            {title}
                        </Link>
                        <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex gap-x-2 h-[36px] text-sm'>
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-gray-700 font-medium'>
                            <div className='flex-1 flex h-full justify-center items-center cursor-pointer' onClick={() => decreaseCount(id)} >
                                <IoMdRemove />
                            </div>
                            <div className='flex h-full justify-center items-center'>{amount}</div>
                            <div className='flex-1 flex h-full justify-center items-center cursor-pointer' onClick={() => increaseCount(id)}>
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className='flex-1 flex items-center justify-around'>$ {price}</div>
                        <div className='flex-1 flex justify-end items-center text-gray-700 font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartItem