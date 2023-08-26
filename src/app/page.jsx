"use client"

import { useContext } from "react";

import { ProductContext } from "@/context/ProductContext";
import Product from "@/components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4 md:px-0">
          {filteredProducts.map((product) => {
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