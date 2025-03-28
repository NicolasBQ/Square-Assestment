import { solutions_data } from "./solutions_data";

const SolutionCards = () => {
    return (
        <>
            {solutions_data.map((solution, index) => (
                <article key={index} className='flex flex-col bg-secondary-grey rounded-3xl lg:h-[400px] xl:h-[460px] xl:w-[380px]'>
                    <div>
                        <img src={solution.img} alt={solution.title} />
                    </div>
                    <div className='px-8 flex flex-col h-full justify-start'>
                        <p className='text-base text-start text-accent font-semibold cursor-pointer'>{solution.title}</p>
                        <p className='text-base font-normal text-dark-grey'>{solution.pricing}</p>
                    </div>
                </article>
            ))}
        </>
    )
}

export {
    SolutionCards
}
