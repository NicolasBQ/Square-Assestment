import { useState } from "react";
import { motion } from "motion/react";

const faqs = [
    { 
        question: "How much will I pay in fees?", 
        answer: "Use our fee calculator to calculate your rate." 
    },
    { 
        question: "Can I chage my plan after I choose one?", 
        answer: "Yes. You can upgrade, downgrade, or cancel your plan at any time." 
    },
    { 
        question: "How fast will I get paid?", 
        answer: "With Square Transfers, you can send your money to an external bank account in one to two business days for free or instantly for a fee. With Square Checking, get your money from Square sales instantly for free." 
    },
    { 
        question: "Can I take any type of credit card with Square?", 
        answer: "You can accept every major card — Visa, Mastercard, American Express, and Discover — all for the same rate. You can also take cash, checks, and Square gift cards." 
    },
    { 
        question: "Do I need to purchase hardware to use Square?", 
        answer: "No, we have an array of tools to help you run your business that do not require you to purchase Square hardware." 
    },
    { 
        question: "Can you recommend the best solution for my business?", 
        answer: "Square has the tools that connect every side of your business. Discover the best business software solutions for your unique needs." 
    },
  ];

const Accordion = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };
  
    return (
        <div className="w-full mt-7 mx-auto lg:w-3/4 lg:mt-0">
            {faqs.map((faq, index) => (
                <div key={index} className="border-y-[1px] border-gray-300">
                    <button
                        className="w-full flex justify-between items-center py-4 cursor-pointer focus:outline-none"
                        onClick={() => toggleItem(index)}
                    >
                        <p className="w-3/4 text-start text-lg font-semibold lg:text-xl lg:font-normal">
                            {faq.question}
                        </p>
                        <motion.span
                            animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl text-accent font-black"
                        >
                            {openIndexes.includes(index) ? "−" : "+"}
                        </motion.span>
                    </button>
        
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: openIndexes.includes(index) ? "auto" : 0,
                            opacity: openIndexes.includes(index) ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-base text-primary lg:text-lg">{faq.answer}</div>
                    </motion.div>
                </div>
            ))}
      </div>
    );
}

export {
    Accordion
}