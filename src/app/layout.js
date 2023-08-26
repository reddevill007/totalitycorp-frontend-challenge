import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";

import AuthProvider from "@/components/AuthProvider";
import ProductProvider from "@/context/ProductContext";
import CartProvider from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import CartItemProvider from "@/context/CartItemContext";
import { ToastContainer } from "@/components/ToastWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <CartProvider>
          <CartItemProvider>
            <ProductProvider>
              <AuthProvider>
                <Navbar />
                <Cart />
                {children}
              </AuthProvider>
            </ProductProvider>
          </CartItemProvider>
        </CartProvider>
      </body>
    </html>
  );
}
