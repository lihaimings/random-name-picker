"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is the selection truly random?",
    answer: "Yes! We use the Web Crypto API to generate cryptographically secure random numbers, ensuring fair and unbiased selection every time."
  },
  {
    question: "Are my names stored anywhere?",
    answer: "Your names are stored only in your browser's local storage. We never send your data to any server. Your privacy is completely protected."
  },
  {
    question: "Can I use this for giveaways?",
    answer: "Absolutely! Random Name Picker is perfect for giveaways, contests, and drawings. The pick history feature helps you keep records of winners."
  },
  {
    question: "What does 'Remove after picking' do?",
    answer: "When enabled, each picked name is automatically removed from the list. This is useful for elimination-style drawings where each person can only win once."
  },
  {
    question: "How do I add multiple names at once?",
    answer: "You can paste a list of names separated by commas, semicolons, or new lines. You can also import names from a text file using the Import button."
  },
  {
    question: "Will my names be saved if I close the browser?",
    answer: "Yes! Your names are automatically saved in your browser's local storage. When you return, your list will still be there."
  },
  {
    question: "Is there a limit to how many names I can add?",
    answer: "There's no hard limit, but for best performance, we recommend keeping your list under 1000 names. The tool works great for typical use cases."
  },
  {
    question: "Can I export my name list?",
    answer: "Yes! Click the Export button to download your names as a text file. This is useful for backup or sharing your list."
  }
];

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-gray-50">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-custom py-16 max-w-3xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <HelpCircle className="w-8 h-8 text-slate-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about Random Name Picker
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQAccordion
            key={index}
            item={faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
