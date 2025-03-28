import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const footerOptions = [
    {
        type: 'Products',
        items: ['Commerce', 'Point of Sale', 'Payments', 'Online', 'Kiosk', 'Invoices', 'Customers', 'Marketing', 'Loyalty', 'Customer Directory', 'Banking', 'Staff', 'Payroll', 'Advanced access', 'Buy Now, Pay Later', 'Hardware', 'Business software & solutions']
    },
    {
        type: 'Business Types',
        items: ['Food & Beverage', 'Quick Service', 'Full Service', 'Fast Casual', 'Bars & Breweries', 'Retail', 'Beauty Salon', 'Barbershop', 'Hair Salon', 'Nail Salon', 'Day Spa', 'Tatoo & Piercing', 'Med spa', 'Fitness', 'Professional Services', 'Home & Repair', 'Large Businesses', 'Franchises']
    },
    {
        type: 'Resources',
        items: ['Pricing', 'Why Square?', 'Testimonials', 'The Bottom Line', 'Sales', 'Support', 'Seller Community', 'Developer Platform', 'Merchant Services', 'Rent Hardware']
    },
    {
        type: 'Contact',
        items: ['Customer support: 1 (855) 700-6000', 'Sales: 1 (800) 470-1673']
    },
    {
        type: 'Square',
        items: ['About', 'Press & Media', 'Careers', 'Referrals', 'Partners']
    }
];

const FooterMenuMobile = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };

    return (
        <nav className="mt-14 h-full flex flex-col justify-center lg:hidden">
            <ul className="flex flex-col gap-2 items-center justify-center">
                {footerOptions.map((option, index) => (
                    <li key={index} className="group text-dark-grey  gap-1 text-base font-medium cursor-pointer hover:text-dark-grey" onClick={() => toggleItem(index)}>
                        <div className="flex items-center justify-center">
                            {option.type}
                            <ChevronDownIcon className={`${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'} h-3 w-3 mt-[0.15rem] font-bold transition 3s ease-in-out`} />
                        </div>

                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: openIndexes.includes(index) ? "auto" : 0,
                                opacity: openIndexes.includes(index) ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden flex flex-col gap-2 items-center mt-2"
                        >
                            {option.items.map((item, index) => (
                                <li className="text-white text-base font-medium cursor-pointer" key={index}>
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export {
    FooterMenuMobile
}