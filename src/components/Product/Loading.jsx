import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='w-full flex items-center justify-center py-10'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#60a5fa"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loading