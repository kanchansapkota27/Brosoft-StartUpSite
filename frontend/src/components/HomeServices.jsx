import React from 'react'
import Service from './subcomponents/Service'
import { SERVICES } from '../data/constants'
import { motion } from 'framer-motion'

const HomeServices = ({data}) => {
    return (
        <>
            <motion.section 
            class="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300 py-20">
                <div class="container flex flex-col gap-4 md:px-14">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">Our Services</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base p-2">
                            Different types of services we offer to our clients.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 md:px-0">
                    {
                        data?
                        data?.map(item=>(
                            <Service 
                            icon={item?.boot_icon}
                            title={item?.title}
                            desc={item?.desc}
                            />
                        ))    
                        :
                        SERVICES.map(item=>(
                            <Service 
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            is_static={true}
                            />
                        ))

                    }
                    </div>
                </div>
            </motion.section>
        </>
    )
}


export default HomeServices