import React, { useState } from 'react';

const interviewSections = [
  {
    title: 'Jenkins Interview Questions',
    questions: [
      "What is Jenkins? Define Jenkins and its role in continuous integration.",
      "What is a Jenkins Pipeline? Explain the concept of Jenkins pipelines and how they help automate tasks.",
      "What are the different types of Jenkins build triggers? Discuss manual, scheduled, and automatic triggers in Jenkins.",
      "What is a Jenkins Node? Explain the concept of nodes and master-slave architecture in Jenkins.",
      "How do you manage plugins in Jenkins? Describe how to install, update, and configure Jenkins plugins.",
      "What are Jenkins Pipelines, and how do you implement them? Share your knowledge about Declarative vs Scripted Pipelines.",
      "How can you secure a Jenkins installation? Explain the best practices for securing Jenkins and its environment.",
      "What is a Jenkinsfile? Describe the role and structure of a Jenkinsfile in defining pipeline logic.",
      "How do you integrate Jenkins with GitHub or GitLab? Explain how version control systems work with Jenkins.",
      "What is the difference between Continuous Integration, Continuous Delivery, and Continuous Deployment?",
      "Discuss these important CI/CD concepts and how Jenkins supports them. What’s your perspective on these roles?",
      "What is Jenkins? Define its role in CI.",
      "What is a Jenkins Pipeline?",
      "Types of Jenkins build triggers?",
      "What is a Jenkins Node?",
      "How to manage plugins in Jenkins?",
      "Declarative vs Scripted Pipelines?",
      "How do you secure a Jenkins installation?",
      "What is a Jenkinsfile?",
      "How to integrate Jenkins with GitHub or GitLab?",
      "What’s the difference between CI, CD, and Continuous Deployment?",
      "What are the types of Jenkins pipelines and when would you use each?",
      "How do you set up Jenkins agents and manage their configurations?",
      "How do you secure Jenkins and its credentials?",
      "Current Jenkins version",
      "Jenkinsfile vs Groovy",
      "Why Groovy in Jenkins and where do you save files?",
      "What is the difference between a single Jenkins pipeline and multiple pipelines?",
      "Issues with single vs multiple pipelines?",
      "How do you deploy using Jenkins to K8s or cloud?",
      "Write a Jenkins pipeline script for Terraform deployment.",
      "Do you have separate Jenkins servers for each environment?"
    ]
  },
  {
    title: 'General DevOps & AWS Interview Questions',
    questions: [
      "What do you know about DevOps?",
      "What types of projects have you worked on? Can you please explain?",
      "What tools have you integrated into DevOps?",
      "I have a VPN in the organization and we use AWS Cloud. If a new employee joins, how can I create a user in AWS and grant them access through the VPN?",
      "I have an EC2 instance that’s already created. How would you find out who created it?",
      "What is metadata in EC2?",
      "I’ll show you some services in my AWS account. Can you identify any security leaks in the infrastructure?",
      "What happens when a GitLab CI/CD runner fails?",
      "If the GitLab runner fails, will it impact production?",
      "If the GitLab server goes down, what would you do to regain access to the code and bring it back up?",
      "How would you secure the GitLab server?",
    ]
  },
  {
    title: 'Linux & Docker Interview Questions',
    questions: [
      "What tools do you use on a daily basis from the Linux perspective?",
      "What are inodes in Linux?",
      "Any experience with RAID configurations?",
      "Any experience with Docker?",
      "What network connectivity can you utilize in an authorized environment for communication between different containers?",
      "Have you created your own images for containers? What application was it?",
      "What were the security considerations you have taken?",
    ]
  },
  {
    title: 'Kubernetes & Monitoring Questions',
    questions: [
      "What's the difference between a StatefulSet and DaemonSet?",
      "Where or why did you use StatefulSet? How does it help?",
      "While creating a manifest file, what are the 4 major things that you have to add?",
      "How was the Jenkins environment that you're using? What considerations have you done while setting that up?",
      "What is the default home directory for Jenkins for a master and for a slave?",
      "Were you using the root user to run the agent part of Jenkins in the slave servers?",
      "Have you worked on setting up additional storage for your worker nodes in Kubernetes?",
      "What have you done on the Prometheus Grafana part?",
      "How were logs and monitoring done in a Kubernetes cluster using Prometheus and Grafana?",
      "What is required so that Prometheus can collect details?",
    ]
  },
  {
    title: 'Terraform + Git Questions',
    questions: [
      "What was your role with Terraform?",
      "What modules have you worked on?",
      "Why was it required to create a custom module?",
      "What is git squash?",
      "What is Git stash and why is it used?"
    ]
  },
  {
    title: 'AWS Specific Questions',
    questions: [
      "What are the different types of disks available in AWS?",
      "How would you ascertain instance type when you have to deploy one? What parameters would you consider?",
      "What tools have you used for backup?",
      "Have you used S3? What was the purpose and classes?",
      "What other AWS services have you used?",
      "Have you used load balancing based on Route 53?"
    ]
  }
];

const JenkinsDevOpsIntQsns = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        DevOps & Jenkins Interview Questions
      </h1>

      <div className="space-y-6">
        {interviewSections.map((section, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-semibold text-blue-700"
            >
              {section.title}
            </button>
            {openSections[index] && (
              <ul className="list-disc list-inside px-6 py-4 space-y-2">
                {section.questions.map((question, idx) => (
                  <li key={idx} className="text-gray-800">{question}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JenkinsDevOpsIntQsns;