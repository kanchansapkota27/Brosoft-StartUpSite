import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import HomeStats from '../components/HomeStats'
import { useEffect,useState } from 'react'
import client from '../api/client'

const Home = () => {

  const [heroData, setheroData] = useState(null);
  const [achievementsData, setachievementsData] = useState(null);
  const [servicesData, setservicesData] = useState(null);

  function get_heroData(){
    client.collection('home_hero').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        setheroData(res.items[0]);
        console.log(heroData);
      }).catch(
        (error) => {
          console.log(error);
        }
      )
    }


  function get_achievements(){
    client.collection('home_stats').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        const record= res        
        const items=res.items
        // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
        setachievementsData(items);

        console.log(achievementsData);
    }).catch(err=>{
      console.log(err);
    })
  }

  function get_services(){
    client.collection('home_services').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        const record= res        
        const items=res.items
        // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
        setservicesData(items);

        console.log(servicesData);
    }).catch(err=>{
      console.log(err);
    })
  }



  useEffect(() => {
    get_heroData()
    get_achievements()
    get_services()
  
    return () => {
    }
  }, [])
    


  return (
    <>
    <HomeHero heroData={heroData}/>
    <HomeStats data={achievementsData}/>
    <HomeServices data={servicesData}/>
    </>
  )
}

export default Home