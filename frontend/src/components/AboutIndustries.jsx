import React from 'react'
import { INDUSTRIES } from '../data/constants'
import Industries from './subcomponents/Industries'


const AboutIndustries = ({data}) => {
    return (
        <>
            <section className='text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300 pt-20 pb-8'>
                <div className='container gap-4 px-10 md:px-20'>
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">Industries we serve</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Different types of industries we cater to.
                        </p>
                    </div>
                    <div className='grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 dark:text-gray-300'>
                        {
                            data
                            ?data?.map(item=>
                                {
                                    return <Industries key={item.text} icon={item.icon} text={item.text}/>
                                })
                            :INDUSTRIES.map(item=>{
                                return <Industries key={item.text} icon={item.icon} text={item.text}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutIndustries