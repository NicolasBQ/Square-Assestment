import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

import img_1 from '../../assets/header_img_1.png';
import img_2 from '../../assets/header_img_2.png';

import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/16/solid";

const images = [
    img_1,
    img_2,
]


const MobileCarousel = () => {
    const [page, setPage] = useState(0);
    const [width, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const nextImage = () => {
        if(page < images.length - 1) {  
            setPage(page + 1); 
        }
    }

    const prevImage = () => {
        if(page > 0) {
            setPage(page - 1); 
        }
    }

    return (
        <div className="relative overflow-hidden sm:hidden">
            <AnimatePresence >
                <motion.div
                    className="flex gap-1"
                    animate={{ x: -page * (width - 45)}} // It moves in multiples of the width of the screen minus an adjustment
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {images.map((src, index) => (
                        <img key={index} src={src} className="w-full h-auto rounded-[15px] object-cover"/>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex gap-6">
                <button 
                    className="rounded-full border-grey border-2 w-[42px] h-[42px] flex items-center justify-center disabled:opacity-50" 
                    onClick={prevImage}
                    disabled={page === 0}
                >
                    <ArrowLongLeftIcon className="h-6 w-6"/>        
                </button>

                <button  
                    className="rounded-full border-grey border-2 w-[42px] h-[42px] flex items-center justify-center disabled:opacity-50" 
                    onClick={nextImage}
                    disabled={page === images.length - 1}
                >
                    <ArrowLongRightIcon className="h-6 w-6"/>        
                </button>
            </div>
        </div>
    )
}

export {
    MobileCarousel
}