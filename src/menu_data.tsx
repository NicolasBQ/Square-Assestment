import { UserIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const menuOptions = [
    {
        type: 'Restaurants',
        items: ['Coffe shops', 'Full service']
    },
    {
        type: 'Retail',
        items: ['Clothing', 'Home & gift']
    },
    {
        type: 'Beauty',
        items: ['Beauty salon', 'Nail Salon']
    },
    {
        type: 'Services',
        items: ['Home & commercial', 'Autootive services']
    },
    {
        type: 'Pricing',
        items: []
    }
]

const options = [
    {
        id: 1,
        name: 'Sign In',
        icon: <UserIcon className='h-4 w-4 lg:hidden' />
    },
    {
        id: 2,
        name: 'Support',
        icon: <QuestionMarkCircleIcon className='h-4 w-4 lg:hidden' />
    },
    {
        id: 3,
        name: 'Shop',
        icon: <ShoppingBagIcon className='h-4 w-4 lg:hidden' />
    },
]

export {
    menuOptions,
    options
}