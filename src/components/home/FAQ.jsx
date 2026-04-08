"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is web hosting and why do I need it?",
    answer: "Web hosting is a service that allows individuals and organizations to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet."
  },
  {
    question: "Do you offer free SSL certificates with your plans?",
    answer: "Yes! Every single one of our hosting plans includes a free Let's Encrypt SSL certificate. This ensures your website stays secure and helps with your SEO rankings."
  },
  {
    question: "What is NVMe SSD storage and how does it help?",
    answer: "NVMe (Non-Volatile Memory Express) is the newest and fastest storage technology. It is significantly faster than traditional SSDs and HDDs, resulting in lightning-fast loading speeds for your website."
  },
  {
    question: "How can I migrate my existing website to your servers?",
    answer: "We offer free professional website migration! Our technical team will handle the entire process for you with zero downtime. Just reach out to our support team after purchase."
  },
  {
    question: "Do you provide 24/7 technical support?",
    answer: "Absolutely. Our expert technical support team is available 24/7/365 through our ticketing system, live chat, and email to help you with any issues you may encounter."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 mb-4 uppercase">
            Support Center
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary opacity-60 text-[16px] font-light max-w-2xl mx-auto">
            Everything you need to know about our hosting services and how we help your business succeed.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? "bg-dark-secondary/50 border-[#3B82F6]/30 shadow-2xl shadow-blue-500/5" 
                : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? "text-[#3B82F6]" : "text-white"}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? "border-[#3B82F6] rotate-180 bg-[#3B82F6]/10" : "border-white/20"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={openIndex === index ? "text-[#3B82F6]" : "text-white/40"}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-secondary opacity-70 leading-relaxed font-light text-[15px]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
