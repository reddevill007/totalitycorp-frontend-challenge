import Link from 'next/link'

const NotFound = () => {
    return (
        <section className="flex items-center justify-center w-full h-screen flex-col gap-5">
            <img src="/noproduct.png" alt="no product" className='w-40 md:w-[400px]' />
            <p className="lead text-center mt-4">The page you are looking for does not exist.</p>
            <Link href="/" className='inline-block px-8 py-3 my-4 font-medium leading-none text-white transition duration bg-blue-400 rounded'>
                Back to Homepage
            </Link>
        </section>
    )
}

export default NotFound