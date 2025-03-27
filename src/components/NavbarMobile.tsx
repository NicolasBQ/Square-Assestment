import { useState } from 'react';
import logo from '../assets/square_logo.svg';
import shopping_cart from '../assets/shopping_cart.svg';
import { ChevronDownIcon } from '@heroicons/react/16/solid';


const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="px-[5px] py-[14px] border-b border-grey flex justify-between items-center shadow-sm">
                <div className='p-[10px]'>
                    <img src={logo} alt="Square Logo" />
                </div>

                <div className='flex items-center gap-0'>
                    <div className='p-[10px]'>
                        <img src={shopping_cart} alt="Shopping Cart SVG" />
                    </div>

                    <div 
                        className='p-[20px] relative z-[10] ' id='burger-menu'
                        onClick={toggleMenu}
                    >
                        <div className={`w-[22px] h-[2px] bg-secondary absolute top-[50%] left-1/2 -translate-x-1/2 transition-all duration-200 
                            ${isMenuOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-[8px]'}`}>
                        </div>
                        <div className={`w-[22px] h-[2px] bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200
                            ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                        </div>
                        <div className={`w-[22px] h-[2px] bg-secondary absolute top-[50%] left-1/2 -translate-x-1/2 transition-all duration-200
                            ${isMenuOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-[6px]'}`}>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isMenuOpen} />

        </>
    )
}

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-200 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="p-6 h-full flex flex-col justify-center">
                <ul className="space-y-4">
                    <p className='text-xs font-sans color-grey opacity-50 font-bold'>Business types</p>
                    <ul className="text-lg font-bold font-sans color-primary flex items-end gap-0">
                        Restaurants
                        <ChevronDownIcon className='h-6 w-6 rotate-270' />
                    </ul>
                    <ul className="text-lg font-bold font-sans color-primary flex items-end gap-0">
                        Retail
                        <ChevronDownIcon className='h-6 w-6 rotate-270' />
                    </ul>
                    <ul className="text-lg font-bold font-sans color-primary flex items-end gap-0">
                        Beauty
                        <ChevronDownIcon className='h-6 w-6 rotate-270' />
                    </ul>
                    <ul className="text-lg font-bold font-sans color-primary flex items-end gap-0" >
                        Services
                        <ChevronDownIcon className='h-6 w-6 rotate-270' />
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export {
    NavbarMobile
}