"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const session = useSession()
    const router = useRouter()

    if (session.status === "unauthenticated") {
        router.push("/login")
    }

    return (
        <h1>Cart</h1>
    )
}

export default Page