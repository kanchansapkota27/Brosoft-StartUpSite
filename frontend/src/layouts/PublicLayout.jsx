import {useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import client from '../api/client'
// import FollowPointer from '../components/subcomponents/FollowPointer';
import ScrollTop from '../components/subcomponents/ScrollTop';
import { ToastContainer } from 'react-toastify';

const PublicLayout = () => {

    const [isdarkMode,setIsDarkMode]=useState(false);
    const [contactInfoData, setcontactInfoData] = useState(null);

    const toggleDarkMode = ()=>{
        if (isdarkMode){
            localStorage.setItem('theme','light');
        }
        else{
            localStorage.setItem('theme','dark');
        }
        setIsDarkMode(!isdarkMode);
    }
    
    
    useEffect(() => {
        const localtheme=localStorage.getItem('theme');
        if (localtheme==='dark'){
            setIsDarkMode(true)
        }
        else{
            setIsDarkMode(false)
        }    
        return () => {
      }
    }, [])

    function get_contact_info(){
        client.collection('contact_info').getList(1,20,{filter:'is_active_now = true'}).then(
          (res) => {
            const items=res.items[0]
            // const urlbuilt=items.map((item)=>({...item,icon:client.getFileUrl(item,item.icon)}))
            setcontactInfoData(items);
    
        }).catch(err=>{
          console.log(err);
        })
      }
    

    useEffect(() => {
        get_contact_info()
        return () => {
        }
      }, [])
        
    
        

  return (
    <>
    <div className={`w-full relative h-screen flex flex-col font-montserrat bg-transparent-100 z-10 ${isdarkMode && 'dark'}`}>
        {/* <div className='sticky w-full z-10  top-0 text-gray-600 body-font bg-gray-100  dark:bg-gray-700 dark:text-gray-300'> For Sticky  */}
        {/* <div className='fixed w-full z-50 inset-x-0 top-0 text-gray-600 body-font bg-gray-100  dark:bg-gray-700 dark:text-gray-300'> */}
        <div className=''>    
            <NavBar isDarkMode={isdarkMode} toggleDarkMode={toggleDarkMode}/>
        </div>
        <ToastContainer/>
        <div className='bg-gray-200 dark:bg-gray-700 flex-1 dark:shadow-gray-500'>
          {/* <FollowPointer/> */}
            <Outlet/>
        </div>
        <div>
            <Footer data={contactInfoData}/>
        </div>
        <ScrollTop/>
    </div>
    </>
  )
}

export default PublicLayout