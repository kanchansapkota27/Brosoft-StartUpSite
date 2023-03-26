import React from 'react'
import CustomNavlink from './CustomNavlink'
import { NavBarRoutes } from '../routes'

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <>
            <header className="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <CustomNavlink to='/' className="flex title-font font-medium cursor-pointer items-center dark:text-white text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>
                        <span className="ml-3 text-xl">Bro<span className='text-red-600 dark:text-red-400'>Soft</span></span>
                    </CustomNavlink>
                    <nav className="md:ml-auto md:mr-auto flex gap-2 flex-wrap items-center text-base justify-center">
                        {
                            NavBarRoutes.map((route)=>
                            {

                                return route.isActive&&(
                                    <CustomNavlink key={route.path} to={route.path} activeClassName='font-semibold text-red-600 dark:text-red-400' className="mr-5 p-2 hover:text-gray-900 dark:hover:text-white ">{route.label}</CustomNavlink>
                                    )
                            }
                            )
                            
                        }
                    </nav>
                    <div className='flex gap-4 items-center justify-center py-2 mt-2 md:mt-0'>
                        <button onClick={toggleDarkMode} className='w-6 h-6 inline-flex items-center justify-center'>
                        {!isDarkMode?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:fill-gray-600 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-400 hover:fill-yellow-400 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        }
                        </button>

                        <CustomNavlink to='/contact' className="inline-flex relative items-center justify-center  z-20 py-1 px-3 focus:outline-none hover:bg-green-200 dark:hover:bg-green-700 rounded text-base  md:mt-0">
                            <div className=' w-full h-full animate-pulse bg-green-300/30 border-2 absolute inset-0 border-emerald-400 rounded '></div>
                            <span className='font-[500] text-gray-800 dark:text-white'>Get In Touch</span>
                        </CustomNavlink>
                    </div>
                </div>
            </header>    </>
    )
}

export default NavBar