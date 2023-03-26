import {useState,useEffect} from 'react'
import { BuildingOfficeIcon, BuildingOffice2Icon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { CONTACT_INFO } from '../data/constants';
import client from '../api/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [data, setcontactInfoData] = useState(null);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');



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

  const notifyFailure=()=>toast.error("Unable to record your submission")

  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      const data={
        "full_name":name,
        "email": email,
        "message":msg
        }

      toast.promise(
        client.collection('contact_form').create(data),
        {
          pending:"Recording your submission...",
          success:'Thank you for contacting us.',
          error:"Unable to record your submission at the moment."
        }
      )

    }catch(e){
      notifyFailure()

      }
    console.log(name,email,msg);
    setName('');
    setEmail('');
    setMsg('');
  }


  useEffect(() => {
    get_contact_info()
    return () => {
    }
  }, [])

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick        
        />
        <div class="container px-8 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe className='absolute w-full h-full inset-0 filter grayscale-[0.5]'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.482557867068!2d84.40112501473257!3d27.671476633675034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb3bb93bea15%3A0x120da2494438c4f1!2sBro%20Soft%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1673787108969!5m2!1sen!2snp" width="100%" height="100%"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='absolute w-full h-full bg-black/40 dark:bg-black/20 inset-0 pointer-events-none'></div>
            <div class="bg-white dark:bg-gray-600 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 space-y-3 px-6">
                <div className='text-gray-900 dark:text-gray-100 space-y-3'>
                  <h2 class="title-font font-semibold  tracking-widest text-sm">Nepal Office</h2>
                  <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                      <a href={`tel:${data ? data?.phone_no : CONTACT_INFO.phone}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <PhoneIcon className="w-4 h-4 group-hover:fill-green-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data?.phone_no : CONTACT_INFO.phone}
                        </span>
                      </a>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <a href={`mailto:${data ? data?.email : CONTACT_INFO.email}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <EnvelopeIcon className="w-4 h-4 group-hover:fill-orange-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data?.email : CONTACT_INFO.email}
                        </span>
                      </a>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <a href={`${data ? data?.google_map_url : CONTACT_INFO.map_url}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <i className="fa-brands fa-whatsapp group-hover:text-emerald-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data.nepal_wapp : CONTACT_INFO.nepal_wapp}
                        </span>
                      </a>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <a href={`${data ? data?.google_map_url : CONTACT_INFO.map_url}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <MapPinIcon className="w-4 h-4 group-hover:fill-blue-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data?.address : CONTACT_INFO.address}
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <div className='text-gray-900 dark:text-gray-100 space-y-3'>
                  <h2 class="title-font font-semibold  tracking-widest text-sm">UK Office</h2>
                  <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                      <a href={`mailto:${data? data?.uk_email :CONTACT_INFO.uk_email}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <EnvelopeIcon className="w-4 h-4 group-hover:fill-orange-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data?.uk_email : CONTACT_INFO.uk_email}
                        </span>
                      </a>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <a href={`${data ? data?.uk_gmap_url : CONTACT_INFO.uk_gmap_url}`} className='text-sm inline-flex justify-center md:justify-start gap-2 group  hover:text-gray-900 dark:hover:text-gray-100'>
                        <span>
                          <MapPinIcon className="w-4 h-4 group-hover:fill-blue-500 group-hover:animate-bounce"/>
                        </span>
                        <span className='text-[12]'>
                          {data ? data?.uk_address : CONTACT_INFO.uk_address}
                        </span>
                      </a>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-300 px-4 rounded flex flex-col md:ml-auto w-full md:pt-6 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Fill the form and our team will reach you as soon as possible.</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} required id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <div className='inline-flex gap-4 px-2 py-2 text-lg items-center'>
              <h2 className='text-sm'>Follow Us</h2>
              <span><i className='fa-brands fa-facebook hover:text-blue-600 cursor-pointer'></i></span>
              <span><i className='fa-brands fa-twitter hover:text-blue-400 cursor-pointer'></i></span>
              <span><i className='fa-brands fa-instagram hover:text-orange-500 cursor-pointer'></i></span>
              <span><i className='fa-brands fa-linkedin hover:text-blue-700 cursor-pointer'></i></span>
              <span><i className='fa-brands fa-youtube hover:text-red-500 cursor-pointer'></i></span>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact