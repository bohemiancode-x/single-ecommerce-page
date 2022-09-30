import { useSelector, useDispatch } from "react-redux"
import productOneThumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'

export default function Cart({ openCart, toggleCart }) {
    const { value } = useSelector((state) => state.counter);
    //const active = useSelector((state) => state.cartactive.active);
    const total = value * 125;

  return (
    <div className={openCart ? 'cart' : 'hidden'}>
        <p className="font-bold">Cart</p>
        <span className="h-[1px] block w-full bg-grayishblue/80 mt-5"></span>
                <div className="flex items-center justify-between mt-5">
                    <img className="h-16 rounded-lg" src={productOneThumbnail} alt="p1" />
                    <div className="text-lg md:text-sm mr-8 md:mr-3 text-grayishblue">
                        <p className="md:hidden">Fall limited edition...</p>
                        <p className="hidden md:block">Fall limited edition sneakers</p>
                        <p>$125.00 x {value} <span className="font-bold text-black ml-1">${total}.00</span></p>
                    </div>
                    <img className="h-4 cursor-pointer" src={deleteIcon} alt="delete" />

                </div>
                <button className="button mt-5">
                    Checkout
                </button>
        {/* {
            active ?
            <>
                <div>
                    <img src={productOneThumbnail} alt="p1" />
                    <div>
                        <p>Autumn limited edition...</p>
                        <p>$125 x {value} ${total}</p>
                    </div>
                    <img src={deleteIcon} alt="delete" />

                </div>
                <button className="button">
                    Checkout
                </button>
             </> : 
             <p>Your cart is empty</p>
        } */}
        
    </div>
  )
}
