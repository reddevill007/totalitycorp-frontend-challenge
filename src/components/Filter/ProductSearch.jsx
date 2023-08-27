"use client"

import { ProductContext } from '@/context/ProductContext';
import { SearchContext } from '@/context/SearchContext';
import { useContext, useState } from 'react'

const ProductSearch = () => {
    const { setSearchTerm } = useContext(SearchContext);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="relative mb-6 p-2 md:p-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                onChange={(e) => handleSearchTerm(e)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for products..."
            />
            <button className="text-white absolute right-3 bottom-4  md:bottom-2.5 bg-blue-400 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
    )
}

export default ProductSearch