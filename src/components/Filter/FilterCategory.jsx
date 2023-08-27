import { useContext } from 'react'

import { SearchContext } from '@/context/SearchContext'

const FilterCategory = () => {
    const { category, setCategory } = useContext(SearchContext)
    return (
        <div>
            <ul className="flex px-2 text-sm font-medium gap-4 mb-6 overflow-x-scroll noscrollbar">
                <li
                    onClick={() => setCategory('all')}
                    className={`cursor-pointer px-2 py-1 text-sm rounded w-fit whitespace-nowrap ${category === 'all' ? 'border-blue-400 text-blue-400 border' : 'bg-blue-400 text-white'}`}
                >
                    All
                </li>
                <li
                    onClick={() => setCategory('men')}
                    className={`cursor-pointer px-2 py-1 text-sm rounded w-fit whitespace-nowrap ${category === 'men' ? 'border-blue-400 text-blue-400 border' : 'bg-blue-400 text-white'}`}
                >
                    Men&#039;s Clothing
                </li>
                <li
                    onClick={() => setCategory('women')}
                    className={`cursor-pointer px-2 py-1 text-sm rounded w-fit whitespace-nowrap ${category === 'women' ? 'border-blue-400 text-blue-400 border' : 'bg-blue-400 text-white'}`}
                >
                    Women&#039;s Clothing
                </li>
                <li
                    onClick={() => setCategory('jewelery')}
                    className={`cursor-pointer px-2 py-1 text-sm rounded w-fit whitespace-nowrap ${category === 'jewelery' ? 'border-blue-400 text-blue-400 border' : 'bg-blue-400 text-white'}`}
                >
                    Jewelery
                </li>
                <li
                    onClick={() => setCategory('electronics')}
                    className={`cursor-pointer px-2 py-1 text-sm rounded w-fit whitespace-nowrap ${category === 'electronics' ? 'border-blue-400 text-blue-400 border' : 'bg-blue-400 text-white'}`}
                >
                    Electronics
                </li>
            </ul>
        </div>
    )
}

export default FilterCategory