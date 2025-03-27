interface PlanCardProps {
    planInfo: {
        title: string,
        description: string,
        price: string,
        btnMessage: string,
        blueBtn: boolean
    }
}


const PlanCard = ({ planInfo }: PlanCardProps) => {
    return (
        <article className="rounded-2xl border-1 border-grey p-6 h-[410px] lg:w-[380px] lg:h-[456px]">
            <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-normal text-secondary lg:text-4xl">{planInfo.title}</h3>
                    <p className="font-normal text-secondary text-base lg:text-lg">
                        {planInfo.description}
                    </p>
                </div>

                <div>
                    <div className="flex items-end">
                        <p className="text-4xl font-normal -translate-y-2 lg:text-5xl">
                            {planInfo.price}
                        </p>
                        <span className={`${planInfo.title === 'Premium' ? 'hidden' : 'block text-2xl font-normal'}`}>/mo.</span>
                    </div>
                    <p className="text-base font-light">+ processing fees</p>
                    <button 
                        className={`${planInfo.blueBtn ? ' bg-accent text-white ' : 'bg-white border-1 border-accent text-accent'} mt-8 w-full py-3 text-base rounded-md font-medium cursor-pointer hover:opacity-85`}
                    >{planInfo.btnMessage}</button>
                </div>
            </div>
            
        </article>
    )
}

export {
    PlanCard
}