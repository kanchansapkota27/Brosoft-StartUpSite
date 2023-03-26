import {useRef} from 'react'
import { motion,AnimatePresence} from 'framer-motion'


const animateVariants={
    offscreen:{
        opacity:0.5,
        scale:0.8,
        y:50,
    },
    onscreen:{
        opacity:1,
        scale:1,
        y:0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration:1
          }
    }
}

const Stat = ({ icon, value, subtitle,is_static=false}) => {

    return (
        <>
        <AnimatePresence>

            <motion.div
            variants={animateVariants} 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true,amount:0.8}}
              class="border-2 border-gray-300 dark:border-gray-200 px-4 py-4 md:py-6 rounded-lg group hover:shadow-md">
                {
                    !is_static?
                    <span className={`flex w-full justify-center mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400`}>
                        <i className={`${icon} inline-block p-4 `}></i>
                    </span>
                    :
                    icon
                    
                }
                <h2 class="title-font font-medium text-xl md:text-3xl text-gray-900 dark:text-gray-100">{value}</h2>
                <p class="leading-relaxed">{subtitle}</p>
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Stat