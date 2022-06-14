import React, { useState } from 'react'
import { TiArrowSortedDown, TiTrash } from 'react-icons/ti'
import { FaRegUser } from 'react-icons/fa'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { subMenus } from '../../lib/constant'
import { FiMenu } from 'react-icons/fi'
import Navigation from './Navigation'

const Header = props => {
  const [isNavigation, setIsNavigation] = useState(false)
  const [menus, setMenus] = useState(subMenus || []);

  const handleSearch = searchKey => { }

  return (
    <div className='bg-slate-900'>
      <div className='container w-[96%] text-sm text-gray-100 flex flex-col items-center justify-center mx-auto'>
        <div className='container flex items-center justify-between py-4'>
          <div className='md:hidden px-4'>
            <FiMenu size={24} onClick={() => setIsNavigation(true)} />
          </div>
          <div className='hidden md:flex'>
            <div className='flex items-center gap-1'>
              us <TiArrowSortedDown />
            </div>
            <div className='mx-4'>About</div>
            <div>Contact</div>
          </div>
          <div className='text-2xl text-center'>LOGO</div>
          <div className='md:hidden flex items-center gap-1 px-4'>
            <TiTrash />
            <div>0</div>
          </div>
          <div className='hidden md:flex gap-3'>
            <div className='flex items-center gap-2 whitespace-nowrap'>
              <FaRegUser /> My profile
            </div>
            <div className='flex items-center gap-2 whitespace-nowrap'>
              <TiTrash />
              <div>0 items</div>
              <div>$0.00</div>
            </div>
          </div>
        </div>
        <div className='hidden md:block w-9/12'>
          <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
            <InputBase sx={{ ml: 1, flex: 1 }} onChange={e => handleSearch(e.target.value)} placeholder='Search Google Maps' inputProps={{ 'aria-label': 'search google maps' }} />
            <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className='py-4 w-9/12 text-base hidden md:flex justify-between'>
          {menus.map((submenu, index) => (
            <div key={index} onClick={() => props.setSubMenu(submenu)} className={`cursor-pointer ${props.subMenu.title === submenu.title && 'underline'}`}>
              {submenu.title.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <Navigation isNavigation={isNavigation} setIsNavigation={setIsNavigation} />
    </div>
  )
}

export default Header
