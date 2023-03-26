import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { WORK_STEPS } from '../data/constants'
import { motion,AnimatePresence,useScroll } from 'framer-motion'

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


const AboutOurProcess = ({data}) => {

    return (
        <section className="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300">
            <div className="container px-10 gap-4 md:px-20 pt-10 pb-10">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">How we work</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        How we approach our projects.
                    </p>
                </div>
                <div className="w-full justify-evenly items-center flex md:flex-row flex-wrap gap-2 border-2 border-gray-300 dark:border-gray-200 px-4 py-4 md:py-6 rounded-lg group">
                    {
                        data?
                        data.map((item,i)=>(
                            <>
                            <motion.div 
                            variants={animateVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once:true,amount: 0.8}}
                            className='flex py-2.5 w-full  md:w-fit md:min-w-fit items-center justify-center flex-wrap p-2 shadow-md border rounded gap-2'>
                                <i className={`${item.icon}`}></i>
                                <h2 className='font-semibold '>{item.title}</h2>
                            </motion.div>
                            <motion.div 
                            variants={animateVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once:true,amount: 0.9 }}
                            className='w-7 h-7 flex items-center last:hidden justify-center'>
                                <ArrowRightIcon className='rotate-90 w-6 h-6  md:rotate-0  lg:group-hover:animate-arrowRight'/>
                            </motion.div>
                            </>
                            ))
                        
                        :
                        WORK_STEPS.map((item,i)=>(
                        <>
                        <motion.div 
                        variants={animateVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once:true,amount: 0.8}}
                        
                        className='flex py-2.5 w-full  md:w-fit md:min-w-fit items-center justify-center flex-wrap p-2 shadow-md border rounded gap-2'>
                            <i className={`${item.icon}`}></i>
                            <h2 className='font-semibold '>{item.title}</h2>
                        </motion.div>
                        <motion.div 
                        variants={animateVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once:true,amount: 0.9 }}
                        
                        className='w-7 h-7 flex items-center last:hidden justify-center'>
                            <ArrowRightIcon className='rotate-90 w-6 h-6  md:rotate-0  lg:group-hover:animate-arrowRight'/>
                        </motion.div>
                        </>
    
                        ))
                    }
                </div>
            </div>
        </section>)
}

export default AboutOurProcess