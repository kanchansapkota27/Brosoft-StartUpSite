import { useState,useEffect,Suspense } from 'react'
import { ProjectLeft, ProjectRight } from '../components/subcomponents/Projects';
import { PROJECTS } from '../data/constants';
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


const Portfolio = () => {
  const [data, setdata] = useState(null)


  async function get_projects(){
    await client.collection('portfolio_projects').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        const items=res.items
        const urlbuilt=items.map((item)=>(
          {
            ...item,
            logo:client.getFileUrl(item,item.logo),
            banner:client.getFileUrl(item,item.banner),
            techIcons:item.techIcons.split(',')
          }
        ))
        setdata(urlbuilt);

    }).catch(err=>{
      console.log(err);
    })
  }


  useEffect(() => {
    get_projects()
    console.log("Data:",data)
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
        <h2 className='text-3xl font-semibold'>Our recent works</h2>
        <h4>Have a look at a list of our recently completed projects</h4>
      </motion.div>
      <div className='container space-y-4 pt-10 pb-10 px-10 md:px-20'>
        {
          data?
          data.map((item,index)=>
          {
            if (index%2==0){
              if (item.title){
                return <ProjectLeft key={item.title} data={item}/>
              }
            }else{
              if (item.title){
                return  <ProjectRight key={item.title} data={item}/>
              }
            }
          })
          :PROJECTS.map((item,index)=>
          {
            if (index%2==0){
              if (item.title){
                return <ProjectLeft key={item.title} data={item}/>
              }
            }else{
              if (item.title){
                return  <ProjectRight key={item.title} data={item}/>
              }
            }
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio