"use client"

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProductContext } from "@/context/ProductContext";
import Product from "@/components/Product/Product";
import ProductSearch from "@/components/Filter/ProductSearch";
import { SearchContext } from "@/context/SearchContext";
import FilterCategory from "@/components/Filter/FilterCategory";
import Loading from "@/components/Product/Loading";

const Home = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { searchTerm } = useContext(SearchContext);
  const { category } = useContext(SearchContext)



  const filterProductSearchQuery = (el) => {
    return el.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

  const filterSelectedCategoryOptions = (el) => {
    if (category === 'all') {
      return el;
    } else if (category === 'men') {
      return el.category === "men's clothing"
    } else if (category === 'women') {
      return el.category === "women's clothing"
    } else if (category === 'jewelery') {
      return el.category === "jewelery"
    } else if (category === 'electronics') {
      return el.category === "electronics"
    }
  };

  const session = useSession()
  const router = useRouter()

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

        {/* Loading */}
        {loading ? (<Loading />) : null}

        {/* Error */}
        {error && !loading ? (<p>error</p>) : null}
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4 md:px-0">
          {products.filter((el) => filterProductSearchQuery(el)).filter((el) => filterSelectedCategoryOptions(el)).map((product) => {
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