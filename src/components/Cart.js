import { useSelector, useDispatch } from "react-redux"
import { isInactive } from "../redux/cartslice"
import { decrement } from "../redux/counter"

import productOneThumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'

export default function Cart({ openCart }) {
    const dispatch = useDispatch()
    const { value } = useSelector((state) => state.counter);
    const { active } = useSelector((state) => state.cart);
    const total = value * 125;

    const deleteItem = () => {
        dispatch(decrement())
        dispatch(isInactive())
    }

  return (
    <div className={openCart ? 'cart' : 'hidden'}>
        <p className="font-bold">Cart</p>
        <span className="h-[1px] block w-full bg-grayishblue/80 mt-5"></span>
               
            {active ?
            <>
                <div className="flex items-center justify-between mt-5">
                    <img className="h-16 rounded-lg" src={productOneThumbnail} alt="p1" />
                    <div className="text-lg md:text-sm mr-8 md:mr-3 text-grayishblue">
                        <p className="md:hidden">Fall limited edition...</p>
                        <p className="hidden md:block">Fall limited edition sneakers</p>
                        <p>$125.00 x {value} <span className="font-bold text-black ml-1">${total}.00</span></p>
                    </div>
                    <img onClick={() => deleteItem()} className="h-4 cursor-pointer" src={deleteIcon} alt="delete" />

                </div>
                <button className="button mt-5">
                    Checkout
                </button>
             </> : 
             <p className="my-20 font-bold text-darkgrayblue justify-center flex">Your cart is empty.</p>
        }
        
    </div>
  )
}
