import React,{useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import{BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'


const Navbar = () => {
  const [nav,setNav]=useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
        <div className='flex items-center'>
        <div className='cursor-pointer'>
        <AiOutlineMenu onClick={()=>setNav(!nav)} size={30}/>
       </div>
       <h1 className='text-2xl sm:text-3xl lg:text-4xl'>Best <span className='font-bold'>Eats</span></h1>
       <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
       </div>
        </div>
       {/* Search Input */}
       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 w-full' type='text' placeholder='Search Foods'></input>
       </div>

       {/* Card Button */}
       <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20}/> Cart
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}
       

        {/* Side Drawer Menu */}
        <div className={nav?'fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed left-[-100%] top-0 w-[300px] h-screen bg-white z-10 duration-300'}>

        <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
        
        <h2 className='p-4 text-2xl'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
          <ul className='flex flex-col p-4'>
            <li className='text-xl flex py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='text-xl flex py-4'><MdFavorite size={25} className='mr-4'/>Favorites</li>
            <li className='text-xl flex py-4'><FaWallet size={25} className='mr-4'/>Wallet</li>
            <li className='text-xl flex py-4'><MdHelp size={25} className='mr-4'/>Help</li>
            <li className='text-xl flex py-4'><AiFillTag size={25} className='mr-4'/>Promotions</li>
            <li className='text-xl flex py-4'><BsFillSaveFill size={25} className='mr-4'/>Best One</li>
            <li className='text-xl flex py-4'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
          </ul>
        </nav>
        </div>
       
        
    </div>
  )
}

export default Navbar