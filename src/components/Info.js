import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { incrementByAmount } from "../redux/counter"
import cart from '../assets/images/icon-cart.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'


export default function Info() {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch();
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const addToCart = () => {
        dispatch(incrementByAmount(count));
        setCount(0)
    }

  return (
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
                <div className='w-full font-bold items-center flex justify-between bg-lightgrayblue rounded-md'>
                    <button onClick={() => decreaseCount()} className='p-4'><img src={minus} alt="minus" /></button>
                    <span className='p-4'>{count}</span>
                    <button onClick={() => setCount(count + 1)} className='p-4'><img src={plus} alt="plus" /></button>
                </div>

                <button onClick={() => addToCart()} className='button'>
                    <img className='h-4' src={cart} alt="cart" />
                    <span className='text-sm font-bold'>Add to cart</span>
                </button>

            </div>
        </div>
  )
}
