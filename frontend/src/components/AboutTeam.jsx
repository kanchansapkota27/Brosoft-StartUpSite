import React from 'react'
import { TEAM_MEMBERS } from '../data/constants'
import {motion} from 'framer-motion'

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


const AboutTeam = ({data}) => {
    return (
        <>
            <section class="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300">
                <div class="container px-10 gap-4 md:px-20 pt-10 pb-20">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">Know our team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Learn about our team of professionals.
                        </p>
                    </div>
                    <div className="grid gap-10 py-10  row-gap-8 mx-auto sm:row-gap-10 w-full px-2 lg:max-w-screen sm:grid-cols-2 lg:grid-cols-4">
                        
                        {
                            data?
                            data.map(item=>(
                                <motion.div 
                                variants={animateVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once:true,amount: 0.8}}
                                    
                                
                                className="flex">
                                    <img
                                        className="object-cover w-16 h-16 md:w-20 md:h-20 mr-4 rounded-full shadow ring-1 bg-gray-700 dark:bg-gray-300"
                                        src={item.image}
                                        alt="Person"
                                    />
                                    <div className="flex flex-col gap-1 justify-center">
                                        <p className="text-md">{item.name}</p>
                                        <p className="text-sm text-gray-800 dark:text-gray-300">{item.role}</p>
                                    </div>
                                </motion.div>
                                ))
                            :
                            TEAM_MEMBERS.map(item=>(
                            <motion.div 
                            variants={animateVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once:true,amount: 0.8}}
                                
                            
                            className="flex">
                                <img
                                    className="object-cover w-16 h-16 md:w-20 md:h-20 mr-4 rounded-full shadow ring-1 bg-gray-700 dark:bg-gray-300"
                                    src={item.image}
                                    alt="Person"
                                />
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className="text-md">{item.name}</p>
                                    <p className="text-sm text-gray-800 dark:text-gray-300">{item.role}</p>
                                </div>
                            </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTeam