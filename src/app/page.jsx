"use client"

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProductContext } from "@/context/ProductContext";
import Product from "@/components/Product/Product";
import ProductSearch from "@/components/Filter/ProductSearch";
import { SearchContext } from "@/context/SearchContext";
import FilterCategory from "@/components/Filter/FilterCategory";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { searchTerm } = useContext(SearchContext);


  const filterProductSearchQuery = (el) => {
    return el.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

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
        {/* Search */}
        <ProductSearch />
        {/* Category */}
        <FilterCategory />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4 md:px-0">
          {products.filter((el) => filterProductSearchQuery(el)).map((product) => {
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