import { useState } from 'react';
import { Square } from './Square';
import { ShoppingCart } from './ShoppingCart';
import { MobileMenu } from './MobileMenu';


const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Square />
            <div className='flex items-center gap-0'>
                <ShoppingCart />
                <div 
                    className='p-[20px] relative z-[30] ' id='burger-menu'
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
            <MobileMenu isOpen={isMenuOpen} />
        </>
    )
}




export {
    MobileNavbar
}