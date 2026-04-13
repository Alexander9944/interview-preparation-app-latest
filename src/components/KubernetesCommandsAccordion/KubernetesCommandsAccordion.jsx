import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const commands = [
  {
    title: "1. kubectl get pods --all-namespaces",
    description: "Check the status of all pods across namespaces to identify failures.",
  },
  {
    title: "2. kubectl describe pod <pod_name>",
    description: "Gather detailed information about a failed pod.",
  },
  {
    title: "3. kubectl logs <pod_name> -c <container_name>",
    description: "View logs of a specific container inside a pod to troubleshoot issues.",
  },
  {
    title: "4. kubectl get events --all-namespaces --sort-by=metadata.creationTimestamp",
    description: "Review recent events for clues on crashes and errors.",
  },
  {
    title: "5. kubectl get nodes",
    description: "Verify the status of nodes in the cluster, checking for node failures.",
  },
  {
    title: "6. kubectl drain <node_name> --ignore-daemonsets",
    description: "Safely evacuate and cordon a node for recovery operations.",
  },
  {
    title: "7. kubectl cordon <node_name>",
    description: "Mark a node as unschedulable to prevent new pods from being scheduled during recovery.",
  },
  {
    title: "8. kubectl delete pod <pod_name> --grace-period=0 --force",
    description: "Forcefully delete a crashed pod to restart it or clear it for recovery.",
  },
  {
    title: "9. kubectl rollout undo deployment <deployment_name>",
    description: "Roll back a deployment in case a new rollout causes crashes.",
  },
  {
    title: "10. kubectl exec -it <pod_name> -- /bin/sh",
    description: "Access a container to debug and resolve application issues directly inside the pod.",
  },
  {
    title: "11. kubectl get componentstatuses",
    description: "Check the health of core cluster components like etcd, kube-apiserver, and more.",
  },
  {
    title: "12. kubectl top nodes",
    description: "Monitor node resource usage to detect resource exhaustion causing crashes.",
  },
  {
    title: "13. kubectl top pods --all-namespaces",
    description: "Check pod resource usage across namespaces, identifying bottlenecks leading to crashes.",
  },
  {
    title: "14. kubectl delete node <node_name>",
    description: "Remove a failed node from the cluster to allow recovery operations.",
  },
  {
    title: "15. etcdctl --endpoints=https://etcd-server:2379 snapshot restore backup.db",
    description: "Restore etcd from a snapshot in case of etcd failure.",
  },
  {
    title: "16. kubectl apply -f backup.yaml",
    description: "Reapply configurations from a backup manifest during recovery.",
  },
  {
    title: "17. kubectl taint nodes <node_name> key=value:NoSchedule",
    description: "Prevent scheduling on a node experiencing issues during recovery.",
  },
  {
    title: "18. kubectl get endpoints <service_name>",
    description: "Verify service endpoints during recovery to ensure services are resolving correctly.",
  },
];

export default function KubernetesCommandsAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Top Kubernetes Crash Recovery Commands
      </h1>
      <div className="space-y-4">
        {commands.map((cmd, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-blue-50 transition"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-800">{cmd.title}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-gray-50 text-gray-700 text-sm">
                {cmd.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
