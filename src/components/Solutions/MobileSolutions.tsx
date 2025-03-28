import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { solutions_data } from "./solutions_data";

import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/16/solid";


const MobileSolutions = () => {
    const [page, setPage] = useState(0);

    const nextImage = () => {
        if(page < solutions_data.length - 1) {  
            setPage(page + 1); 
        }
    }

    const prevImage = () => {
        if(page > 0) {
            setPage(page - 1); 
        }
    }

    return (
        <div className="relative overflow-hidden ">
            <AnimatePresence>
                <motion.div
                    className="flex gap-1"
                    animate={{ x: -page * 300}} // It moves in multiples of the width of the screen minus an adjustment
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {solutions_data.map((solution, index) => (
                        <article key={index} className='w-[300px] h-[380px] flex flex-col shrink-0 bg-secondary-grey rounded-3xl'>
                            <div>
                                <img src={solution.img} alt={solution.title} className="h-full w-full object-cover"/>
                            </div>
                            <div className='px-6 flex flex-col h-full justify-start'>
                                <p className='text-base text-start text-accent font-semibold cursor-pointer'>{solution.title}</p>
                                <p className='text-base font-normal text-dark-grey'>{solution.pricing}</p>
                            </div>
                        </article>
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
                    disabled={page === solutions_data.length - 1}
                >
                    <ArrowLongRightIcon className="h-6 w-6"/>        
                </button>
            </div>
        </div>
    )
}

export {
    MobileSolutions
}