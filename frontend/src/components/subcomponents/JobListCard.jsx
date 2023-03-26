import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Chip from './Chip'
import { BriefcaseIcon, ClockIcon, CodeBracketIcon, CurrencyDollarIcon, GlobeAmericasIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'
import JobApply from '../JobApplyModal'

const variants = {
    offscreen: {
        opacity: 0.5,
        scale: 0.8,
        y: 40,
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

const detailVariants = {
    intial: {
        opacity: 0,
        y: -100,
        z: -10
    },
    final: {
        opacity: 1,
        y: 0,
        z: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }

    }
}


const JobListCard = ({ data }) => {

    const [showDetail, setShowDetail] = useState(false)
    const [applyModalOpen,setApplyModalOpen]=useState(false)


    const openModal=()=>{
        setApplyModalOpen(true)
    }

    const closeModal=()=>{
      setApplyModalOpen(false);
    }
  

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    }


    return (
        <>
        <motion.div
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}

            className='bg-gray-300 p-4 space-y-2 rounded dark:bg-gray-600 dark:text-gray-100 border-gray-300 dark:border-gray-200'>

            <div >
                <div className='flex flex-wrap justify-between space-y-2'>
                    <div className='font-semibold text-md md:text-lg flex flex-wrap justify-start md:justify-between items-center space-x-2'>
                        <span>{data.title}</span>
                        {/* {!showDetail && */}
                        <>
                            <span className='hidden md:block'>|</span>
                            <span className=''>{data.job_level}</span>
                        </>
                        {/* } */}
                    </div>
                    <div className='space-x-2'>
                        <button onClick={openModal} className='bg-emerald-500 px-2 py-1 text-md md:px-3 md:py-2 text-gray-100 rounded'>Apply Now</button>
                        <button onClick={toggleDetail} className='bg-blue-500 px-2 py-1 text-md md:px-3 md:py-2 text-gray-100 rounded'>{
                            showDetail ? 'Show Less' : 'Show More'
                        }</button>
                    </div>
                </div>
                {
                    !showDetail &&
                    <div className='text-sm space-x-2 pt-2 md:pt-0'>
                        <span>
                            {data?.location}
                        </span>
                        <span className='text-gray-400'>|</span>
                        {
                            data?.remote_eligible &&
                            <>
                                <span className='text-blue-500 dark:text-blue-300'>Remote Available</span><span className='text-gray-400'>|</span>
                            </>
                        }
                        <span ><span className='text-md font-semibold font-sans'>{data?.open_positions}</span> Open Position</span>
                    </div>
                }
            </div>
            {
                !showDetail &&
                <div className='space-x-1 flex flex-wrap space-y-1 items-center text:xs md:text-sm'>
                    {data?.keywords.split(',').map((keyword,i) => <Chip key={`${i}-${keyword}`} text={keyword} />)}
                </div>
            }
            {
                showDetail && <>
                    <AnimatePresence>

                        <motion.div
                            variants={detailVariants}
                            initial='intial'
                            animate='final'
                            exit='intial'
                            className='flex flex-col space-y-2 pt-2'>
                            <div className='space-y-2 dark:text-gray-300'>
                                <div className='space-y-1'>
                                    <h2 className='font-semibold tracking-wide dark:text-gray-200'>Basic Info</h2>
                                    <div className='flex flex-col space-y-1 px-4'>
                                        <div className='flex gap-2'>
                                            <MapPinIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{data.location}</span>
                                        </div>
                                        {
                                            data.remote_eligible &&
                                            <div className='flex gap-2'>
                                                <GlobeAmericasIcon className='w-5 h-5' />
                                                <span className='font-500 capitalize'>Remote Eligible</span>
                                            </div>
                                        }
                                        <div className='flex gap-2'>
                                            <CodeBracketIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{data.job_level}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <BriefcaseIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{data.job_type}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <CurrencyDollarIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{data.salary}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <UsersIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{data.open_positions} Person Required</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <ClockIcon className='w-5 h-5' />
                                            <span className='font-500 capitalize'>{new Date(data.deadline).toDateString()} - (Deadline Date)</span>
                                        </div>


                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='font-semibold tracking-wide dark:text-gray-200'>Job Introduction</h2>
                                    <p className='text-justify px-4'>
                                        {data.job_intro}
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <h2 className='tracking-wide font-semibold text dark:text-gray-200'>Roles and Responsibilites</h2>
                                    <div className='px-4'>

                                        <ul className='px-2 list-disc '>

                                            {
                                                data.job_roles.split('\n').map(line => <li>{line}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <h2 className='tracking-wide font-semibold text dark:text-gray-200'>Minimum Qualifications</h2>
                                    <div className='px-4'>

                                        <ul className='px-2 list-disc '>

                                            {
                                                data.minimum_qualification.split('\n').map(line => <li>{line}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {data.extra_benefits &&
                                    <div className='space-y-1'>
                                        <h2 className='tracking-wide font-semibold text dark:text-gray-200'>Addtional Benefits</h2>
                                        <div className='px-4'>

                                            <ul className='px-2 list-disc '>

                                                {
                                                    data?.extra_benefits.split('\n').map(line => <li>{line}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>}


                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>
            }

        </motion.div>
        <JobApply isOpen={applyModalOpen} closeModal={closeModal} jobtitle={data.title}/>
        
        </>
    )
}

export default JobListCard