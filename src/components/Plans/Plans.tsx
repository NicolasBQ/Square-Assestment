import { PlanCard } from "./PlanCard";
import { Included } from "./Included";

const plans = [
    {
        title: 'Free',
        description: 'Sell in person, online, over the phone, or out in the field. No setup fees or monthly fees — only pay when you take a payment.',
        price: '$0',
        btnMessage: 'Get started free',
        blueBtn: true
    },
    {
        title: 'Plus',
        description: 'Get advanced features designed specifically for restaurants, retailers, or appointment-based businesses. Upgrade when you want to, cancel anytime.',
        price: '$29+',
        btnMessage: 'See packages below ↓',
        blueBtn: true
    },
    {
        title: 'Premium',
        description: 'Build a bespoke plan that meets the complexity of your operations. Custom processing rates may be available pending eligibility.',
        price: 'Custom',
        btnMessage: 'Contact Sales',
        blueBtn: false
    }
]

const Plans = () => {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Plans for every stage</h2>

            <div className="w-full mt-7 flex flex-col gap-8 lg:flex-row lg:justify-center">
                {
                    plans.map((plan, index) => (
                        <PlanCard planInfo={plan} key={index}/>
                    ))
                }
            </div>

            <Included />
        </section>
    )
}

export {
    Plans
}