import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 pt-36">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Me</h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Throughout my career, I have successfully led numerous projects involving VMware vSphere, ESXi, vCenter, and other related technologies. I have a proven track record of assessing client requirements, developing comprehensive project plans, and executing them seamlessly. My ability to troubleshoot complex issues, perform system upgrades, and ensure high availability has consistently resulted in enhanced performance and reliability for my clients.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          I am dedicated to helping organizations harness the power of virtualized environments to optimize their IT infrastructure. My deep expertise in VMware technologies, coupled with a strong background in infrastructure management, enables me to design, implement, and maintain robust and scalable solutions tailored to meet the unique needs of diverse clients.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Skill Sets</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Infrastructure Design and Implementation</li>
            <li>Performance Optimization</li>
            <li>High Availability and Disaster Recovery</li>
            <li>Security and Compliance</li>
            <li>DevOps and InfraOps for Automation of Infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
