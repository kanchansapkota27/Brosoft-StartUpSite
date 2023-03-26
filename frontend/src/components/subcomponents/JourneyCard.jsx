import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const leftVariants = {
    offscreen: {
        opacity: 0.5,
        x: -70,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }

}

const JourneyCardLeft = ({ data }) => {
    return (
        <>
            <div
                class="flex flex-row-reverse md:contents">
                <motion.div
                    variants={leftVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:true,amount: 0.5 }}
                    class="bg-gray-700 text-gray-300 hover:shadow-xl dark:bg-slate-400 dark:text-gray-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                >
                    <h2 className='font-semibold p-1'>{new Date(data.date).getFullYear()}</h2>
                    <h3 class="font-semibold text-lg mb-1">{data.title}</h3>
                    <p class="leading-tight text-justify">
                        {data.desc}
                    </p>
                </motion.div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10 group">
                    <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-600 dark:bg-gray-500 pointer-events-none "></div>
                    </div>
                    <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-400 shadow"
                    >
                        <ChevronDownIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}

const rightVariants = {
    offscreen: {
        opacity: 0.5,
        x: 70,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }

}


const JourneyCardRight = ({ data }) => {
    return (
        <>
            <div class="flex md:contents">
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-400 dark:bg-gray-300 pointer-events-none"></div>
                    </div>
                    <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-400 shadow"
                    >
                        <ChevronDownIcon/>
                    </div>
                </div>
                <motion.div
                    variants={rightVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:true,amount: 0.5 }}
                    class="bg-gray-700 text-gray-300 hover:shadow-xl dark:bg-slate-400 dark:text-gray-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                >
                    <h2 className='font-semibold p-1'>{new Date(data.date).getFullYear()}</h2>
                    <h3 class="font-semibold text-lg mb-1">{data.title}</h3>
                    <p class="leading-tight text-justify">
                        {data.desc}
                    </p>
                </motion.div>
            </div>

        </>
    )
}


export { JourneyCardLeft, JourneyCardRight }