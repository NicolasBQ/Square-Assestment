import { CheckIcon } from "@heroicons/react/16/solid";

const includedList = [
    'Transfers as soon as the next business day',
    'Account takeover protection',
    'Fast online signup',
    'End-to-end encrypted payments',
    'Live phone support',
    'Free Square Point of Sale app',
    'Active fraud prevention',
    'Dispute management',
];


const Included = () => {
    return (
        <article className="mt-14">
            <h3 className="text-2xl font-medium text-secondary lg:text-4xl">Included with every Square account:</h3>
            <ul className="flex flex-col gap-5 mt-7 lg:grid lg:grid-cols-3 lg:grid-rows-3">
                {includedList.map((item, index) => (
                    <li key={index} className='flex gap-2 items-center'>
                        <CheckIcon className="w-4 h-4 text-accent"/>  
                        <p className="text-base text-primary lg:text-lg">{item}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export {
    Included
}