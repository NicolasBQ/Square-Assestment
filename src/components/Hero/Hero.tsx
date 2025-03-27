import hero_desktop from '../../assets/header_img_desktop.png';
import { MobileCarousel } from './MobileCarousel';
import { CallToAction } from './CallToActions';

const Hero = () => {
    return (
        <section>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:py-7 lg:w-full">
                <h1 className="text-4xl font-medium text-secondary lg:text-6xl lg:w-1/2">Priced to help you grow and thrive.</h1>
                <p className=" font-normal text-secondary text-lg lg:text-2xl lg:w-1/3">
                    Start for free and add tools as you need them, or explore our plans to get everything you need at once.
                </p>
            </div>

            <div className='mt-7'>
                <img src={hero_desktop} alt="Square Products" className='hidden w-full object-cover sm:block sm:rounded-[20px]'/>
                <MobileCarousel />
            </div>

            <CallToAction />
        </section>
    )
}

export {
    Hero
}