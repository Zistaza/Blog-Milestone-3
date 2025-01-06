import React from 'react'

export default function Authorcard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadein'>

        <img
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
        src='..//images/my.png'
        alt='My'
         />

         <div>
          <h3 className='text-xl font-bold'>Zeenat Yameen</h3>
          <p className='text-slate-600'>Frontend Developer | UI/UX Designer</p>
         </div>
      </div>


    <p className='mt-4 text-black leading-relaxed'>
    Zeenat Yameen is a budding web developer, brimming with enthusiasm and talent, set to excel in the industry.
      </p>  

      <div className='mt-4 flex space-x-3'>
        <a
        href="https://instagram.com/zeenat.yameen"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300'>
          Instagram
        </a>

        <a
        href="https://www.linkedin.com/in/zeenat-yameen-0168a829b"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300'>
          Linkedin
        </a>

        <a
        href="https://web.facebook.com/"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300'>
          Facebook
        </a>
      </div>
    </div>
  )
}
