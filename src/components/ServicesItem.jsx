import React from 'react'

const ServicesItem = ({title,icon,description}) => {
  return (
      <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 p-5 ' >
          <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3' >
                {icon}
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
          
    </div>
  )
}

export default ServicesItem
