import React from "react";

const VMware = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          VMware Concepts
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border-l-8 border-blue-500">
          <div className="overflow-y-auto max-h-[600px] space-y-6 text-gray-800 leading-relaxed">
            <section>
              <p>
                <strong>VMware High Availability (HA):</strong> Used when any of
                the ESXi hosts inside a cluster fails. All virtual machines
                running on it are restarted on different VMware vSphere ESXi
                hosts within the same datacenter or cluster. HA is completely
                dependent on vMotion to migrate the VMs between ESXi hosts.
              </p>

              <p>
                <strong>VMware vSphere Distributed Resource Scheduler (DRS):</strong>{" "}
                A workload-centric scheduler that handles resource balancing.
                While HA restarts VMs during host failure, DRS evaluates and
                recommends optimal resource placement (CPU/Memory).
              </p>

              <p>
                <strong>VMware vSphere vMotion:</strong> Allows live migration of VMs
                without downtime. For example, if you're editing a document in a
                VM, vMotion can migrate it from ESXi A to B without interrupting
                your session.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                vMotion Network Requirements:
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>At least one physical network adapter</li>
                <li>Dedicated bandwidth and proper security</li>
                <li>Minimum 250 Mbps bandwidth (higher is better)</li>
                <li>Recommended 10GB adapter (1GB is possible)</li>
                <li>Low latency &lt; 10ms</li>
                <li>Long-distance vMotion: Max 150ms RTT</li>
                <li>All ESXi must share the same subnet</li>
                <li>VMs should remain on the same Layer 2 network</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                vMotion Prerequisites:
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Shared storage across all ESXi hosts</li>
                <li>vMotion-supported ESXi host licenses</li>
                <li>Storage must be SAN based</li>
                <li>Proper network configuration on all hosts</li>
                <li>VMKernel configuration on every host</li>
                <li>10GB adapters recommended during migration</li>
                <li>Enable Jumbo Frames for performance</li>
              </ul>
            </section>

            <section>
              <p>
                <strong>Zero Downtime Live Migration:</strong> vMotion allows live
                migration of running workloads across switches, clusters, and even
                clouds. Applications remain accessible, with network identity
                preserved. The memory state is transferred over high-speed
                networks, typically completing in &lt; 2 seconds over gigabit
                Ethernet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                Troubleshooting ESXi Host Not Responding:
              </h2>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Check power status using ILO/DRAC tools</li>
                <li>Verify IP/FQDN connectivity from vCenter</li>
                <li>Try reconnecting the host in vCenter</li>
              </ol>
              <p>
                If the ESXi host doesn’t respond to vCenter heartbeats, it shows
                "Not Responding". Check if it’s truly offline or disconnected.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Appears as "not responding" or disconnected</li>
                <li>VMs on the host appear greyed out</li>
                <li>vCenter error: "Cannot synchronize host &lt;fqdn&gt;"</li>
              </ul>
              <p>
                Additional checks: Network, restart agents, inspect host/VCSA logs,
                validate storage, resource usage, and vCenter health.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-600">
                Migration Steps:
              </h2>
              <p>
                Use Advanced Cross vCenter Server vMotion (XVM) for hot or cold
                migrations between vCenters — even those in different SSO domains.
                This requires Enterprise Plus license.
              </p>
              <p>
                During vMotion, the app remains live. Network settings stay
                intact. Active memory is transferred over high-speed links, and
                migration takes &lt; 2 seconds.
              </p>
              <p>
                With XVM, you can migrate VMs between vCenters using ‘Import VMs’
                or ‘Migrate’ options under Hosts &amp; Clusters.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VMware;
