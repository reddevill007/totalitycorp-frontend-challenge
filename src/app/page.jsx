"use client"

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProductContext } from "@/context/ProductContext";
import Product from "@/components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);
  const session = useSession()
  const router = useRouter()

  // const filteredProducts = products.filter(item => {
  //   return item.category === "men's clothing" || item.category === "women's clothing"
  // })
  if (session.status === "unauthenticated") {
    router.push("/login")
  }

  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* Category */}
        <div>
          <ul className="flex px-2 text-sm font-medium gap-4 mb-6 overflow-x-scroll noscrollbar">
            <li className="border border-blue-400 text-blue-400 px-2 py-1 text-sm rounded w-fit whitespace-nowrap">All</li>
            <li className="bg-blue-400 px-2 py-1 text-sm rounded w-fit whitespace-nowrap">Men&#039;s Clothing</li>
            <li className="bg-blue-400 px-2 py-1 text-sm rounded w-fit whitespace-nowrap">Women&#039;s Clothing</li>
            <li className="bg-blue-400 px-2 py-1 text-sm rounded w-fit whitespace-nowrap">Accessories</li>
            <li className="bg-blue-400 px-2 py-1 text-sm rounded w-fit whitespace-nowrap">Shoes</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4 md:px-0">
          {products.map((product) => {
            return (
              <Product product={product} key={product.id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Home