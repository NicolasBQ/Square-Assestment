const processingInfo = [
    {
        title: 'In person',
        description: 'When a customer taps, dips, or swipes their card in person. Visa, Mastercard, Discover, and American Express all cost the same rate.',
        pricing: '2.6% + 10¢ per transaction'
    },
    {
        title: 'Online',
        description: 'When a customer makes a purchase through your Online Store or eCommerce API.',
        pricing: '2.9% + 30¢ per transaction'
    },
    {
        title: 'Manually entered',
        description: 'When you manually key in your customers card details or use a card on file.',
        pricing: '3.5% + 15¢ per transaction'
    },
    {
        title: 'Invoices',
        description: 'Let customers pay invoices online, in person, or from their phone with a credit card, Apple Pay, Google Pay, or ACH bank transfer.',
        pricing: '3.3% + 30¢ per transaction'
    },
]

const ProcessingInfo = () => {
    return (
        <div className="flex flex-col gap-10 justify-center mt-14 xl:flex-row xl:h-[240px]">
            {processingInfo.map((info, index) => (
                <article key={index} className="flex flex-col justify-between gap-5 xl:w-1/4">
                    <div>
                        <h4 className="text-xl font-medium text-secondary lg:text-2xl">{info.title}</h4>
                        <p className="font-normal mt-5 text-secondary text-base lg:text-lg">{info.description}</p>
                    </div>
                    <p className="font-bold text-secondary text-base lg:text-lg">{info.pricing}</p>
                </article>
            ))}
        </div>
    )
}

export {
    ProcessingInfo
}