import restaurant_img from '../../assets/restaurants.png';
import retail_img from '../../assets/retail.png';
import appointment_img from '../../assets/appointments.png';

const types = [
    {
        title: 'Restaurants',
        img: restaurant_img,
        description: 'Run your restaurant more efficiently. Use menus and table management for front of house, and kitchen displays and delivery for back of house.',
        features: ['Advanced POS features', 'Square KDS', 'Square Kiosk']
    },
    {
        title: 'Retail',
        img: retail_img,
        description: 'All the retail tools you need for selling online and in-store, like inventory management, returns and exchanges, and reports.',
        features: ['Advanced inventory tools', 'Advanced retail reports', 'Square Team Management']
    },
    {
        title: 'Appointments',
        img: appointment_img,
        description: 'Stay a step ahead of schedule — whether you run a salon or a construction business — with easy online booking, automatic appointment reminders, and staff management tools.',
        features: ['Customizable online booking site', 'Automated appointment reminders', 'Square Team Management']
    },
]


const Types = () => {
    return (
        <div className='flex flex-col gap-8 mt-14 xl:flex-row'>
            {types.map((type, index) => (
                <article key={index} className='flex flex-col justify-between gap-4 xl:w-[380px] xl:h-[620px]'>
                    <div className='h-[180px] w-full lg:h-[290px]'>
                        <img src={type.img} alt={type.title} className='border-radius object-cover w-full h-full'/>
                    </div>
                    <div className='flex flex-col h-full justify-between'>
                        <div>
                            <h4 className="text-2xl font-medium text-secondary lg:text-2xl">{type.title}</h4>
                            <p className='mt-3 font-normal text-secondary text-base lg:text-lg'>{type.description}</p>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li className='font-normal text-secondary text-base lg:text-lg'>• {type.features[0]}</li>
                            <li className='font-normal text-secondary text-base lg:text-lg'>• {type.features[1]}</li>
                            <li className='font-normal text-secondary text-base lg:text-lg'>• {type.features[2]}</li>
                        </ul>
                    </div>
                    <button className="text-base text-start text-accent font-semibold cursor-pointer mt-3">
                        See Plans →
                    </button>
                      
                </article>
            ))}
        </div>
    )
}

export {
    Types
}  