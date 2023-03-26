import React from 'react'

const AnimatedBlobs = () => {
    return (
        <>

            <div className='z-0 absolute inset-y-5 mix-blend-multiply hover:mix-blend-add blur-xl delay-1000 opacity-60 animate-blob left-10 animate-pulse  bg-purple-300 rounded-full w-32 h-32 md:w-72 md:h-72 dark:mix-blend-normal dark:opacity-25' />
            <div className='z-0 absolute inset-y-5 mix-blend-multiply hover:mix-blend-add blur-xl opacity-60 right-10 animate-blob2 animate-pulse  bg-orange-300 rounded-full w-32 h-32 md:w-72 md:h-72 dark:mix-blend-normal dark:opacity-25' />
            <div className='z-0 absolute -bottom-10 mix-blend-multiply blur-xl opacity-60 right-10 animate-blob animate-pulse  bg-red-500 rounded-full w-32 h-32 md:w-72 md:h-72 dark:mix-blend-normal dark:opacity-25' />
            <div className='z-0 absolute -bottom-10 mix-blend-multiply blur-xl opacity-60 -left-10 animate-pulse animate-blob2 delay-700  bg-green-500 dark:mix-blend-normal rounded-full w-32 h-32 md:w-64 md:h-64 dark:opacity-20' />

        </>
    )
}

export default AnimatedBlobs