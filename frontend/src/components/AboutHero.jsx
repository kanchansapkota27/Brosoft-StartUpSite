import {useEffect} from 'react'
import AnimatedBlobs from "./AnimatedBlobs";
import { ReactComponent as TS } from '../assets/svg/support-team.svg'
import { ABOUT_HERO } from '../data/constants';
import { motion } from 'framer-motion'


const animateVariants = {
  offscreen: {
    opacity: 0.3,
    x: 150
  },
  onscreen: {
    opacity: 1,
    x: 0,
  }
}

const AboutHero = ({ data }) => {

  useEffect(() => {
    return () => {
    }
  }, [data])
  

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-10'>

        <div className='grid py-16 w-full grid-cols-1 gap-4 lg:grid-cols-2 dark:bg-gray-700'>
          <div className="relative w-full h-full pr-10 ">
            <div className='z-40 relative'>
              <TS className='w-full h-full z-40' />
            </div>
            <AnimatedBlobs />
          </div>

          <div className='text-gray-800 dark:text-gray-100 space-y-10 text-left'>
            <motion.div
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              transition={{
                delay:0,
                type: "spring",
                bounce: 0.5,
          
              }}
              viewport={{ once: true, amount: 0.5 }}

              className='space-y-4 leading-relaxed mt-10 md:mt-0'>
              <h1 className='font-[500] text-3xl tracking-wide '>{data ? data.title_1 : ABOUT_HERO.title_1}</h1>
              <p className=" dark:text-gray-300 text-justify break-all md:break-normal">
                {data ? data.content_1 : ABOUT_HERO.content_1}
              </p>
            </motion.div>
            <motion.div
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              transition={{
                delay:0.3,
                type: "spring",
                bounce: 0.5,
          
              }}

              viewport={{ once: true, amount: 0.5 }}
              className='space-y-4 leading-relaxed'>
              <h1 className='font-[500] text-3xl tracking-wide'>{data ? data.title_2 :ABOUT_HERO.title_2}</h1>
              <p className=" dark:text-gray-300 text-justify break-normal">
                {data ? data.content_2 : ABOUT_HERO.content_2}
              </p>
            </motion.div>
            <motion.div
              variants={animateVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay:0.8,
                type: "spring",
                bounce: 0.5,          
              }}
              className='space-y-4 leading-relaxed'>
              <h1 className='font-[500] text-3xl tracking-wide'>{data ? data.title_3 : ABOUT_HERO.title_3}</h1>
              <p className=" dark:text-gray-300 text-justify break-normal">
                {data ? data.content_3 : ABOUT_HERO.content_3}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutHero