"use client"

import { useContext } from 'react'

import { CartItemContext } from '@/context/CartItemContext';
import { AiFillLock } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

const PaymentPage = () => {
    const { totalPrice, clearCart } = useContext(CartItemContext);

    const router = useRouter();
    const session = useSession()

    if (session.status === "unauthenticated") {
        router.push("/login")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        clearCart();
        toast("Hurreyy!!! Payment Successfull", {
            type: "success",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        router.push("/payment/success")
    }

    return (
        <section className='py-32'>
            <h2 className='text-2xl text-center font-extrabold text-blue-400 my-4 md:text-4xl'>Total Amount: {totalPrice}</h2>

            <form className="min-w-screen flex items-center justify-center px-5 pb-10 pt-16" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                    </div>
                    <div className="mb-3 flex -mx-2">
                        <div className="px-2">
                            <label for="type1" className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                            </label>
                        </div>
                        <div className="px-2">
                            <label for="type2" className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                        <div>
                            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                        <div>
                            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" required />
                        </div>
                    </div>
                    <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/2">
                            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                            <div>
                                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" required>
                                    <option value="01">01 - January</option>
                                    <option value="02">02 - February</option>
                                    <option value="03">03 - March</option>
                                    <option value="04">04 - April</option>
                                    <option value="05">05 - May</option>
                                    <option value="06">06 - June</option>
                                    <option value="07">07 - July</option>
                                    <option value="08">08 - August</option>
                                    <option value="09">09 - September</option>
                                    <option value="10">10 - October</option>
                                    <option value="11">11 - November</option>
                                    <option value="12">12 - December</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" required>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-10">
                        <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                        <div>
                            <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" required />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button className='bg-blue-400 h-10 flex p-4 justify-center items-center text-white w-full font-medium gap-2'><AiFillLock /> PAY NOW</button>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default PaymentPage