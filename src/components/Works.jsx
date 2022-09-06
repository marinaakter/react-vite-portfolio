import React from 'react'
import SectionTitle from './SectionTitle'
import WorkItem from './WorkItem'
import MyworkData from '../data/MyworkData'

const Works = () => {
    
  return (
    <div className='py-12' >
          <SectionTitle id='works' >Recent Works</SectionTitle>
          <div className='grid grid-cols-1 md:grid-2 lg:grid-cols-2 gap-3'>
              {MyworkData.map(work => (
                  <WorkItem
                      key={work.title}
                      imgUrl={work.imgUrl}
                      title={work.title}
                      tech={work.tech}
                  ></WorkItem>
                  
              ))}
          </div>
    </div>
  )
}

export default Works
