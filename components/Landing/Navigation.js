import React, { useState } from 'react'
import { TiTrash } from 'react-icons/ti'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { subMenus } from '../../lib/constant'
import { CgClose } from 'react-icons/cg'

const Navigation = props => {
  const [subMenu, setSubMenu] = useState({});
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);
  const [itemTitle, setItemTitle] = useState('');

  const handleClickSubMenu = submenu => {
    setSubMenu(submenu);
    setIsSubMenuActive(true);
  }

  const handleClickItem = item => {
    itemTitle === item.title ? setItemTitle('') : setItemTitle(item.title);
  }

  return (
    <div className={`bg-slate-900 fixed top-0 w-full h-full ${props.isNavigation ? 'block' : 'hidden'} overflow-y-scroll`}>
      <div className='container text-sm text-gray-100 flex flex-col items-center justify-center mx-auto'>
        <div className='container flex items-center justify-between py-4'>
          <div className='px-4'>
            <CgClose size={24} onClick={() => props.setIsNavigation(false)} />
          </div>
          <div className='text-2xl text-center'>LOGO</div>
          <div className='flex items-center gap-1 px-4'>
            <TiTrash />
            <div>0</div>
          </div>
        </div>
        <div className='w-full px-4'>
          <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search Google Maps' inputProps={{ 'aria-label': 'search google maps' }} />
            <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        {isSubMenuActive ?
          <div className='bg-slate-900 py-4 w-full text-base flex flex-col justify-between'>
            <div className='mx-4 text-2xl flex items-center'>
              <FaAngleLeft onClick={() => setIsSubMenuActive(false)} />
              <div className='flex-1 text-center py-3'>{subMenu.title}</div>
            </div>
            {subMenu.items.map((item, index) => (
              <div key={index}>
                <div onClick={() => handleClickItem(item)} className='py-4 mx-4 border-t-2 border-gray-800 flex justify-between items-center'>{item.title} {itemTitle === item.title ? <FaAngleUp /> : <FaAngleDown />}</div>
                {itemTitle === item.title && <div className='bg-white'>
                  {item.list.map((category, idx) => (
                    <div key={idx} className='mx-4 py-4 text-base text-gray-800 border-b-2 border-gray-200'>{category}</div>
                  ))}
                </div>}
              </div>
            ))}
            {subMenu.images.map((image, index) => (
              <div key={index} className='py-4 mx-4 border-t-2 border-gray-800 flex justify-between items-center'>{image.title}</div>
            ))}
          </div>
          :
          <div className='bg-slate-900 p-4 w-full text-base flex flex-col justify-between'>
            {subMenus.map((submenu, index) => (
              <div key={index} onClick={() => handleClickSubMenu(submenu)} className='py-4 border-b-2 border-gray-800 flex justify-between items-center'>{submenu.title.toUpperCase()} <FaAngleRight /></div>
            ))}
          </div>
        }
        <div className='flex text-base flex-col items-start w-full p-4 gap-2'>
          <div>My profile</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
