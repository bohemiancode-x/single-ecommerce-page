import Slider from './Slider'
import Info from './Info'
import { useState } from 'react'
import { slides } from "../data/sliderData"
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

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
        
        <div className='hidden md:block md:h-full md:mr-5'>
            <img onClick={() => setOpen(true)} className=' md:rounded-xl cursor-pointer' src={productOne} alt="" />
            <ul className='hidden md:flex justify-around mt-8'>
                <img className='active h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productOneThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productTwoThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productThreeThumbnail} alt="" />
                <img className='h-20 rounded-xl hover:opacity-50 cursor-pointer' src={productFourThumbnail} alt="" />
            </ul>
        </div>

        <div className='h-[20rem] overflow-hidden md:hidden'>
            <Lightbox
                styles={{ container: { backgroundColor: "white"}, button: {color: 'black', backgroundColor: 'white', borderRadius: '99px', padding: '5px', margin: '25px', marginTop: '-25px'}}}
                carousel={{padding: 0}}
                slides={slides}
                plugins={[Inline]}
                inline={{
                    style: {
                    width: "100%",
                    maxWidth: "900px",
                    aspectRatio: "3 / 3",
                }
             }}
            />
        </div>

        <Info />
        <Slider open={open} close={close} />

    </div>
  )
}
