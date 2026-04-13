import React from "react";

const OpenShiftContent = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-700">Red Hat OpenShift Overview</h1>

        <div className="bg-white shadow-md rounded-2xl p-6 mb-8 space-y-4">
          <p>
            Red Hat OpenShift is an open-source container orchestration platform for enterprises.
            It includes several container technologies, primarily the OpenShift container orchestration software, which is based on the OKD open-source project (formerly OpenShift Origin).
            Red Hat OpenShift combines Kubernetes components with security features and productivity necessary for large enterprises and is especially useful in hybrid cloud scenarios.
          </p>

          <p>
            OpenShift Container Platform is a private platform-as-a-service (PaaS) for enterprises that run OpenShift on public cloud or on-premises infrastructure. It runs on the Red Hat Enterprise Linux (RHEL) operating system and functions as a set of Docker-based application containers managed with Kubernetes orchestration.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">OpenShift Container Platform: 13 Key Capabilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Management of multiple clusters—consolidated view for unified management across environments.</li>
            <li>Scalability—scale apps to thousands of instances across hundreds of nodes.</li>
            <li>Persistent storage—support for both stateful and stateless applications.</li>
            <li>Integrated ecosystem—access to a large set of community-integrated third-party tools.</li>
            <li>Open-source support—supports CNCF Kubernetes and OCI containers.</li>
            <li>Portability—containers easily move from local dev to production environments.</li>
            <li>3-node clusters—efficient edge computing setup.</li>
            <li>Remote worker nodes—central management of edge-located compute nodes.</li>
            <li>Convenient user interfaces—web console and rich CLI tools.</li>
            <li>Support for multiple languages and databases.</li>
            <li>Development lifecycle automation—CI/CD, scaling, deployments.</li>
            <li>Automatic installations and upgrades via OperatorHub.</li>
            <li>Integrated CI/CD pipelines to speed up delivery and reduce errors.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">OpenShift vs Kubernetes</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Distribution</h3>
            <p>
              Kubernetes is an open-source container orchestration platform, with managed services like Amazon EKS, Azure AKS, and Google GKE. OpenShift is built on Kubernetes but not a Kubernetes distribution—it adds enterprise-grade features and extensions.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Workflow and Configuration</h3>
            <p>
              Both use configuration files (YAML/JSON) and support load balancing and routing. They can be deployed on-prem or in the cloud.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">APIs and Integrations</h3>
            <p>
              OpenShift is fully Kubernetes-compliant, so apps built for Kubernetes can run on OpenShift. However, OpenShift has additional supported tools and extensions.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Command Line Tools</h3>
            <p>
              Kubernetes uses <code>kubectl</code>, while OpenShift uses <code>oc</code> which offers extra functionality for admin tasks.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Logging and Dashboards</h3>
            <p>
              Kubernetes supports various logging tools; dashboard is an optional add-on. OpenShift integrates with the EFK stack and includes a built-in web console.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Operating System Support</h3>
            <p>
              Kubernetes runs on any Linux (and Windows workers). OpenShift nodes must run Red Hat Enterprise Linux CoreOS.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default OpenShiftContent;
