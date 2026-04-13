import React, { useState } from 'react';

const DevOpsIntQsns = () => {
  const questions = [
    {
      section: "General Questions",
      items: [
        "What is DevOps, and why is it important?",
        "How does DevOps differ from traditional IT practices?",
        "What are the benefits of continuous integration and continuous deployment (CI/CD)?",
        "What tools are commonly used in DevOps?",
        "Describe a basic software development lifecycle (SDLC).",
      ],
    },
    {
      section: "Experience-Based & AWS + Jenkins",
      items: [
        "Were you able to write some code as well in Jenkins (asking that I am able to write the Jenkins pipeline).",
        "Have you worked on AWS?",
        "Let's say I have a single page application. Do you know how to post it in the S3 bucket?",
        "Let's say that you have a S3 bucket. Within that, I just have to make one of the folder or object as a public or can be accessed by external user. What would you do?",
        "If you want to restrict running of some instances during weekends and holidays. How would you do?",
        "Have you used EventBridge?",
      ],
    },
    {
      section: "Terraform + MongoDB",
      items: [
        "Have you done any provisioning using MongoDB at last with Terraform?",
        "How do you structure a Terraform project and how do you handle different environments?",
        "Do you know something called the statefiles in Terraform?",
        "Can you speak about what are the backends available for state storage? What are some of the best ones? and why?",
        "Was it also used a lock with DynamoDB? and why?",
        "If I use this Terraform refresh, what really happens?",
        "Do you know what is the purpose of Terraform import command and when can we use it?",
        "Let's say we have an EC2 instance, which cannot be created without creating a VPC. How do you ensure that Terraform creates VPC first, before EC2?",
      ],
    },
    {
      section: "Advanced & Troubleshooting",
      items: [
        "There is a database which is auto-operating its migration version. Okay. And we see it just over a month. Okay. How will you handle this situation?",
        "How do you optimize the Docker image?",
        "One last question is about deployment strategies. Like, if there's going to be a rolling update, how we do it?",
        "Let's say you have a container crash. How do you debug the crash in container?",
        "For somebody who doesn't know Grafana and GLK, what will you describe these solutions as?",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSection = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">DevOps Interview Questions</h1>

      <div className="space-y-6">
        {questions.map((section, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-5 py-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold text-lg flex justify-between items-center"
            >
              {section.section}
              <span className="text-xl">
                {expandedIndex === index ? '−' : '+'}
              </span>
            </button>

            {expandedIndex === index && (
              <ul className="list-disc list-inside px-6 py-4 bg-white space-y-2 text-gray-700 text-base sm:text-lg">
                {section.items.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevOpsIntQsns;
