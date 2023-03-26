import {useState,useEffect} from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';

const ScrollTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

  return (
    <>
    {showTopBtn &&
      <motion.div 
      initial={{opacity:0,right:-10}}
      whileInView={{opacity:1,right:0}}
      onClick={goToTop} className='w-8 h-8 fixed bottom-14 right-1 cursor-pointer shadow-lg outline-1 dark:bg-red-400 bg-red-500 dark:text-gray-700 font-semibold text-white'>
      <ChevronUpIcon className='w-8 h-8 p-1'/>
    </motion.div>
    }
    </>
  )
}

export default ScrollTop