import React from 'react';

/**
 * Modern Tab Component
 */
const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex gap-1 border-b border-neutral-200/50 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-all duration-300 border-b-2 -mb-px ${
              activeTab === index
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
