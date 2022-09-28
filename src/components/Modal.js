import close from '../assets/images/icon-close.svg'

export default function Modal({ nav, toggleNav }) {

  return (
    <div className={nav ? 'absolute top-0 left-0 w-full bg-black/80 h-[100vh] ease-in duration-100' : 'hidden'}>
            <div className='w-[70%] h-full bg-white px-5 pt-5'>
                <div onClick={() => toggleNav()}>
                    <img className='h-5' src={close} alt="" />
                </div>
                <ul className='font-bold text-lg mt-10 flex flex-col gap-5'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
         </div>
  )
}
