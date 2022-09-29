import cart from '../assets/images/icon-cart.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import Slider from './Slider'
import { useState } from 'react'

//images
import productOne from '../assets/images/image-product-1.jpg'
import productOneThumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import productTwo from '../assets/images/image-product-2.jpg'
import productTwoThumbnail from '../assets/images/image-product-2-thumbnail.jpg'
import productThree from '../assets/images/image-product-3.jpg'
import productThreeThumbnail from '../assets/images/image-product-3-thumbnail.jpg'
import productFour from '../assets/images/image-product-4.jpg'
import productFourThumbnail from '../assets/images/image-product-4-thumbnail.jpg'

export default function Product() {
    const [open, setOpen] = useState(false);
    const close = () => {
        setOpen(false)
    }

  return (
    <div className='flex flex-col md:flex-row md:py-10 md:mt-12'>
        
        <div className='h-[20rem] overflow-hidden md:h-full md:mr-5'>
            <img onClick={() => setOpen(true)} className=' md:rounded-xl cursor-pointer' src={productOne} alt="" />
            <ul className='hidden md:flex justify-around mt-8'>
                <img className='active h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productOneThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productTwoThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productThreeThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productFourThumbnail} alt="" />
            </ul>
        </div>

        <div className='px-6 mt-5 md:px-12 md:mt-10'>
            <h3 className='text-orange text-sm font-bold'>SNEAKER COMPANY</h3>
            <h1 className='text-3xl md:text-5xl font-bold'>Fall Limited Edition Sneakers</h1>
            <p className='mt-4 md:mt-8 text-darkgrayblue'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

            <div className='flex items-center md:items-start mt-5 gap-3'>
                <h1 className='flex flex-row md:flex-col font-bold md:text-xl text-2xl'>$125.00 <span className='hidden md:block text-grayishblue text-xs line-through'>$250.00</span></h1>
                <p className='bg-paleorange text-orange p-1 px-2 rounded font-bold md:text-xs text-md h-[50%]'>50%</p>
                <span className='md:hidden text-grayishblue text-md font-bold line-through ml-auto'>$250.00</span>
            </div>

            <div className='mt-5 flex flex-col md:flex-row gap-4 items-center'>
                <div className='w-full font-bold items-center flex justify-between bg-lightgrayblue p-4 rounded-md'>
                    <button className='px-4'><img src={minus} alt="minus" /></button>
                    <span className='px-4'>0</span>
                    <button className='px-4'><img src={plus} alt="plus" /></button>
                </div>

                <button className='flex w-full justify-center gap-2 bg-orange shadow-xl text-white px-14 py-4 rounded-lg items-center cursor-pointer hover:opacity-50'>
                    <img className='h-4' src={cart} alt="cart" />
                    <span className='text-sm font-bold'>Add to cart</span>
                </button>

            </div>
        </div>

        <Slider open={open} close={close} />

    </div>
  )
}
