import React from 'react'

const Chip = ({text}) => {
  return (
    <span className='p-1 px-2 select-none border-[1px] rounded-full text-xs  md:text-sm border-gray-500 text-gray-500 dark:border-gray-400 dark:text-gray-400 uppercase text-[12px]'>{text}</span>
    )
}

export default Chip