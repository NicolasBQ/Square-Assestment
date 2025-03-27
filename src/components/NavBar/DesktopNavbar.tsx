import { Square } from "./Square";
import { ShoppingCart } from "./ShoppingCart";
import { bussinessTypes, options } from "../../menu_data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const DesktopNavbar = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <Square />
                <nav className="p-6 h-full flex flex-col justify-center">
                    <ul className="flex items-center space-y-0 space-x-4">
                        {bussinessTypes.map((type) => (
                            <li key={type.id} className="flex items-center gap-1 text-base font-semibold cursor-pointer">
                                {type.name}
                                <ChevronDownIcon className={`${type.name === 'Pricing' ? 'hidden' : 'rotate-0 h-3 w-3 mt-[0.15rem] font-bold'}`} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center ">
                <nav className="p-6 h-full flex flex-col justify-center">
                    <ul className="flex items-center space-y-0 space-x-4">
                        {options.map((option) => (
                            <li key={option.id} className="font-semibold color-primary flex items-center text-base gap-1 cursor-pointer">
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