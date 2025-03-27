import { ArrowDownIcon } from "@heroicons/react/16/solid"

const ctas = [
    {
        id: 1,
        title: 'See plans'
    },
    {
        id: 2,
        title: 'Explore all tools'
    },
    {
        id: 3,
        title: 'Processing fees'
    }, 
    {
        id: 4,
        title: 'By business type'
    },
    {
        id: 5,
        title: 'Shop hardware'
    }
]

const CallToAction = () => {
    return (
        <div className="flex flex-col gap-2 mt-14 lg:flex-row lg:gap-4">
            {ctas.map((cta) => (
                <button key={cta.id} className="w-full rounded-[25px] border-1 border-primary py-2.5 font-semibold text-base text-secondary flex items-center justify-center gap-1 lg:text-lg lg:cursor-pointer button">
                    {cta.title}
                    <ArrowDownIcon className="h-3 w-3 lg:w-3.5 lg:h-3.5 lg:mt-1"/>
                </button>
            ))}
        </div>
    )
}

export {
    CallToAction
}