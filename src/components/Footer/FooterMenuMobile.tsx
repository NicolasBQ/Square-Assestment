import { ChevronDownIcon } from "@heroicons/react/16/solid";

const footerOptions = ['Products', 'Business Types', 'Resources', 'Contact', 'Square'];

const FooterMenuMobile = () => {
    return (
        <nav className="mt-14 h-full flex flex-col justify-center lg:hidden">
            <ul className="flex flex-col gap-2 items-center justify-center">
                {footerOptions.map((type, index) => (
                    <li key={index} className="group text-dark-grey flex items-center gap-1 text-base font-medium cursor-pointer hover:text-dark-grey">
                        {type}
                        <ChevronDownIcon className='rotate-0 h-3 w-3 mt-[0.15rem] font-bold transition 3s ease-in-out group-hover:rotate-180'/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export {
    FooterMenuMobile
}