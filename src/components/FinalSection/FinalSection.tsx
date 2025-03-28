import final_section from '../../assets/final_section.png'

const FinalSection = () => {
    return (
        <section className="pt-16 px-6 lg:px-20 xl:px-24 2xl:px-48 lg:flex lg:mt-14">
            <div className='flex flex-col gap-6'>
                <div>
                    <h2 className='text-4xl w-3/4 font-medium text-secondary lg:text-6xl'>Start selling with Square.</h2>
                    <p className='text-lg text-primary mt-4 lg:text-2xl'>Set up is fast and secure.</p>
                </div>
                <div className='flex w-3/4 gap-2'>
                    <button 
                        className=' bg-accent text-white w-full py-3 text-base rounded-md font-medium cursor-pointer hover:opacity-85'
                    >
                        Get started
                    </button>

                    <button 
                        className='bg-white border-1 border-accent text-accent w-full py-3 text-base rounded-md font-medium cursor-pointer hover:opacity-85' 
                    >
                        Contact us
                    </button>
            
                </div>
            </div>
            <div className='mt-14 lg:mt-0'>
                <img src={final_section} alt="Start selling with Square" className='rounded-2xl'/>
            </div>
        </section>
    )
}

export {
    FinalSection
}