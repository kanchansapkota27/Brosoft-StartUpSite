import { useState, useEffect,useRef } from 'react'
import Lottie from "lottie-react";
import devteamanim from '../assets/lottie/hero-lottie.json'
import AnimatedBlobs from './AnimatedBlobs';
import Typewriter from 'typewriter-effect';
import CustomNavlink from './CustomNavlink';
import { HERO } from '../data/constants';


const HomeHero = ({heroData}) => {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className=" text-gray-900 dark:text-gray-100 lg:flex-grow md:w-1/2 md:pl-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
                            
                            {/* We can do  */}
                            <span>{heroData?heroData?.pre_wordlist_text:HERO.pre_wordlist_text}</span>
                            <Typewriter options={{
                                    strings: heroData?heroData?.wordlist.split('|'):HERO.wordlist.split('|'),
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName:'text-blue-500 font-semibold',
                                    cursorClassName:'z-0'
                            }}/>
                            {/* <span className='text-blue-500 font-semibold'>{currWord}</span>&nbsp; */}
                            {/* Post Wordlist  */}
                            <span>{heroData?heroData?.post_wordlist_text:HERO.post_wordlist_text}</span>
                        </h1>
                        <p className="mb-8 text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                            {heroData?heroData?.subtext:HERO.subtext}
                        </p>
                        <div className="flex justify-center">
                            <CustomNavlink to='/contact' className="inline-flex items-center gap-2 text-white bg-red-500 dark:bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 dark:hover:bg-red-300 rounded text-lg">
                                {heroData?heroData?.button_text:HERO.button_text}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-arrowRight">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </CustomNavlink>
                        </div>
                    </div>
                    <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <AnimatedBlobs />
                        <Lottie animationData={devteamanim} loop className='z-0' />
                    </div>
                </div>
            </section>
        </>
    )
}


export default HomeHero