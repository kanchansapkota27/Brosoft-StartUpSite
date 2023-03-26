import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const animateVariants = {
    offscreen: {
        opacity: 0.3,
        scale: 0.8,
        y: 50
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }
}

const Industries = ({ icon, text }) => {

    // var color= IndustryColors[Math.floor(Math.random()*IndustryColors.length)];

    return (
        <>
            <motion.div
                variants={animateVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}

                className='p-3 rounded hover:shadow-md group flex items-center gap-3 border-2 border-gray-300 dark:border-gray-200'>
                <i className={`${icon} `}></i>
                <span className='text-base font-semibold'>{text}</span>
            </motion.div>
        </>
    )
}

export default Industries