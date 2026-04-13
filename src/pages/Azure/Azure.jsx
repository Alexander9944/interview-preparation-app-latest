import React from "react";

const Azure = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Azure Concepts
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border-l-8 border-blue-500">
          <div className="overflow-y-auto max-h-[600px] space-y-6 text-gray-800 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                Azure Private Link Overview:
              </h2>
              <p>
                Azure Private Link provides secure access to Azure PaaS services
                such as Azure SQL Database, Azure Storage, Azure Vault Services,
                MySQL Databases, and Azure Cosmos DB via the Microsoft backbone
                network — preventing sensitive data from traversing the public
                internet.
              </p>
              <p>
                There are two key components of Azure Private Link:
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-blue-500">
                1. Azure Private Endpoint
              </h3>
              <p>
                A network interface with a private IP address from a VNET. It allows
                connections to Azure services such as Azure Vault, Cosmos DB, Azure
                SQL, and Azure Storage through the Private Link.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-blue-500">
                2. Azure Private Link Service
              </h3>
              <p>
                Enables private access to services hosted behind a Standard Load
                Balancer. Consumers can connect to these services using private
                endpoints in their own VNETs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                Azure Availability Zones:
              </h2>
              <p>
                Azure Availability Zones provide high availability for applications
                and data. A zone comprises one or more datacenters within a region,
                each with independent power, networking, cooling, and hardware.
              </p>
              <p>
                Zone-redundant services replicate data and apps across zones for
                resiliency. Each Azure region has at least 3 Availability Zones.
              </p>
              <p>
                You can deploy VPN gateways in Availability Zones to improve
                availability and resiliency.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-blue-500">
                Deployment Options:
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Zone-redundant Gateway:</strong> If no specific zone is
                  defined during public IP creation (Standard SKU), Azure deploys
                  two gateway instances in different zones.
                </li>
                <li>
                  <strong>Zonal Gateway:</strong> If you define a zone (1, 2, or 3)
                  for the public IP, both gateway instances are deployed into the
                  same zone.
                </li>
              </ul>
            </section>

            <section>
              <p>
                <strong>Note:</strong> Both gateway deployment types require a
                Standard SKU Azure public IP address.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure;
