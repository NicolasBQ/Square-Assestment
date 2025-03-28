const products = ['Commerce', 'Point of Sale', 'Payments', 'Online', 'Kiosk', 'Invoices', 'Customers', 'Marketing', 'Loyalty', 'Customer Directory', 'Banking', 'Staff', 'Payroll', 'Advanced access', 'Buy Now, Pay Later', 'Hardware', 'Business software & solutions'];

const bussinessTypes = ['Food & Beverage', 'Quick Service', 'Full Service', 'Fast Casual', 'Bars & Breweries', 'Retail', 'Beauty Salon', 'Barbershop', 'Hair Salon', 'Nail Salon', 'Day Spa', 'Tatoo & Piercing', 'Med spa', 'Fitness', 'Professional Services', 'Home & Repair', 'Large Businesses', 'Franchises'];

const resources = ['Pricing', 'Why Square?', 'Testimonials', 'The Bottom Line', 'Sales', 'Support', 'Seller Community', 'Developer Platform', 'Merchant Services', 'Rent Hardware'];

const contact = ['Customer support: 1 (855) 700-6000', 'Sales: 1 (800) 470-1673']

const square = ['About', 'Press & Media', 'Careers', 'Referrals', 'Partners']


const FooterMenuDesktop = () => {
    return (
        <section className="hidden mt-14 lg:grid lg:grid-cols-4">
            <ul className="flex flex-col gap-2">
                <p className="text-dark-grey text-base font-medium mb-2">Products</p>
                {products.map((product, index) => (
                    <li className="text-white text-base font-medium cursor-pointer" key={index}>
                        {product}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col gap-2">
                <p className="text-dark-grey text-base font-medium mb-2">Business Types</p>
                {bussinessTypes.map((type, index) => (
                    <li className="text-white text-base font-medium cursor-pointer" key={index}>
                        {type}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col gap-2">
                <p className="text-dark-grey text-base font-medium mb-2">Resources</p>
                {resources.map((resource, index) => (
                    <li className="text-white text-base font-medium cursor-pointer" key={index}>
                        {resource}
                    </li>
                ))}
            </ul>

            <div>
                <ul className="flex flex-col gap-2">
                    <p className="text-dark-grey text-base font-medium mb-2">Contact</p>
                    {contact.map((item, index) => (
                        <li className="text-white text-base font-medium cursor-pointer" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    <p className="text-dark-grey text-base font-medium my-2">Square</p>
                    {square.map((item, index) => (
                        <li className="text-white text-base font-medium cursor-pointer" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export {
    FooterMenuDesktop
}