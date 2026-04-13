import { FaBalanceScale, FaLink, FaSearch, FaRedo, FaLock, FaNetworkWired, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

export default function KubernetesServices() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pt-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Understanding Kubernetes Services: Connecting Your Applications
      </h1>

      {/* What is a Service */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">What is a Kubernetes Service?</h2>
        <p className="text-gray-700 text-lg">
          A <strong>Service</strong> is a Kubernetes object that provides a network identity and load balancing for accessing a group of pods 📈.
          It allows you to connect to your applications in a reliable and scalable way 🔗.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Benefits of Kubernetes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaBalanceScale className="text-2xl text-blue-500" />,
              title: "Load balancing",
              desc: "Distributes incoming traffic evenly across multiple pods ⚖️.",
            },
            {
              icon: <FaSearch className="text-2xl text-blue-500" />,
              title: "Service discovery",
              desc: "Enables pods to discover and communicate with each other 🔍.",
            },
            {
              icon: <FaRedo className="text-2xl text-blue-500" />,
              title: "Scalability",
              desc: "Easily add or remove pods as needed 🔁.",
            },
            {
              icon: <FaLink className="text-2xl text-blue-500" />,
              title: "Flexibility",
              desc: "Supports multiple protocols like HTTP, TCP, and UDP 📈.",
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex gap-4">
              <div>{benefit.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Services */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Types of Kubernetes Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              icon: <FaLock className="text-xl text-purple-500" />,
              title: "ClusterIP",
              desc: "Exposes the Service on a cluster-internal IP address 🔒.",
            },
            {
              icon: <FaNetworkWired className="text-xl text-purple-500" />,
              title: "NodePort",
              desc: "Exposes the Service on a specific port on each Node 🌐.",
            },
            {
              icon: <FaBalanceScale className="text-xl text-purple-500" />,
              title: "LoadBalancer",
              desc: "Exposes the Service externally using a cloud provider's load balancer ⚖️.",
            },
            {
              icon: <FaExternalLinkAlt className="text-xl text-purple-500" />,
              title: "ExternalName",
              desc: "Maps the Service to a DNS name 🔗.",
            },
          ].map((type, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex gap-4">
              <div>{type.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
