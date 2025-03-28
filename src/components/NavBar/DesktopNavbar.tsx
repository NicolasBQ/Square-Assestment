import { useState } from "react";
import { motion } from "motion/react";
import { Square } from "./Square";
import { ShoppingCart } from "./ShoppingCart";
import { menuOptions, options } from "../../menu_data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";



const DesktopNavbar = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            <div className="flex items-center gap-4 relative">
                <Square />
                <nav className="p-6 h-full flex flex-col justify-center">
                    <ul className="flex items-center space-y-0 space-x-4">
                        {menuOptions.map((type, index) => (
                            <li key={index} className="group text-base font-semibold cursor-pointer hover:text-dark-grey" onMouseEnter={() => setOpenIndex(index)} onMouseLeave={() => setOpenIndex(null)}>
                                <div className="flex items-center gap-1 ">
                                    {type.type}
                                    <ChevronDownIcon className={`${type.type === 'Pricing' ? 'hidden' : 'rotate-0 h-3 w-3 mt-[0.15rem] font-bold'} transition 3s ease-in-out group-hover:rotate-180`} />
                                </div>

                                {type.type !== 'Pricing' && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: openIndex === index ? "auto" : 0,
                                            opacity: openIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.05, ease: "easeInOut" }}
                                        className="absolute w-full p-4 shadow-md bg-white overflow-hidden flex flex-col gap-2"
                                    >
                                        {type.items.map((item, index) => (
                                            <li key={index} className="hover:text-black">{item}</li>
                                        ))}
                                    </motion.ul>

                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center ">
                <nav className="p-6 h-full flex flex-col justify-center">
                    <ul className="flex items-center space-y-0 space-x-4">
                        {options.map((option) => (
                            <li key={option.id} className="font-semibold color-primary flex items-center text-base gap-1 cursor-pointer hover:text-dark-grey">
                                {option.icon}
                                {option.name}
                            </li>
                        ))}
                    </ul>
                </nav>
                <ShoppingCart />
            </div>
        </>
    )
}

export {
    DesktopNavbar
}