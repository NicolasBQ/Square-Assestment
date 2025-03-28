import { SolutionCards } from "./SolutionCards";
import { MobileSolutions } from "./MobileSolutions";

const Solutions = () => {
    return (
        <section className="pt-16 px-6 lg:px-20 xl:px-24 2xl:px-48" id="hardware">
            <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Flexible hardware solutions</h2>
            <button className="text-base text-start text-accent font-semibold cursor-pointer mt-3">
                Explore all hardware and accessories →
            </button>

            <div className="hidden mt-7 xl:mt-14 lg:flex gap-8">
                <SolutionCards />
            </div>
            <div className="mt-7 lg:hidden">
                <MobileSolutions />
            </div>
        </section>
    )
}

export {
    Solutions
}