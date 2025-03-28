import { Accordion } from "./Accordion"

const Faq = () => {
    return (
        <section className="pt-16 px-6 lg:px-20 xl:px-24 2xl:px-48 ">
            <div className="w-full lg:flex lg:items-start lg:justify-between">
                <h2 className="text-3xl font-medium text-secondary lg:text-5xl lg:w-1/2">FAQ</h2>
                <Accordion />
            </div>
        </section>
    )
}

export {
    Faq
}