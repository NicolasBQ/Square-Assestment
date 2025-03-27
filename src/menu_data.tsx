import { UserIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const bussinessTypes = [
    {
        id: 1,
        name: 'Restaurants',
    },
    {
        id: 2,
        name: 'Retail',
    },
    {
        id: 3,
        name: 'Beauty',
    },
    {
        id: 4,
        name: 'Services',
    },
    {
        id: 5,
        name: 'Products',
    },
    {
        id: 6,
        name: 'Pricing',
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
    bussinessTypes,
    options
}