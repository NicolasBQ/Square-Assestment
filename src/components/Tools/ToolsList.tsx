import { useState } from "react";
import { Tool } from "../../types";

interface ProductListProps {
    tools: Array<Tool>
}

const ToolsList = ({ tools }: ProductListProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpand = () => setIsExpanded(!isExpanded)

    return (
        <>
            <ul className="w-full mt-7 flex flex-col gap-8 xl:hidden">
                {tools.slice(0, isExpanded ? tools.length : 3).map((tool, index) => (
                    <li key={index} className="flex flex-col justify-between rounded-2xl border-1 border-grey p-6 h-[248px]">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-medium text-accent ">{tool.title} →</h3>
                            <p className="font-normal text-secondary text-base ">
                                {tool.description}
                            </p>
                        </div>

                        <p className="font-semibold text-secondary text-base">
                            {tool.pricing}
                        </p>
                    </li>
                ))}
            </ul>
        
            <ul className="hidden w-full mt-14 flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:gap-8">
                {tools.slice(0, isExpanded ? tools.length : 6).map((tool, index) => (
                    <li key={index} className="flex flex-col justify-between rounded-2xl border-1 border-grey p-6 h-[248px] lg:w-[380px] lg:h-[300px]">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-medium text-accent lg:text-3xl">{tool.title} →</h3>
                            <p className="font-normal text-secondary text-base lg:text-lg">
                                {tool.description}
                            </p>
                        </div>

                        <p className="font-semibold text-secondary text-base lg:text-lg">
                            {tool.pricing}
                        </p>
                    </li>
                ))}
            </ul>

            {(!isExpanded && tools.length > 3) && (
                <div className="absolute bottom-10 left-0 w-full h-50 bg-gradient-to-t from-white to-transparent pointer-events-none xl:hidden"></div>
            )}

            {(!isExpanded && tools.length > 6) && (
                <div className="hidden absolute bottom-10 left-0 w-full h-50 bg-gradient-to-t from-white to-transparent pointer-events-none xl:block"></div>
            )}

            {
                (tools.length > 3) && (
                    <button 
                        onClick={toggleExpand} 
                        className="mt-5 flex items-center justify-center gap-2 cursor-pointer relative w-full xl:hidden"
                    >
                        <span className="before:content-[''] before:block before:w-[20%] before:border-t before:border-gray-300 before:absolute before:left-0 before:top-1/2 after:content-[''] after:block after:w-[20%] after:border-t after:border-gray-300 after:absolute after:right-0 after:top-1/2 lg:before:w-[40%] lg:after:w-[40%]">
                        </span>

                        <p className="text-xl p-2 rounded-sm text-center text-accent font-semibold hover:bg-blue-50">
                            {isExpanded ? "− Collapse tools" : "+ Expand all tools"}
                        </p>
                    </button>
                )
            }

            {
                (tools.length > 6) && (
                    <button 
                        onClick={toggleExpand} 
                        className="hidden mt-5 items-center justify-center gap-2 cursor-pointer relative w-full xl:flex"
                    >
                        <span className="before:content-[''] before:block before:w-[20%] before:border-t before:border-gray-300 before:absolute before:left-0 before:top-1/2 after:content-[''] after:block after:w-[20%] after:border-t after:border-gray-300 after:absolute after:right-0 after:top-1/2 lg:before:w-[40%] lg:after:w-[40%]">
                        </span>

                        <p className="text-xl p-2 rounded-sm text-center text-accent font-semibold hover:bg-blue-50">
                            {isExpanded ? "− Collapse tools" : "+ Expand all tools"}
                        </p>
                    </button>
                )
            }

            
        
        </>
    )
}

export {
    ToolsList
}