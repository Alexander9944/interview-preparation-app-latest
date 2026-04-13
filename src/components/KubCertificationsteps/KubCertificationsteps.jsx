import { FaCheckCircle, FaLink } from "react-icons/fa";

const topics = [
  "Network Policies",
  "ETCD Backup & Restore",
  "Cluster Upgrade & Maintenance",
  "RBAC",
  "Imperative commands",
  "Troubleshooting",
  "Authentication & Authorization",
  "PV & PVCs",
];

const resources = [
  {
    label: "Prerequisites for Kubernetes",
    url: "https://lnkd.in/dq--bH5t",
  },
  {
    label: "Important Kubernetes kubectl Command with Examples!",
    url: "https://lnkd.in/dq96xXdV",
  },
  {
    label: "CKA Exam Questions to Practice",
    url: "https://lnkd.in/dEPrHE37",
  },
];

const tools = [
  {
    name: "kubectl-debug",
    url: "https://lnkd.in/gj8aJXpr",
    desc: "Out-of-tree solution to troubleshoot a running container in a pod.",
  },
  {
    name: "windows-debug",
    url: "https://lnkd.in/g9RYPDrK",
    desc: "Launches a Windows debug pod with tools for node access.",
  },
  {
    name: "kubectl-view-allocations",
    url: "https://lnkd.in/gnZ5pdxQ",
    desc: "Lists CPU, memory, GPU allocations from pod and node manifests.",
  },
  {
    name: "kubectl-tree",
    url: "https://lnkd.in/gZJPyqT4",
    desc: "Visualize Kubernetes object hierarchies as a tree.",
  },
  {
    name: "kubetap",
    url: "https://lnkd.in/gWdwfzDS",
    desc: "Deploy intercepting proxies for debugging service network issues.",
  },
  {
    name: "kstrace",
    url: "https://lnkd.in/gpYrJXqT",
    desc: "Collects strace data and monitors syscalls from pods.",
  },
  {
    name: "kubespy",
    url: "https://lnkd.in/gZ65QuQj",
    desc: "Spawns spy containers with debug tools to inspect other containers.",
  },
  {
    name: "kubectl-sick-pods",
    url: "https://lnkd.in/gQ3fPttG",
    desc: "Diagnose unhealthy or sick pods in the cluster.",
  },
  {
    name: "ktop",
    url: "https://lnkd.in/g_BXeBCS",
    desc: "Top-like tool to display metrics of nodes and workloads.",
  },
  {
    name: "kubectl-windumps",
    url: "https://lnkd.in/gJDcDwv8",
    desc: "Network traffic analyzer for AKS Windows nodes.",
  },
  {
    name: "kubectl-graph",
    url: "https://lnkd.in/gpQeTqwm",
    desc: "Visualize Kubernetes resources and their relationships.",
  },
];

export default function KubCertificationsteps() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Kubernetes Certification Preparation Guide
      </h1>
  <p>For all those who are preparing for the k8s certification, my advice would be to focus on these topics:</p>
      {/* Advice Section */}
      <div className="mb-10 bg-white shadow-md p-6 rounded-xl border">

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Focus Topics </h2>
        <p></p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside text-gray-700">
          {topics.map((topic, i) => (
            <li key={i}>{topic}</li>
          ))}
        </ul>
        <p className="mt-4 font-medium text-green-600">
          ✅ Make sure to thoroughly read the questions and verify before moving to the next one.
        </p>
      </div>

      {/* Resource Links */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Helpful Resources 🔗</h2>
        <div className="space-y-3">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            >
              <FaLink /> {res.label}
            </a>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Recommended Tools 🛠️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow p-5 hover:shadow-md transition"
            >
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold text-lg flex items-center gap-2 mb-2"
              >
                <FaCheckCircle className="text-green-500" />
                {tool.name}
              </a>
              <p className="text-gray-700 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
