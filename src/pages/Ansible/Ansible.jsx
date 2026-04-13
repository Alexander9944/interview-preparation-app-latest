import React from "react";

const ansibleNotes = [
  {
    title: "1. Introduction to Ansible",
    description: [
      "Ansible is an open-source IT automation tool that simplifies managing complex IT environments.",
      "It enables configuration, deployment, and orchestration of systems using YAML-based infrastructure as code (IaC).",
      "Features: Agentless (uses SSH), Human-readable YAML, Idempotent, Extensible (many modules), Cross-platform, Scalable.",
      "Use Cases: Configuration Management, Application Deployment, Orchestration, IaC, CI/CD.",
      "Why Use Ansible: Easy to learn, open-source (cost-effective), secure (SSH), supported by a strong community."
    ]
  },
  {
    title: "2. Setting Up Ansible",
    description: [
      "Requires a Control Node (Linux/macOS) and Managed Nodes (Linux/Windows).",
      "Install via: yum, apt, or pip. Verify using: ansible --version.",
      "Configure ansible.cfg with inventory path, remote user, and private key file.",
      "SSH Setup: ssh-keygen and ssh-copy-id to enable passwordless SSH.",
      "Windows Setup: Enable WinRM and install pywinrm.",
      "Validate setup: ansible all -m ping. Upgrade: pip install --upgrade ansible."
    ]
  },
  {
    title: "3. Ansible Ad-Hoc Commands",
    description: [
      "Structure: ansible [host-pattern] -m [module] -a \"[arguments]\"",
      "Common Tasks:",
      "- Ping: ansible all -m ping",
      "- Shell: ansible all -m shell -a \"uptime\"",
      "- File Management: touch, delete files using file module.",
      "- Copy Files: ansible all -m copy -a \"src=/etc/hosts dest=/tmp/hosts\"",
      "- Package: yum/apt to install/update packages.",
      "- Services: manage using service module.",
      "- Users: add/remove with user module.",
      "- Fetch Files: fetch remote files to local.",
      "- Gather Facts: ansible all -m setup",
      "- Chain Commands: ansible all -m shell -a \"mkdir /tmp/test && echo Hello > /tmp/test/file.txt\"",
      "Best Practices: Use playbooks for complex logic, test first, document frequently, use -b for sudo."
    ]
  }
];

const Ansible = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 pt-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">Ansible</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ansibleNotes.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ansible;
