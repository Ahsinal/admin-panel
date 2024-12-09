import { Home, LineStyle, PrivacyTip, Security, Timeline, TrendingUp } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = ({isSidenavOpen}) => {
  return (
    <div className={`min-h-screen min-w-60 bg-gradient-to-r  from-primary-500 to-primary-100  p-4${isSidenavOpen? "":""}`}>
        {/* <h3 className='text-white text-xl  font-bold mb-4 relative group cursor-pointer '>
            Dashboard
            <span className='absolute  left-0 bottom-0 w-0 h-[3px]  bg-gradient-to-r from-purple-500 to-purple-700 rounded transition-all duration-300 group-hover:w-full '> </span>
        </h3> */}

        <ul className='space-y-4 mb-4 px-2'>
            <h1 className='text-white text-lg font-semibold'>List Menu</h1>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <LineStyle/>
                <Link to='/' >Home</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <Timeline/>
                <Link to='/' >Analytics</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <TrendingUp/>
                <Link to='/' >Sales</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <PrivacyTip/>
                <Link to='/' >Home</Link>
            </li>
            <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />

        </ul>
        <ul className='space-y-4 mb-4 px-2'>
            <h1 className='text-white text-lg font-semibold'>List Menu</h1>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <LineStyle/>
                <Link to='/' >Home</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <Timeline/>
                <Link to='/' >Analytics</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <TrendingUp/>
                <Link to='/' >Sales</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <PrivacyTip/>
                <Link to='/' >Home</Link>
            </li>
            <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />

        </ul>
        <ul className='space-y-4 mb-4 px-2'>
            <h1 className='text-white text-lg font-semibold'>List Menu</h1>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <LineStyle/>
                <Link to='/' >Home</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <Timeline/>
                <Link to='/' >Analytics</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <TrendingUp/>
                <Link to='/' >Sales</Link>
            </li>
            <li className='flex items-center space-x-2 text-white hover:text-teal-200 cursor-pointer'>
                <PrivacyTip/>
                <Link to='/' >Home</Link>
            </li>
            <hr className="h-[1px] bg-gradient-to-r from-white via-gray-300 to-white my-4 border-none" />

        </ul>
    </div>
  )
}

export default SideNav