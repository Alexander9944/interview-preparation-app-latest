import React from 'react';

const CCIDPage = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">CI/CD Interview Questions</h1>
      
      <ol className="list-decimal pl-5 space-y-3 text-lg">
        <li>What is CI/CD, and why is it important in DevOps?</li>
        <li>How do you set up and configure a CI/CD pipeline in Jenkins?</li>
        <li>What is the difference between continuous integration, continuous delivery, and continuous deployment?</li>
        <li>How do you integrate version control systems like Git with CI/CD pipelines?</li>
        <li>What are the key steps to deploy a Dockerized application using a CI/CD pipeline?</li>
        <li>How do you handle secrets and sensitive data in a CI/CD pipeline?</li>
        <li>What strategies do you use for rollback and roll-forward in CI/CD pipelines?</li>
        <li>How do you implement parallel builds in a CI/CD pipeline?</li>
        <li>What is artifact management, and how do you integrate tools like Nexus or JFrog into CI/CD workflows?</li>
        <li>How do you monitor and maintain CI/CD pipelines to ensure reliability and performance?</li>
      </ol>

      <hr className="my-10 border-gray-300" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Deploying -10 Microservices on Kubernetes cluster via Jenkins CI/CD Pipeline</h2>
        <p className="mb-4 text-base">
          <strong>Project Overview ---&gt;</strong><br />
          In this project, we deploy 10 microservices to a Kubernetes cluster using a Jenkins pipeline. The process begins by launching a base EC2 server where all tasks are performed. After accessing the server via SSH, we install essential tools such as Docker, Jenkins, Java, eksctl, and kubectl. Next, we set up a Kubernetes cluster using AWS Elastic Kubernetes Service (EKS). Finally, we configure a Jenkins multibranch pipeline to fetch the code from GitHub and deploy the microservices to the EKS cluster, completing the deployment process efficiently…. let’s begin
        </p>

        <h3 className="text-xl font-bold text-indigo-500 mb-2">Steps to Set Up a DevOps Workflow with Kubernetes and Jenkins →</h3>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li><strong>Step 1 :</strong> Launch a Base Instance — Initialize your environment by creating a cloud instance or server to host your setup.</li>
          <li><strong>Step 2 :</strong> Configure IAM User with Permissions — Create an IAM user with specific roles and policies for secure access management.</li>
          <li><strong>Step 3 :</strong> Deploy Kubernetes Cluster — Set up and configure a Kubernetes cluster to manage containerized applications.</li>
          <li><strong>Step 4 :</strong> Install Required DevOps Tools — Install essential tools such as Docker, kubectl, and Helm for managing your workflow.</li>
          <li><strong>Step 5 :</strong> Set Up Jenkins — Deploy and configure Jenkins as your continuous integration/continuous deployment (CI/CD) tool.</li>
          <li><strong>Step 6 :</strong> Create and Configure Jenkins Pipeline — Design a Jenkins pipeline to automate the build, test, and deployment processes.</li>
        </ul>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-indigo-500 mb-2">Additional Notes on Deployment:</h3>
          <p className="mb-3">
            <strong>Kubernetes Cluster:</strong> A cluster is a set of machines that run containerized applications. Kubernetes helps to manage these applications, making sure they run smoothly, scale properly, and recover from any failures.
          </p>
          <p className="mb-3">
            <strong>Microservices:</strong> These are small, independent applications that work together to form a larger application. Instead of having one large app, you break it down into smaller parts (like 10 microservices) that can each be deployed and updated individually.
          </p>
          <p className="mb-3">
            <strong>Jenkins CI/CD Pipeline:</strong> This automates the entire process of integrating new code changes and deploying them to production. Every time a developer pushes code changes to GitHub, Jenkins automatically builds, tests, and deploys the changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CCIDPage;
