"use client"

import { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdArrowForward } from "react-icons/io";

import { CartItemContext } from "@/context/CartItemContext";
import { ProductContext } from "@/context/ProductContext";
import NotFound from "@/components/NotFound/NotFound";


export default function ProductPage({ params }) {
    const { id } = params;

    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartItemContext);

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })

    if (!product) {
        return (
            <NotFound />
        )
    }

    const { title, image, price, description, category } = product;

    return (
        <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center p-2 md:p-0">
                    <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
                        <img src={image} alt={title} className="max-w-[200px] lg:max-w-sm" />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center w-full lg:block">
                            <h1 className="text-[26px] font-medium mb-2 max-w-[450px]">{title}</h1>
                        </div>
                        <span className='text-sm capitalize text-gray-500 mb-4'>{category}</span>
                        <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
                        <p className="mb-8">{description}</p>
                        <div className="flex items-center justify-center gap-2 flex-wrap lg:justify-start">
                            <button className='flex gap-2 px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded' onClick={() => addToCart(product, parseInt(id))}>
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
            </div>
        </section>
    )
}
