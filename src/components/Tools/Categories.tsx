const categories = ['All', 'Free', 'Commerce', 'Customers', 'Banking', 'Staff'];

interface CategoriesProps {
    filter: string,
    handleFilter: (value: string) => void
}

const Categories = ({ filter, handleFilter }: CategoriesProps) => {
    

    return (
        <ul className="mt-7 flex flex-wrap gap-2 lg:mt-14">
            {categories.map((category, index) => (
                <li key={index}>
                    <button 
                        className={`${category === filter ? 'border-accent text-white bg-accent' : 'border-grey text-secondary' } rounded-[25px] border-1  py-2 px-7 font-normal text-base  lg:text-lg lg:cursor-pointer button`}
                        onClick={() => handleFilter(category)}
                    >
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export {
    Categories
}