const items = ['Do not Share My Personal Information', 'Privacy Notice', 'Security', 'Terms of Service', 'Government', 'Licenses', 'Square Capital, LLC Licenses', 'Consumer Health Privacy', 'Hardware Compliance Certifications', 'Block, Inc']

const FinalFooter = () => {
    return(
        <section className="mt-14 flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:justify-between">
            <p className="text-base text-dark-grey mt-7 lg:mt-0">© 2024 Block, Inc</p>

            <ul className="flex flex-col items-center gap-2 lg:items-end">
                {items.map((item, index) => (
                    <li key={index} className="text-white text-base font-normal cursor-pointer">
                        {item }
                    </li>
                ))}
            </ul>
        </section>
    )
}   

export {
    FinalFooter
}