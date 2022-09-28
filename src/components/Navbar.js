import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import hamburger from '../assets/images/icon-menu.svg'

//components
import Modal from './Modal'

const navitems = [
    {
        id: 1,
        name: 'Collections'
    },
    {
        id: 2,
        name: 'Men'
    },
    {
        id: 3,
        name: 'Women'
    },
    {
        id: 4,
        name: 'About'
    },
    {
        id: 5,
        name: 'Contact'
    },
]


export default function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='px-3 py-3 md:px-0 md:py-0 md:h-[10%] flex items-center relative'>

        <div onClick={() => toggleNav()} className='flex items-center mx-3 md:hidden'>
            <img src={hamburger} alt="ham" />
        </div>
        <div className='flex items-center'>
            <img src={logo} alt="logo" />
        </div>

        
        <ul className='hidden md:flex h-full items-center gap-5 ml-8 text-md text-darkgrayblue'>
            {navitems.map(nav => (
                <li className='navitem' key={nav.id}>{nav.name}</li>
            ))}
        </ul>

         <div className='flex ml-auto items-center gap-6'>
            <img className='h-5 cursor-pointer' src={cart} alt="cart" />
            <img className='h-8 md:h-10 cursor-pointer hover:border-orange hover:border-2 rounded-full' src={avatar} alt="avatar" />
         </div>

         <span className='hidden md:block h-[1px] w-full bg-grayishblue/50 absolute bottom-0'></span>
         <Modal nav={nav} toggleNav={toggleNav} />

    </div>
  )
}
