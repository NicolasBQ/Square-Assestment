import { Types } from "./Types"

const PlansByBusiness = () => {
    return (
        <section className="pt-16 px-6 lg:px-20 xl:px-24 2xl:px-48" id="types">
            <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Plans by business type</h2>
            <Types />
        </section>
    )
}

export {
    PlansByBusiness
}