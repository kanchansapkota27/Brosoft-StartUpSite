import React from 'react'
import { TruckIcon, UserGroupIcon, CodeBracketIcon, ClockIcon } from '@heroicons/react/24/outline'
import Stat from './subcomponents/Stat'
import { ACHIEVEMENTS } from '../data/constants'
import {motion} from 'framer-motion'


const HomeStats = ({data}) => {
    return (
        <>
            <section className="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300">
                <div className="container flex flex-col gap-4 md:px-14">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">Achievements</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base p-2">
                            These are the things we managed to achieve since three years of our operation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center px-10 md:px-0">

                        {
                            data
                            ?
                            data.map((item)=>(
                                
                                <Stat
                                icon={item.boot_icon}
                                value={item?.stat_text}
                                icon_hover_className={item?.icon_wrapper_class}
                                subtitle={item?.stat_subtitle}
                                />
                            ))
                            :
                            ACHIEVEMENTS.map((item)=>(
                                <Stat
                                icon={item?.stat_icon_code}
                                value={item?.stat_text}
                                subtitle={item?.stat_subtitle}
                                is_static={true}
                                />
                            ))

                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeStats