import { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import hamburger from '../assets/images/icon-menu.svg'

//components
import Modal from './Modal'
import Cart from './Cart'

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
    const { value } = useSelector((state) => state.counter);
    const { active } = useSelector((state) => state.cart);
    const [nav, setNav] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const toggleCart = () => {
        setOpenCart(!openCart)
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

         <div className='flex ml-auto items-center gap-6 relative'>
            <img onClick={() => toggleCart()} className='h-6 cursor-pointer' src={cart} alt="cart" />
            <span className={active ? 'absolute bottom-6 left-3 bg-orange text-white px-[6px] font-bold text-xs rounded-lg' : 'hidden'}>{value}</span>
            <img className='h-8 md:h-10 cursor-pointer hover:border-orange hover:border-2 rounded-full' src={avatar} alt="avatar" />
         </div>

         <span className='hidden md:block h-[1px] w-full bg-grayishblue/50 absolute bottom-0'></span>
         <Modal nav={nav} toggleNav={toggleNav} />
         <Cart openCart={openCart}  />

    </div>
  )
}
