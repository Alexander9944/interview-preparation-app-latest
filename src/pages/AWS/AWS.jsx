import React from "react";

const awsServices = [
  {
    title: "AWS Auto Scaling",
    what: "Automatically adjusts AWS resources to match demand and maintain performance.",
    how: "Configure scaling policies for services like EC2, ECS, DynamoDB, and Aurora.",
    howMuch: "Free to use; you pay only for the resources provisioned.",
  },
  {
    title: "Amazon S3",
    what: "Object storage service for storing and retrieving data with high scalability and durability.",
    how: "Create a bucket, upload objects, and set permissions or lifecycle policies via the console, CLI, or SDK.",
    howMuch: "Pay for storage used, requests made, and data transferred (e.g., $0.023/GB for first 50TB).",
  },
  {
    title: "Amazon RDS",
    what: "Managed relational database service supporting MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.",
    how: "Launch DB instance, configure storage and compute, automate backups and updates.",
    howMuch: "Depends on DB type, instance class, and storage (e.g., db.t4g.micro starts in free tier).",
  },
  {
    title: "Amazon CloudFront",
    what: "Content Delivery Network (CDN) that delivers content with low latency and high transfer speeds.",
    how: "Distribute content by creating a CloudFront distribution and linking it to S3 buckets or other origins.",
    howMuch: "Pay based on data transfer and HTTP/HTTPS requests. Free tier includes 1 TB/month.",
  },
  {
    title: "AWS IAM",
    what: "Identity and Access Management service to securely control access to AWS resources.",
    how: "Create users, groups, roles, and policies to grant permissions based on least privilege.",
    howMuch: "Free to use; no additional costs for IAM.",
  },
  {
    title: "Amazon VPC",
    what: "Virtual Private Cloud allows you to define an isolated network for your AWS resources.",
    how: "Configure subnets, route tables, gateways, and security groups for networking.",
    howMuch: "Free to use, but NAT, VPNs, and inter-region traffic are billed.",
  },
  {
    title: "Amazon EC2",
    what: "Scalable compute capacity for running virtual servers in the cloud.",
    how: "Launch instances, choose AMIs, set instance type, configure security groups.",
    howMuch: "Pay for compute hours/seconds; supports on-demand, reserved, and spot instances.",
  },
  {
    title: "Amazon DynamoDB",
    what: "Fully managed NoSQL database service for key-value and document-based workloads.",
    how: "Create tables, define capacity, and access using SDK/API.",
    howMuch: "Pay based on read/write throughput, storage, backups, and streams.",
  },
  {
    title: "AWS Lambda",
    what: "Serverless compute service to run code in response to events.",
    how: "Write code, deploy via console/CLI, set triggers (S3, API Gateway, etc.).",
    howMuch: "Free tier includes 1M requests and 400,000 GB-sec/month. Billed by request and duration.",
  },
  {
    title: "Amazon SNS",
    what: "Managed service for sending notifications via topics, SMS, email, or HTTP.",
    how: "Create topics, subscribe endpoints, and publish messages.",
    howMuch: "$0.50/million publishes + delivery charges by protocol.",
  },
  {
    title: "Amazon SQS",
    what: "Managed message queuing service for decoupling and scaling applications.",
    how: "Create queues, send/receive messages via SDK, set access policies.",
    howMuch: "Free 1M requests/month; additional requests billed.",
  },
  {
    title: "AWS CloudTrail",
    what: "Tracks and logs API calls and account activity for auditing.",
    how: "Enable trails, store logs in S3, analyze with CloudWatch.",
    howMuch: "Free for 90 days activity; long-term storage incurs cost.",
  },
  {
    title: "Amazon CloudWatch",
    what: "Monitoring for AWS resources and custom metrics with dashboards and alarms.",
    how: "Collect logs/metrics, create alarms and visual dashboards.",
    howMuch: "Billed per metric, dashboard, alarm, and log ingestion/storage.",
  },
  {
    title: "AWS Elastic Beanstalk",
    what: "Platform for deploying/managing applications without managing infrastructure.",
    how: "Upload code, choose platform (Node.js, Java, etc.), and deploy.",
    howMuch: "Free to use; you pay for the underlying resources (EC2, RDS).",
  },
  {
    title: "AWS Systems Manager",
    what: "Manage AWS resources and automate tasks like patching and config.",
    how: "Use Run Command, Patch Manager, Parameter Store, and Automation.",
    howMuch: "Core features are free; advanced features incur charges.",
  },
  {
    title: "Amazon Route 53",
    what: "Scalable DNS and domain registration service.",
    how: "Register domains, set up hosted zones, routing policies.",
    howMuch: "$0.50 per hosted zone/month plus query costs.",
  },
  {
    title: "AWS CodePipeline",
    what: "CI/CD service for automating application deployments.",
    how: "Create pipelines, connect source control, deploy to targets.",
    howMuch: "$1 per active pipeline/month.",
  },
  {
    title: "AWS Glue",
    what: "Serverless ETL service for data preparation and integration.",
    how: "Define jobs, scripts, and metadata using Data Catalog.",
    howMuch: "Billed per DPU-second; includes a free tier.",
  },
  {
    title: "AWS Fargate",
    what: "Serverless compute engine for containers on ECS or EKS.",
    how: "Define tasks, services, and deploy containers.",
    howMuch: "Pay for vCPU and memory used by running tasks.",
  },
  {
    title: "Amazon EKS",
    what: "Managed Kubernetes service for container workloads.",
    how: "Create clusters, configure nodes or Fargate, deploy via Kubernetes API.",
    howMuch: "$0.10/hour/cluster + resource usage costs.",
  },
  {
    title: "Amazon ElastiCache",
    what: "Managed in-memory data store using Redis or Memcached.",
    how: "Create clusters, configure replication, connect app via API.",
    howMuch: "Costs based on instance type, cluster size, data transfer.",
  },
  {
    title: "AWS AppSync",
    what: "Managed GraphQL service with real-time/offline capabilities.",
    how: "Define schema, connect sources, deploy resolvers.",
    howMuch: "Billed per query, subscriptions, and data transfer.",
  },
  {
    title: "AWS KMS",
    what: "Create and manage cryptographic keys.",
    how: "Define keys, use across AWS for encryption, manage access.",
    howMuch: "$1/key/month + API request charges.",
  },
  {
    title: "Amazon QuickSight",
    what: "Business intelligence service to build dashboards and visualizations.",
    how: "Connect data, build analyses, share dashboards.",
    howMuch: "Pay per user and usage; SPICE and session-based pricing.",
  },
  {
    title: "AWS Secrets Manager",
    what: "Securely store, manage, and rotate secrets (API keys, passwords).",
    how: "Store secrets, enable rotation, retrieve programmatically.",
    howMuch: "$0.40/secret/month + $0.05 per 10,000 API calls.",
  },
  {
    title: "AWS Config",
    what: "Tracks AWS resource config changes and compliance.",
    how: "Enable rules, monitor resources, review compliance.",
    howMuch: "Charged per rule evaluation and config item tracked.",
  },
  {
    title: "Amazon Redshift",
    what: "Managed data warehouse for large-scale analytics using SQL.",
    how: "Create cluster, load data, run queries via Redshift console/BI tools.",
    howMuch: "Billed per node/storage/usage; free trial available.",
  },
  {
    title: "AWS Step Functions",
    what: "Serverless orchestration for building workflows between services.",
    how: "Define workflows in JSON, execute and monitor.",
    howMuch: "Billed per state transition; free tier includes 4,000/month.",
  },
  {
    title: "Amazon SageMaker",
    what: "Build, train, and deploy ML models at scale.",
    how: "Use notebooks, algorithms, and endpoints for inference.",
    howMuch: "Costs vary by training, hosting, and notebook resources.",
  },
  {
    title: "Amazon Inspector",
    what: "Automated vulnerability assessment service.",
    how: "Define targets, run assessments, analyze findings.",
    howMuch: "Billed based on resource coverage and scan frequency.",
  },
  {
    title: "Amazon Aurora",
    what: "High-performance managed database with MySQL/PostgreSQL compatibility.",
    how: "Launch Aurora clusters, configure replication and scaling.",
    howMuch: "Costs based on instance type, storage, I/O, and backup.",
  },
  {
    title: "AWS WAF",
    what: "Protects web apps from common exploits and bots.",
    how: "Define web ACLs, associate with CloudFront or ALB.",
    howMuch: "Billed per rule and number of web requests.",
  },
  {
    title: "AWS Cost Explorer",
    what: "Visualize and analyze AWS cost and usage data.",
    how: "Use dashboards to filter and group billing data.",
    howMuch: "Free for basic usage; charges apply for detailed reports.",
  },
  {
    title: "AWS Batch",
    what: "Run large-scale batch jobs using EC2 resources.",
    how: "Create job definitions, compute environments, submit jobs.",
    howMuch: "Pay for EC2 used during batch processing.",
  },
  {
    title: "AWS Direct Connect",
    what: "Private, low-latency network connection to AWS from your data center.",
    how: "Provision connections at Direct Connect locations.",
    howMuch: "Costs depend on port speed, data transferred.",
  },
  {
    title: "Amazon ECR",
    what: "Docker container registry to store and manage container images.",
    how: "Push/pull images using Docker CLI or AWS SDKs.",
    howMuch: "Storage and data transfer out of registry billed.",
  },
  {
    title: "Amazon ELB",
    what: "Distributes app traffic across multiple targets for high availability.",
    how: "Choose ALB, NLB, or CLB and configure listeners, target groups.",
    howMuch: "Charged per hour and data processed.",
  },
  {
    title: "AWS Global Accelerator",
    what: "Improves performance of apps globally via AWS global network.",
    how: "Create accelerators, configure listeners and endpoints.",
    howMuch: "Billed per accelerator and GBs of data transferred.",
  },
  {
    title: "Amazon EFS",
    what: "Managed shared file storage accessible by multiple EC2 instances.",
    how: "Mount on EC2 and scale storage automatically.",
    howMuch: "Pay for used storage and throughput.",
  },
  {
    title: "AWS Snowball",
    what: "Transfer large data volumes offline using secure physical devices.",
    how: "Request Snowball, load data, ship back to AWS.",
    howMuch: "Cost based on device type and transfer size.",
  },
];

const AWS = () => {
  return (
    <div className="pt-36 px-4 md:px-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        AWS Services Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {awsServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-4">{service.title}</h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p><span className="font-semibold text-gray-900">What: </span>{service.what}</p>
              <p><span className="font-semibold text-gray-900">How: </span>{service.how}</p>
              <p><span className="font-semibold text-gray-900">How Much: </span>{service.howMuch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AWS;
