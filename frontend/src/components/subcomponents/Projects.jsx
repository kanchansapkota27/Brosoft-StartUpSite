import React from 'react'
import {motion} from 'framer-motion'

const variants = {
    offscreen: {
        opacity: 0.5,
        scale:0.8,
        y: 40,
    },
    onscreen: {
        opacity: 1,
        scale:1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }
  }
  

const ProjectLeft = ({data}) => {
    return (
        <>
            <motion.div 
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once:true,amount: 0.5 }}
                        
            className='grid grid-cols-1 md:grid-cols-2 p-1 space-x-4 group rounded shadow-md border-2 border-gray-300 dark:border-gray-200 px-4 py-4 md:py-6 group hover:shadow-md'>
                <div className='flex justify-center'>
                    <img src={data.banner} className='object-cover'/>
                </div>
                <div className='p-2 space-y-4 '>
                    <div className='flex items-center flex-wrap gap-4 p-3 '>
                        <span className='w-12 h-12 rounded-full shadow-md'>
                            <img src={data.logo} />
                        </span>
                        <div className='flex flex-col'>
                            <a href={data.projectLink} className='font-semibold tracking-tight text-blue-600 dark:text-blue-300 text-xl'>{data.title}</a>
                            <p className='text-base'>{data.subtitle}</p>
                        </div>
                    </div>
                    <p className='leading-ease text-justify text-md'>
                        {data.desc}
                    </p>
                    <div className='flex flex-wrap items-center space-x-4'>
                        <h3 className='font-sans font-semibold pr-2 border-r-2 border-red-400'>Built With</h3>
                        {
                            data?.techIcons?.map(item=>(
                                <i className={`${item}`}></i>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}

const ProjectRight = ({data}) => {
    return (
        <>
            <motion.div 
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once:true,amount: 0.5 }}
            
            className='grid grid-cols-1 md:grid-cols-2 p-1 gap-2 space-x-reverse-4 group rounded shadow-md border-2 border-gray-300 dark:border-gray-200 px-4 py-4 md:py-6 group hover:shadow-md '>
            <div className='flex justify-center md:order-2 '>
                    <img src={data.banner} className='object-cover'/>
                </div>
                <div className='p-2 space-y-4 '>
                    <div className='flex items-center flex-wrap gap-4 p-3 '>
                        <span className='w-12 h-12 rounded-full shadow-md'>
                            <img src={data.logo} />
                        </span>
                        <div className='flex flex-col'>
                            <a href={data.projectLink} className='font-semibold tracking-tight text-blue-600 dark:text-blue-300 text-xl'>{data.title}</a>
                            <p className='text-base'>{data.subtitle}</p>
                        </div>
                    </div>
                    <p className='leading-ease text-justify text-md'>
                        {data.desc}
                    </p>
                    <div className='flex flex-wrap items-center space-x-4'>
                        <h3 className='font-sans font-semibold pr-2 border-r-2 border-red-400'>Built With</h3>
                        {
                            data?.techIcons?.map(item=>(
                                <i className={`${item}`}></i>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export { ProjectLeft, ProjectRight }