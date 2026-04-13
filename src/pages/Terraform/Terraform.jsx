import React from "react";

const Terraform = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terraform</h1>

        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 border border-gray-200">
          <p className="text-gray-700">
            <strong>Terraform</strong> is an open-source tool used to build, modify, and version control infrastructure.
            It supports several service providers, enabling the creation of customized deployments. Terraform operates
            on the principle of <strong>Infrastructure as Code (IaC)</strong>, where infrastructure is declared as code.
            This means it can be shared, reviewed, and controlled just like any other software codebase.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Key Terraform Use Cases</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Multi-Cloud Deployment:</strong> Terraform helps with deploying applications across multiple cloud
              providers. With it, you can use the same tool and similar syntax to manage resources in AWS, GCP, Azure, and many others.
            </li>
            <li>
              <strong>Microservices Infrastructure:</strong> Terraform can manage the infrastructure requirements of a
              microservices architecture, efficiently provisioning resources for each individual service.
            </li>
            <li>
              <strong>Managing Diverse Cloud Resources:</strong> Terraform isn't limited to server management. It can
              also handle databases, DNS entries, and most other resources offered by a cloud provider.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">The Upside of Using Terraform</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Provider Agnostic:</strong> Terraform supports an impressive range of Terraform providers,
              including major cloud providers and many other services, making it a versatile choice for IaC needs.
            </li>
            <li>
              <strong>Modularity:</strong> Terraform promotes the use of Terraform modules, helping you create reusable
              components that can be shared across your organization.
            </li>
            <li>
              <strong>Version Control Capabilities:</strong> Since infrastructure is represented as code, it can be
              versioned and tracked using conventional version control systems like Git.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Terraform;
