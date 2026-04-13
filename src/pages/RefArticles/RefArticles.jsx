import React from "react";

const aiTools = [
  {
    category: "Website",
    name: "WIX ADI",
    link: "https://www.wix.com/adi",
  },
  {
    category: "Automation",
    name: "BARDEEN",
    link: "https://www.bardeen.ai",
  },
  {
    category: "Prompts",
    name: "PROMPTLY",
    link: "https://www.promptly.ai",
  },
  {
    category: "Research",
    name: "PERPLUXITY",
    link: "https://www.perplexity.ai",
  },
  {
    category: "Video",
    name: "INVIDEO",
    link: "https://invideo.io",
  },
  {
    category: "Meeting",
    name: "FATHOM",
    link: "https://fathom.video",
  },
  {
    category: "Design",
    name: "Magnific.ai",
    link: "https://www.magnific.ai",
  },
  {
    category: "Copywriting",
    name: "Writesonic",
    link: "https://writesonic.com",
  },
  {
    category: "Startup",
    name: "webengage",
    link: "https://webengage.com",
  },
  {
    category: "Logo",
    name: "BrandMark",
    link: "https://brandmark.io",
  },
];

const RefArticles = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-32">
      <h1 className="text-3xl font-bold text-center mb-8">AI Tools Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {aiTools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-xl p-5 hover:bg-blue-50 transition-transform duration-300 hover:scale-105"
          >
            <p className="text-sm text-gray-500">{tool.category}</p>
            <h2 className="text-xl font-semibold text-blue-600">{tool.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RefArticles;
