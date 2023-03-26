import {useState,useEffect} from 'react'
import AboutHero from '../components/AboutHero'
import AboutIndustries from '../components/AboutIndustries'
import AboutOurProcess from '../components/AboutOurProcess'
import client from '../api/client'
import AboutTeam from '../components/AboutTeam'
import AboutJourney from '../components/AboutJourney'

const About = () => {

  const [heroData, setheroData] = useState(null);
  const [industriesData, setindustriesData] = useState(null);
  const [processData, setprocessData] = useState(null);
  const [teamData, setteamData] = useState(null);
  const [historyData, sethistoryData] = useState(null);

  function get_heroData(){
    client.collection('about_hero').getList(1,20,{filter:'is_active_now = true'}).then(
      (res) => {
        setheroData(res.items[0]);
      }).catch(
        (error) => {
          console.debug(error)
        }
      )
    }


  function get_industries(){
    client.collection('about_industries').getList(1,30,{filter:'is_active_now = true'}).then(
      (res) => {
        const items=res.items
        // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
        setindustriesData(items);

    }).catch(err=>{
      console.debug(err);
    })
  }

  function get_process(){
    client.collection('about_process').getList(1,30,{filter:'is_active_now = true'}).then(
      (res) => {
        const items=res.items
        // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
        setprocessData(items);

    }).catch(err=>{
      console.debug(err);
    })
  }

  function get_teams(){
    client.collection('about_team').getList(1,30,{filter:'is_active_now = true'}).then(
      (res) => {
        const items=res.items
        const urlbuilt=items.map((item)=>({...item,image:client.getFileUrl(item,item.image)}))
        setteamData(urlbuilt);

    }).catch(err=>{
      console.debug(err);
    })
  }

  function get_history(){
    client.collection('about_journey').getList(1,30,{filter:'is_active_now = true'}).then(
      (res) => {
        const items=res.items
        // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
        sethistoryData(items);

    }).catch(err=>{
      console.debug(err);
    })
  }




  useEffect(() => {
    get_heroData()
    get_industries()
    get_process()
    get_teams()
    get_history()
    return () => {
    }
  }, [])
 

  return (
    <>
    <AboutHero data={heroData}/>
    <AboutIndustries data={industriesData}/>
    <AboutOurProcess data={processData}/>
    <AboutTeam data={teamData}/>
    <AboutJourney data={historyData}/>
    </>
  )
}

export default About