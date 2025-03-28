import { useState } from "react";
import { Categories } from "./Categories";
import { ToolsList } from "./ToolsList";
import { Tool } from "../../types";
import { squareData } from "../../square_data";

const Tools = () => {
    const [filter, setFilter] = useState('All');
    const [tools, _setTools] = useState<Array<Tool>>(squareData);

    const handleFilter = (value: string) => setFilter(value)

    return (
        <section className="relative pt-16">
             <h2 className="text-3xl font-medium text-secondary lg:text-5xl">Tools to mix and match</h2>
             <Categories filter={filter} handleFilter={handleFilter}/>
             <ToolsList tools={tools}/>
        </section>
    )
}

export {
    Tools    
}