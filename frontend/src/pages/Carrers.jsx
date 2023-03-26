import React from 'react'
import { useState,useEffect,Suspense } from 'react'

import JobListCard from '../components/subcomponents/JobListCard';
import { JOBS } from '../data/constants';
import { motion } from 'framer-motion';
import client from '../api/client';


const variants = {
  offscreen: {
      opacity: 0.5,
      scale:0.8,
      x: -60,
  },
  onscreen: {
      opacity: 1,
      scale:1,
      x: 0,
      transition: {
          type: "spring",
          bounce: 0.5,
          duration: 0.8
      }
  }
}

const Carrers = () => {

  const [data, setdata] = useState(null)


  async function get_carrers(){
    await client.collection('carrers_jobs').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        let items=res.items
        setdata(items);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    get_carrers()
    return () => {
    }
  }, [])
   

  return (
    <section className="text-gray-600 body-font dark:bg-gray-700 dark:text-gray-300 scroll-smooth">
      {/* <FollowPointer  pointer_color={'blue-500'}/> */}
      <motion.div 
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once:true,amount:0.8}}
      
      className="container relative flex px-10 md:px-20 pt-10 flex-col">
        <h2 className='text-3xl font-semibold'>
        {data? "We are actively hiring for the following positions.":"No active positions available." }
        </h2>
        <h4>
          {data?'Let us know if your are available.':''}
        </h4>
      </motion.div>
      {/* <div className='container space-y-4 pt-10 pb-10 px-10 md:px-20'>
        {
          data?
          data.map((item,index)=>
          {
                return <JobListCard key={item.title} data={item}/>
          })
          :JOBS.map((item,index)=>
          {
                return  <JobListCard key={item.title} data={item}/>
            }
          )
        }
        
      </div> */}
      <div className='flex flex-col w-full space-x-2 py-10 px-10 md:px-20'>
        <div className='col-span-2 flex flex-col'>
        {
          data?
          data.map((item,index)=>
          {
                return <JobListCard key={item.title} data={item}/>
          })
          :JOBS.map((item,index)=>
          {
                return  <JobListCard key={item.title} data={item}/>
            }
          )
          }
        </div>
      </div>
    </section>
  )
}

export default Carrers