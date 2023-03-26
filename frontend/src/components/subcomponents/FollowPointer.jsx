import {React,useRef} from 'react'
import { useFollowPointer } from '../../utils/pointer';
import { motion } from 'framer-motion';

const FollowPointer = ({pointer_color}) => {

    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);


  return (
    <motion.div ref={ref} animate={{x,y}} 
    transition={{
        type: "spring",
        damping: 8,
        stiffness: 100,
        // restDelta: 0.001
      }}
    className={`w-8 h-8 rounded-full pointer-events-none  blur-xl cursor-pointer bg-gray-700 dark:bg-blue-500 bg-${pointer_color}  z-1`}/>
)
}

export default FollowPointer