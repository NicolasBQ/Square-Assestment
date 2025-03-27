import { ChevronDownIcon } from "@heroicons/react/16/solid"

const BussinessTypes = () => {
    return (
        <nav className="p-6 h-full flex flex-col justify-center">
            <ul className="space-y-4 lg:flex lg:items-center lg:space-y-0 lg:space-x-4">
                <p className='text-xs font-sans color-grey opacity-50 font-bold lg:hidden'>Business types</p>
                <li className="text-lg font-bold font-sans color-primary flex items-end gap-0 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer lg:font-semibold">	
                    Restaurants
                    <ChevronDownIcon className='h-6 w-6 rotate-270 lg:rotate-0 lg:h-4 lg:w-4' />
                </li>
                <li className="text-lg font-bold font-sans color-primary flex items-end gap-0 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer lg:font-semibold">	
                    Retail
                    <ChevronDownIcon className='h-6 w-6 rotate-270 lg:rotate-0 lg:h-4 lg:w-4' />
                </li>
                <li className="text-lg font-bold font-sans color-primary flex items-end gap-0 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer lg:font-semibold">	
                    Beauty
                    <ChevronDownIcon className='h-6 w-6 rotate-270 lg:rotate-0 lg:h-4 lg:w-4' />
                </li>
                <li className="text-lg font-bold font-sans color-primary flex items-end gap-0 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer lg:font-semibold">	 
                    Services
                    <ChevronDownIcon className='h-6 w-6 rotate-270 lg:rotate-0 lg:h-4 lg:w-4' />
                </li>
                <li className="text-lg font-bold font-sans color-primary flex items-end gap-0 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer lg:font-semibold">	 
                    Pricing
                </li>
            </ul>
        </nav>
    )
}

export {
    BussinessTypes
}