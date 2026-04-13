import React from "react";

const devOpsQuestions = {
  Docker: [
    "What is the difference between an image and a container?",
    "How do you create a Dockerfile, and what are some best practices?",
    "Explain the purpose of Docker Compose and provide a use case.",
    "How do you manage persistent storage in Docker?",
    "What is a multi-stage build in Docker, and why is it used?",
    "How do you troubleshoot a failing Docker container?",
    "ADD vs COPY in Dockerfile.",
    "Entrypoint vs CMD in Dockerfile.",
    "Is Dockerfile immutable?",
    "How to remove all unwanted or unused Docker objects from system?",
    "Docker lifecycle."
  ],
  Kubernetes: [
    "What is Kubernetes architecture?",
    "What are Pods in Kubernetes, and how are they different from containers?",
    "Explain the difference between Deployment, StatefulSet, and DaemonSet.",
    "What is a ConfigMap?",
    "What is the purpose of ConfigMaps and Secrets?",
    "Role of etcd in Kubernetes.",
    "How does Kubernetes handle load balancing between Pods?",
    "How rolling updates work in a Deployment?",
    "How do you manage Kubernetes cluster scaling?",
    "What is a ReplicaSet?",
    "Is it possible to run Kubernetes in a single-node local environment?",
    "What is a Service Mesh, and how does it integrate with Kubernetes?"
  ],
  Terraform: [
    "What is a statefile?",
    "Where do you store the statefile?",
    "What is a null resource in Terraform?",
    "What is Terraform plan and its purpose?",
    "Terraform code to deploy an EC2 instance.",
    "What will appear in the plan if you comment out a resource block?",
    "Terraform taint.",
    "Terraform refresh.",
    "What happens if you change resource values on console and apply Terraform?",
    "What is a Terraform module, and what is its purpose?",
    "How do you manage state files in Terraform?",
    "Explain the use of modules in Terraform and their importance.",
    "What are workspaces in Terraform, and how do you use them?",
    "How do you handle resource dependencies in Terraform?",
    "Resolving merge conflict in Terraform project.",
    "Where do you run Terraform code, remotely or locally?",
    "What environments have you set up for your project?",
    "What are Terraform modules, and have you used any in your project?"
  ],
  Ansible: [
    "What is the difference between ad-hoc commands and playbooks in Ansible?",
    "How do you ensure idempotency in Ansible playbooks?",
    "What are Ansible roles, and how do you structure them?",
    "How do you securely store sensitive data like passwords in Ansible?",
    "Explain the difference between ansible-playbook and ansible-pull.",
    "How do you troubleshoot an Ansible run that fails midway?",
    "What is Ansible, and what is its purpose?",
    "What language do you use in Ansible?"
  ],
  Jenkins: [
    "Different types of Jenkins pipelines and use cases.",
    "How do you set up Jenkins agents and manage configurations?",
    "How to integrate Jenkins with Git for CI/CD?",
    "Best practices for managing Jenkins plugins.",
    "Pipeline to deploy apps to Kubernetes or cloud.",
    "How do you secure Jenkins and its credentials?",
    "Current Jenkins version.",
    "Write a Jenkins pipeline script for Terraform deployment.",
    "What is the difference between a single and multiple pipelines?",
    "What are the issues of using a single pipeline vs. multiple?",
    "Why do you use Groovy in Jenkins, and where do you save Jenkins files?",
    "What is Groovy, and how is it used in Jenkins?",
    "Do you have separate Jenkins servers for each environment?"
  ],
  CI_CD: [
    "CI/CD workflow.",
    "Deployment strategies used in your project.",
    "Have you created a Jenkins pipeline for your project?"
  ],
  Git: [
    "How can we remove a file from Git without removing the filesystem?",
    "How can we discover if a branch has already been merged in Git?"
  ],
  AWS_Cloud: [
    "What is the role of IAM roles and policies?",
    "How do you attach policies to IAM users (individual/group)?",
    "What is AWS Lambda, and how does it work?",
    "How do you invoke a Lambda function and configure it?",
    "How does Lambda handle scaling and event-based invocations?",
    "What is Amazon CloudWatch? Have you configured custom metrics?",
    "How do you configure CPU utilization in CloudWatch dashboard?",
    "What metrics are available in CloudWatch?",
    "How do you attach an SSL certificate to an S3 bucket?",
    "What type of encryption have you implemented?",
    "If S3 bucket has read-only policy, can you modify objects?",
    "What is a Content Delivery Network (CDN), and how does it work?",
    "Why choose Terraform over Boto3 for provisioning?",
    "Have you used tools to create customized AMIs?",
    "What is connection draining, and how does it work?",
    "How does an Elastic Load Balancer (ELB) distribute traffic?",
    "What is Auto Scaling and how does it work?",
    "Different types of Load Balancers and examples?",
    "What is the maximum runtime for a Lambda function?",
    "What is the maximum memory size for a Lambda function?",
    "How to increase runtime for a Lambda function?",
    "What automations have you done with Lambda?",
    "What modules used in Lambda function?",
    "Have you created an SNS topic for your project?",
    "If you exhaust IPs in VPC, how to provision new resources?",
    "What is the purpose of access keys and secret keys in AWS?",
    "Do you use same AWS account for all environments?"
  ],
  LoadBalancing_Networking: [
    "Application Load Balancer vs Network Load Balancer.",
    "What is Route53?",
    "How to connect on-premise to an application in a VPC cloud?"
  ],
  EC2: [
    "How to create 10 EC2 machines with incremental values like 0,1,2, etc.",
    "How to terminate 9 EC2 instances and leave one running?"
  ],
  General: [
    "Do you know Ansible?",
    "What is Databricks?",
    "Write a script to find the largest and smallest elements of an array."
  ]
};

const Miscellaneous = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">🛠 DevOps Interview Questions (3-4 Yrs)</h1>
      <div className="space-y-4">
        {Object.entries(devOpsQuestions).map(([category, questions], idx) => (
          <details key={idx} className="border border-gray-300 rounded-lg">
            <summary className="cursor-pointer bg-gray-100 px-4 py-3 font-semibold text-lg">
              {category}
            </summary>
            <ul className="list-disc pl-6 pr-4 py-2 space-y-1">
              {questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Miscellaneous;
