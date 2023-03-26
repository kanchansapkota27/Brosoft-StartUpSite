import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useState, useRef } from 'react'
import client from '../api/client'


const JobApply = ({ isOpen, closeModal, jobtitle }) => {

  const defaultData = {
    name: "",
    email: "",
    phone: "",
    resume: null,
  }

  const [formdata, setFormData] = useState(defaultData)

  const handleChange = (e) => {
    const type = e.target.type
    const name = e.target.name

    setErrors()

    let value = type === 'file'
      ? e.target.files[0]
      : e.target.value

    if (name === 'phone') {
      value = e.target.value.replace(/[^0-9]/gi, '')
    }

    
    if (name === 'resume') {
      setErrors(prevErr=>({...prevErr,resume:''}))
      validateSelectedFile()
    }
    
    setFormData(prevData => ({ ...prevData, [name]: value }))

  }

  const fileref = useRef(null)

  const [errors, setErrors] = useState({})


  const validateSelectedFile = () => {
    const MAX_FILE_SIZE = 1024 //1 MB
    // const MAX_FILE_SIZE=200 //1 MB
    console.log(formdata.resume)
    if (formdata.resume === null) {
      setErrors({ ...errors, resume: "Upload your resume to continue" })
      return false
    }

    const fileSizeKiloBytes = formdata?.resume?.size / 1024
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrors({ ...errors, resume: "Selected file exceeds the size limit." })
      return false
    }
    else {
      setErrors({})
      return true
    }
  }


const valiDateAll = e => {
  const validFile = validateSelectedFile()
  const allPresent = Boolean(formdata.name, formdata.email, formdata.phone) && validFile
  return allPresent
}


async function apply_job(){
  const apiData=new FormData()
  apiData.append('full_name',formdata.name)
  apiData.append('email',formdata.name)
  apiData.append('phone',formdata.phone)
  apiData.append('resume',formdata.resume)
  return await client.collection('job_applications').create(
    apiData
  )
}


const handleSubmit = (e) => {
  e.preventDefault();
  const allValid = valiDateAll()
  if (allValid) {
    toast.promise(
      apply_job(),{
        pending:'Submitting your application.',
        success:'Application submitted successfully.',
        error:'Encounterd some error.'
      },{
        autoClose:3000
      }
    )
    fileref.current.value = null;
    setFormData(defaultData);
    closeModal()
  }
}

return (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form onSubmit={handleSubmit}>
                <Dialog.Panel className="w-full md:w-[600px] transform overflow-hidden rounded-2xl bg-slate-100 dark:bg-red-300 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg py-4 font-medium leading-6 text-gray-700"
                  >
                    <div className='space-x-1'>
                      <span className='text-blue-500 text-lg'>{jobtitle}</span>
                      <span>|</span>
                      <span className='text-blue-600 text-lg'>Application</span>

                    </div>
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <div className='flex flex-col space-y-2'>
                      <div className='flex flex-col space-y-1'>
                        <label htmlFor='name' className='text-gray-500'>Full Name</label>
                        <input value={formdata.name} onChange={handleChange} required name='name' type='text' className='px-3 py-2 w-full border-2 rounded border-gray-400' placeholder='John Smith' />
                      </div>
                      <div className='flex flex-col space-y-1'>
                        <label htmlFor='email' className='text-gray-500'>Email Address</label>
                        <input value={formdata.email} onChange={handleChange} required name='email' type='email' className='px-3 py-2 w-full border-2 rounded border-gray-400' placeholder='smith.john@gmail.com' />
                      </div>
                      <div className='flex flex-col space-y-1 relative'>
                        <label htmlFor='phone' className='text-gray-500 '>Phone Number</label>
                        <input value={formdata.phone} onChange={handleChange} required name='phone' type='text' pattern='[9][0-9]{9}' maxLength={10} className='px-3 relative py-2 pl-14 w-full border-2 rounded border-gray-400' placeholder='9845XXXXXX' />
                        <span className='text-gray-500 absolute left-2 top-8 border-r-2 pr-1' >+977</span>
                      </div>
                      <div className='flex flex-col space-y-1 relative'>
                        <div className="flex items-center justify-center w-full">
                          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">
                                {formdata?.resume ? formdata?.resume.name : 'Upload Resume'}
                              </span></p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">PDF only (MAX. 1MB)</p>
                              <input ref={fileref} name='resume' onChange={handleChange} id="dropzone-file" type="file" className="hidden peer" accept='application/pdf' />
                              <p className="text-xs text-red-500 dark:text-gray-400">{
                                errors?.resume
                              }</p>
                            </div>
                          </label>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-2">

                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border  bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Submit Application
                    </button>
                  </div>
                </Dialog.Panel>
              </form>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
)
}

export default JobApply