import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqsData as faqs } from "../../data/faqsData";

const FAQs = () => {

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8 text-left">
          Frequently Asked Questions
        </h2>
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            {category.questions.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 mb-4 pb-4"
              >
                <button
                  onClick={() => toggleQuestion(`${catIndex}-${index}`)}
                  className="w-full flex justify-between items-center text-left text-lg py-2"
                >
                  {item.question}
                  {activeQuestion === `${catIndex}-${index}` ? (
                    <FaChevronUp className="text-gray-600" />
                  ) : (
                    <FaChevronDown className="text-gray-600" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height:
                      activeQuestion === `${catIndex}-${index}` ? "auto" : 0,
                    opacity: activeQuestion === `${catIndex}-${index}` ? 1 : 0,
                  }}
                  className="overflow-hidden text-gray-600 text-sm pl-4 mt-2"
                >
                  {item.answer}
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

