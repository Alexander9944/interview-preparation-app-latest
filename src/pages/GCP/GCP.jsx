import React from "react";

const gcpServices = [
  {
    category: "Compute",
    services: [
      "Compute Engine: Virtual machines in the cloud.",
      "App Engine: Platform as a Service (PaaS) for building scalable web applications.",
      "Kubernetes Engine: Managed Kubernetes service for container orchestration.",
      "Cloud Functions: Serverless compute platform for event-driven functions.",
    ],
  },
  {
    category: "Storage and Databases",
    services: [
      "Cloud Storage: Scalable object storage for unstructured data.",
      "Cloud SQL: Fully managed relational database service.",
      "Cloud Spanner: Globally distributed, horizontally scalable relational database.",
      "Cloud Bigtable: NoSQL wide-column database for massive scalability.",
      "Firestore: Serverless, NoSQL document database.",
      "Memorystore: Fully managed in-memory data store.",
    ],
  },
  {
    category: "Networking",
    services: [
      "Virtual Private Cloud (VPC): Networking infrastructure for creating isolated virtual networks.",
      "Cloud Load Balancing: Load balancing service for distributing traffic across instances and regions.",
      "Cloud CDN: Content Delivery Network for fast content delivery.",
      "Cloud DNS: Managed Domain Name System service.",
    ],
  },
  {
    category: "Big Data and Analytics",
    services: [
      "BigQuery: Serverless, fully managed data warehouse for analytics.",
      "Dataproc: Managed Apache Spark and Hadoop service.",
      "Dataflow: Serverless data processing service for batch and streaming data.",
      "Pub/Sub: Messaging service for building event-driven systems.",
      "Data Catalog: Fully managed and scalable metadata management service.",
    ],
  },
  {
    category: "AI and Machine Learning",
    services: [
      "AI Platform: End-to-end platform for building, training, and deploying ML models.",
      "AutoML: Suite of services for automating machine learning model development.",
      "Vision AI: Pre-trained models for image recognition and analysis.",
      "Natural Language AI: Pre-trained models for text and language processing.",
      "Speech-to-Text and Text-to-Speech: Speech recognition and synthesis capabilities.",
    ],
  },
  {
    category: "Identity and Security",
    services: [
      "Cloud IAM: Identity and Access Management for managing access control.",
      "Cloud Identity-Aware Proxy: Access control and security for web applications.",
      "Cloud Key Management Service: Key management and encryption service.",
      "Security Command Center: Security and risk management platform.",
      "Cloud Armor: Web application firewall and DDoS protection.",
    ],
  },
];

const GCP = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-32">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Google Cloud Platform (GCP) Services
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gcpServices.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-5 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-3">
              {section.category}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GCP;
