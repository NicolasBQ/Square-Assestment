import { useState, useEffect } from "react";
import { Categories } from "./Categories";
import { ToolsList } from "./ToolsList";
import { Tool } from "../../types";
import { squareData } from "../../square_data";

const Tools = () => {
    const [filter, setFilter] = useState('All');
    const [tools, setTools] = useState<Array<Tool>>(squareData);

    useEffect(() => {
        if(filter === 'All') {
            setTools(squareData)
        } else {
            const toolArr = [...squareData].filter(item => item.categories.includes(filter || 'All'));
            setTools(toolArr);
        };

    }, [filter])

    const handleFilter = (value: string) => setFilter(value)

    return (
        <section className="relative py-16 px-6 lg:px-20 xl:px-24 2xl:px-48">
             <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Tools to mix and match</h2>
             <Categories filter={filter} handleFilter={handleFilter}/>
             <ToolsList tools={tools}/>
        </section>
    )
}

export {
    Tools    
}