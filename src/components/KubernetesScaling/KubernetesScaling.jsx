export default function KubernetesScaling() {
  const strategies = [
    {
      title: "1. Horizontal Pod Autoscaling (HPA)",
      description:
        "HPA adjusts the number of pod replicas based on CPU utilization or custom metrics. When the demand increases, more pods are added; when the demand decreases, the pods are scaled down.",
      before: "Before HPA Scaling: A single node with a set number of pods.",
      after: "After HPA Scaling: More pods are added as the load increases (scale-out).",
    },
    {
      title: "2. Vertical Pod Autoscaling (VPA)",
      description:
        "VPA adjusts the CPU and memory resources allocated to a pod. If a pod needs more resources, the VPA scales it up by increasing its CPU and memory.",
      before: "Before VPA Scaling: A pod has a predefined CPU (e.g., 4 cores) and memory (e.g., 4GB).",
      after: "After VPA Scaling: The pod is allocated more CPU (e.g., 6 cores) and memory (e.g., 8GB) as needed.",
    },
    {
      title: "3. Cluster Autoscaling",
      description:
        "Cluster Autoscaling automatically adds or removes nodes from the cluster when there are pending pods that cannot be scheduled due to insufficient resources.",
      before: "Existing Node: Nodes are running the available pods.",
      after: "New Node: A new node is launched when the current nodes are full, ensuring the new pods can run.",
    },
    {
      title: "4. Manual Scaling",
      description:
        "Users manually adjust the number of replicas or nodes using Kubernetes command-line tools like kubectl.",
      before: "Scaling Process: Users manually instruct Kubernetes to add or remove pods or nodes as required by the system’s load.",
    },
    {
      title: "5. Predictive Scaling",
      description:
        "Predictive Scaling uses Machine Learning (ML) forecasts to anticipate future resource needs. Tools like KEDA are used to adjust resources based on forecasted workloads.",
      before: "Scaling Process: Kubernetes adjusts resources proactively, balancing them based on ML predictions and event-driven decisions.",
    },
    {
      title: "6. Custom Metrics-Based Scaling",
      description:
        "This scaling method is driven by custom-defined metrics, not limited to CPU or memory. A Custom Metrics Registry collects data, and scaling decisions are made based on this custom data.",
      before: "Scaling Process: HPA scales the deployment based on metrics gathered from the custom registry, enabling more dynamic and tailored scaling operations.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        𝑲𝒖𝒃𝒆𝒓𝒏𝒆𝒕𝒆𝒔 𝑺𝒄𝒂𝒍𝒊𝒏𝒈 𝑺𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒆𝒔
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{strategy.title}</h2>
            <p className="text-gray-700 mb-3">{strategy.description}</p>
            {strategy.before && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-800">▪</span> {strategy.before}
              </p>
            )}
            {strategy.after && (
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">▪</span> {strategy.after}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
