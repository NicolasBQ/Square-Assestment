import { ProcessingInfo } from "./ProcessingInfo"

const Proccessing = () => {
    return (
        <section className="py-16 bg-secondary-blue px-6 lg:px-20 xl:px-24 2xl:px-48" id="processing">
            <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Proccessing fees</h2>
            <ProcessingInfo />

            <button className="text-xl text-center text-accent font-semibold cursor-pointer underline mt-14">
                How our rates work →
            </button>
        </section>
    )
}

export {
    Proccessing
}