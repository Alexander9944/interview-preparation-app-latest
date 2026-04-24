import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Modern Accordion Component
 */
const Accordion = ({ items, defaultOpen = null, className = '' }) => {
  const [openIndex, setOpenIndex] = React.useState(defaultOpen);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-neutral-200/50 rounded-lg overflow-hidden hover:border-primary-200/50 transition-colors duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50/50 transition-colors duration-300 font-medium text-neutral-900"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-neutral-600 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 border-t border-neutral-200/50 bg-neutral-50/30 text-neutral-700 animate-slide-down">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
