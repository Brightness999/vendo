import React from 'react'
import { images } from '../../lib/constant'

const Content = ({ subMenu }) => {
  return (
    <div className='container py-4 mx-auto hidden md:block'>
      {subMenu.title && (
        <div className='flex justify-center items-center'>
          <div className='text-sm text-gray-900 w-6/12'>
            <div className='text-2xl font-bold'>{subMenu.title}</div>
            <div className='flex mt-6'>
              {subMenu.items.map((item, index) => (
                <div key={index} className='flex flex-col gap-3 w-4/12'>
                  <div className='font-bold'>{item.title}</div>
                  {item.list.map((category, idx) => (
                    <div key={idx}>{category}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className='w-6/12 flex justify-between gap-6'>
            {subMenu.images.map((image, index) => (
              <div key={index} className='flex flex-col gap-3 w-1/2'>
                <img src={images[image.img].src} alt="" />
                <div>{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Content
