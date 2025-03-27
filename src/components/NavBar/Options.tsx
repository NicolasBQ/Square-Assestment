import { UserIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"


const Options = () => {
    return (
        <nav className="p-6 h-full flex flex-col justify-center">
            <ul className="space-y-4 lg:flex lg:items-center lg:space-y-0 lg:space-x-4">
                <li className="text-sm font-semibold font-sans color-primary flex items-center gap-2 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer">
                    <UserIcon className='h-4 w-4 lg:hidden' />
                    Sign In
                </li>
                <li className="text-sm font-semibold font-sans color-primary flex items-center gap-2 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer">
                    <QuestionMarkCircleIcon className='h-4 w-4 lg:hidden' />
                    Support
                </li>
                <li className="text-sm font-semibold font-sans color-primary flex items-center gap-2 lg:text-base lg:items-center lg:gap-1 lg:cursor-pointer">
                    <ShoppingBagIcon className='h-4 w-4 lg:hidden' />
                    Shop
                </li>
            </ul>
        </nav>
    )
}

export {
    Options
}