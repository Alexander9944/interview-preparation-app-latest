import { useState } from "react";
import KubernetesScaling from "../../components/KubernetesScaling/KubernetesScaling";
import KubernetesServices from "../../components/KubernetesServices/KubernetesServices";
import KubernetesCommandsAccordion from "../../components/KubernetesCommandsAccordion/KubernetesCommandsAccordion";
import KubCertificationsteps from "../../components/KubCertificationsteps/KubCertificationsteps";
const sections = [
  {
    title: "Core Concepts and Architecture",
    questions: [
      {
        q: "Kubernetes Networking: Explain how Kubernetes Service objects work, including ClusterIP, NodePort, and LoadBalancer services.",
      },
      {
        q: "Describe the role of CNI plugins in Kubernetes networking.",
      },
      {
        q: "How does Kubernetes implement network policies to control traffic flow between pods?",
      },
    ],
  },
  {
    title: "Kubernetes Storage",
    questions: [
      { q: "Discuss the different storage classes available in Kubernetes and their use cases." },
      { q: "Explain the concept of persistent volumes and persistent volume claims." },
      { q: "How do you manage storage provisioning and lifecycle in a Kubernetes cluster?" },
    ],
  },
  {
    title: "Kubernetes Security",
    questions: [
      { q: "Describe the various security features of Kubernetes, such as RBAC, network policies, and Pod Security Policies." },
      { q: "How do you secure container images and prevent vulnerabilities?" },
      { q: "What are some best practices for securing Kubernetes clusters?" },
    ],
  },
  {
    title: "Kubernetes Operator Framework",
    questions: [
      { q: "Explain the concept of a Kubernetes operator and its role in managing complex applications." },
      { q: "How do you build a custom operator using the Operator Framework?" },
      { q: "What are the benefits of using operators for application management?" },
    ],
  },
  {
    title: "Kubernetes Multi-tenancy",
    questions: [
      { q: "How would you implement multi-tenancy in a Kubernetes cluster to isolate different teams or projects?" },
      { q: "What are the security considerations for multi-tenancy?" },
      { q: "How do you troubleshoot performance issues in a Kubernetes cluster?" },
    ],
  },
  {
    title: "Kubernetes CI/CD",
    questions: [
      { q: "Explain the role of Kubernetes in CI/CD pipelines." },
      { q: "How do you automate the deployment and management of applications using tools like Jenkins, GitLab CI/CD, or Tekton?" },
    ],
  },
  {
    title: "Serverless Kubernetes",
    questions: [
      { q: "Describe the concept of serverless Kubernetes and its benefits." },
      { q: "How do you implement serverless functions using Knative or other frameworks?" },
    ],
  },
  {
    title: "Scenario-Based Questions",
    questions: [
      { q: "How would you implement a disaster recovery strategy for a Kubernetes cluster?" },
      { q: "What tools and techniques can be used for backing up and restoring Kubernetes state?" },
    ],
  },
  {
    title: "Migrating to Kubernetes",
    questions: [
      { q: "Discuss the challenges and best practices for migrating existing applications to Kubernetes." },
      { q: "How do you assess the suitability of an application for containerization and Kubernetes?" },
    ],
  },
  {
    title: "Scaling Kubernetes Clusters",
    questions: [
      { q: "Explain different strategies for scaling Kubernetes clusters, including horizontal and vertical scaling." },
      { q: "How do you automate the scaling process using tools like Kubernetes HPA or custom scripts?" },
    ],
  },
];

export default function KubernetesFaq() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
    <KubernetesServices />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Kubernetes Interview Prep</h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-4 border rounded-lg shadow-md">
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-semibold flex justify-between items-center"
          >
            <span>{section.title}</span>
            <span>{openSection === index ? "-" : "+"}</span>
          </button>
          {openSection === index && (
            <div className="px-4 py-2 bg-white">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.questions.map((q, i) => (
                  <li key={i}>{q.q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
    <KubernetesScaling />
    <KubernetesCommandsAccordion />
    <KubCertificationsteps />
    <h3 className="text-3xl font-bold mb-6 text-center max-w-lg">Conclusion </h3>
<p className="text-gray-700 mb-4 p-10">
In conclusion, Kubernetes Services provide a powerful way to connect to your applications in a reliable and scalable way 🚀. By mastering Services, you can build robust and scalable applications that meet the needs of your business 📈.
</p>

    </>
  );
}
