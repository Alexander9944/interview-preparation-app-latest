import React from "react";
import { Link } from "react-router-dom"; // Make sure React Router is installed and used in your app

const concepts = [
  "AWS",
  "AZURE",
  "VMware",
  "GCP",
  
  
];

const Cloud = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pt-32">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        💻 Technical Concepts
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {concepts.map((concept, idx) => {
          const path = `/${concept.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <Link
              to={path}
              key={idx}
              className="block bg-white shadow-md hover:shadow-xl transition duration-300 p-4 rounded-lg text-center border border-gray-200 hover:border-blue-500 cursor-pointer"
            >
              <span className="text-lg font-medium text-gray-700">{concept}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cloud;
