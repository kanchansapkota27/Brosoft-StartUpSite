import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'


const animateVariants={
    offscreen:{
        opacity:0.3,
        scale:0.8,
        y:50
    },
    onscreen:{
        opacity:1,
        scale:1,
        y:0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
          }
    }
}


const Service = ({icon,title,desc,is_static=false}) => {
    return (
        <>
            <motion.div
            variants={animateVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once:true,amount:0.5}}
          
            class="border-2 border-gray-300 dark:border-gray-200 p-4 rounded-lg hover:shadow-md group">
                    {
                        !is_static?
                        <div className=' w-10 aspect-square inline-flex items-center justify-center rounded-full outline outline-1  bg-gray-700 mb-2 dark:bg-gray-100 text-gray-100 dark:text-gray-700'>
                            <i className={`${icon}`}></i>
                        </div>
                        :
                        <div className='p-2 rounded-full outline outline-1 w-min mb-2 bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-gray-700'>
                        {icon}
                        </div>
                    }
                <h2 class="text-lg text-gray-900 dark:text-gray-100 font-medium title-font mb-2">{title}</h2>
                <p class="leading-relaxed text-sm dark:text-gray-300">{desc}</p>
            </motion.div>

        </>
    )
}

export default Service