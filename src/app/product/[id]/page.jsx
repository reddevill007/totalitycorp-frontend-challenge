"use client"

import { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdArrowForward } from "react-icons/io";

import { CartItemContext } from "@/context/CartItemContext";
import { ProductContext } from "@/context/ProductContext";


export default function ProductPage({ params }) {
    const { id } = params;

    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartItemContext);

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })

    if (!product) {
        return (
            <section className="flex items-center justify-center w-full h-screen flex-col gap-5">
                <h1 className="text-center">Oops!</h1>
                <p className="lead text-center mt-4">The page you are looking for does not exist.</p>
                <Link href="/" className='inline-block px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-red-500 rounded'>
                    Back to Homepage
                </Link>
            </section>
        )
    }

    const { title, image, price, description, category } = product;

    return <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
                    <img src={image} alt={title} className="max-w-[200px] lg:max-w-sm" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-[26px] font-medium mb-2 max-w-[450px]">{title}</h1>
                    <span className='text-sm capitalize text-gray-500 mb-4'>{category}</span>
                    <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
                    <p className="mb-8">{description}</p>
                    <button className='flex gap-2 px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded' onClick={() => addToCart(product, id)}>
                        Add to Cart
                        <AiOutlineShoppingCart className="stroke-[#fff] font-extrabold" />
                    </button>
                    <Link href="/" className='flex justify-center items-center gap-2 w-fit px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded'>
                        Continue Shopping
                        <IoMdArrowForward className='text-xl text-white' />
                    </Link>
                </div>
            </div>
        </div>
    </section>
}
