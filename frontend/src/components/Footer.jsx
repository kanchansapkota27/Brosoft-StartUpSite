import {useState,useEffect} from 'react'

import { CONTACT_INFO } from '../data/constants'
import { QuickLinkRoutes } from '../routes'

const Footer = ({data}) => {
    return (
        <>
            <footer className="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300 border-t-white border-t-2">
                <div className='w-full grid grid-cols-1 gap-3 md:space-x-3 text-center md:grid-cols-4 md:text-left p-5'>
                    <div className='flex flex-col gap-3'>
                        <a href='/' className="flex title-font font-medium cursor-pointer items-center dark:text-white text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinejoin="round" strokeLinecap="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                            <span className="ml-3 text-xl">Bro<span className='text-red-600 dark:text-red-400'>Soft</span></span>
                        </a>
                        <span className='dark:text-gray-400 font-light text-justify'>
                            We make your business smart for you.
                        </span>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-md'>Quick Links</h2>
                        <div className='flex flex-col gap-1'>
                            {
                                QuickLinkRoutes.map(
                                    (route)=>{
                                        return route.isActive&& (
                                            <a key={route.path} href={route.path} className='text-sm hover:text-gray-900 dark:hover:text-gray-100'>{route.label}</a>
                                            )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-md'>Contact Us</h2>
                        <div className='flex flex-col gap-1 justify-center'>
                            <a href={`tel:${data?data?.phone_no:CONTACT_INFO.phone}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:fill-green-500 group-hover:animate-bounce">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                <span className='text-[12]'>
                                 {data?data?.phone_no:CONTACT_INFO.phone}
                                </span>
                            </a>
                            <a href={`mailto:${data?data.email:CONTACT_INFO.email}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:fill-orange-600 group-hover:animate-bounce">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <span className='text-[12]'>
                                {data?data.email:CONTACT_INFO.email}
                                </span>
                            </a>
                            <a href={data?data.google_map_url:CONTACT_INFO.map_url} target='_blank' className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:fill-blue-500 group-hover:animate-bounce">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>
                                <span className='text-[12]'>
                                    {data?data.address:CONTACT_INFO.address}
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-md'>Legal & Privacy</h2>
                        <div className='flex flex-col gap-1'>
                            <a href='#' className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                                Terms and Conditions
                            </a>
                            <a href='#' className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                                Privacy Policy
                            </a>

                        </div>
                    </div>


                </div>
                <div className="bg-gray-100 dark:bg-gray-700 ">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 dark:text-gray-100 text-sm text-center sm:text-left">© 2023 Kanchan Sapkota —
                            <a href="#" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 ml-1" target="_blank">@kanchansapkota</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href='https://www.facebook.com/brosoftltd' >
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:fill-blue-500" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3" href='https://twitter.com/Brosoft1'>
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:fill-blue-300" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3" href='https://www.instagram.com/brosoftnepal/'>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:stroke-orange-300" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3" href='https://www.linkedin.com/company/brosoftnepal/'>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:fill-blue-500" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                            <a className="ml-3" href='https://www.youtube.com/channel/UCNIKPoaEPNSG4qM9q36WoFQ'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-500 dark:text-gray-300 hover:fill-red-500 bi bi-youtube' fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer