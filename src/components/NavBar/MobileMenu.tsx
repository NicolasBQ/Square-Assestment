import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { menuOptions, options } from "../../menu_data";

// Animation variants for the menu and items
// These variants define the initial, animate, and exit states for the menu and its items
// The `closed` state is the initial state when the menu is not open
// The `open` state is the state when the menu is open
// The `transition` property defines the animation properties such as duration, damping, and stiffness
// The `staggerChildren` property defines the delay between the animations of the child elements
// The `delayChildren` property defines the delay before the child elements start animating
// The `staggerDirection` property defines the direction of the stagger animation
// The `duration` property defines the duration of the animation
// The `opacity` property defines the opacity of the element    
const menuVariants = {
    closed: {
        y: '-100%',
        opacity: 0,
        transition: {
            type: 'spring',
            damping: 40,
            stiffness: 300,
            staggerChildren: 0.015, 
            staggerDirection: -1 ,
            when: 'afterChildren', // Wait for children to animate before closing
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 40,
            stiffness: 300,
            staggerChildren: 0.015, 
            delayChildren: 0.2,
        }
    }
}

const itemVariants = {
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.1,
        }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    }
}

interface MobileMenuProps {
    isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className='fixed top-0 left-0 w-full h-screen bg-white z-[20]'
                >
                    <div className='relative top-[15%]'>
                        {/* BussinessTypes  */}
                        <nav className='p-6 h-full flex flex-col justify-center'>
                            <motion.ul className='space-y-4'>
                                {menuOptions.map((type, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className='text-lg font-bold  color-primary flex items-end gap-0'
                                    >
                                        {type.type}
                                        <ChevronDownIcon className={`${type.type == 'Pricing' ? 'hidden' : 'h-6 w-6 rotate-270'}`} />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                        {/* Options */}
                        <nav>
                            <motion.ul className='p-6 h-full flex flex-col justify-center space-y-4'>
                                {options.map((option) => (
                                    <motion.li
                                        key={option.id}
                                        variants={itemVariants}
                                        className='text-sm font-semibold color-primary flex items-center gap-2 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer'
                                    >
                                        {option.icon}
                                        {option.name}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export {
    MobileMenu
}