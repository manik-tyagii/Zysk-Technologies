import React, { useState } from "react";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  { question: "Can I change my plan later?", answer: "" },
  { question: "What is your cancellation policy?", answer: "" },
  { question: "Can other info be added to an invoice?", answer: "" },
  { question: "How does billing work?", answer: "" },
  { question: "How do I change my account email?", answer: "" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
   
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
        Frequently asked questions
      </h2>
      <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
        Everything you need to know about the product and billing.
      </p>

      
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="flex justify-between w-full py-3 px-5 sm:py-4 sm:px-6 text-left text-gray-900 font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-400 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && faq.answer && (
              <p className="px-5 pb-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

    
      <div className="mt-12 bg-gray-100 p-6 rounded-lg text-center">
        <div className="flex justify-center flex-wrap gap-2 mb-4">
        
          <img src="./assets/1.png" alt="Support Team" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-1" />
          <img src="./assets/2.png" alt="Support Team" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-1" />
          <img src="./assets/3.png" alt="Support Team" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-1" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">Still have questions?</h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <button className="mt-4 px-5 sm:px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FAQ;
