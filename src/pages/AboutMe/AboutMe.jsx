import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-soft flex items-center justify-center px-4 py-12 pt-36">
      <div className="glass-lg shadow-soft-xl p-8 md:p-12 w-full max-w-[896px] animate-fade-in relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary-300/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary-300/20 blur-[80px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent relative z-10">
          About Me
        </h2>

        <div className="relative z-10 space-y-6">
          <p className="text-neutral-700 leading-relaxed text-lg">
            Throughout my career, I have successfully led numerous projects involving VMware vSphere, ESXi, vCenter, and other related technologies. I have a proven track record of assessing client requirements, developing comprehensive project plans, and executing them seamlessly. My ability to troubleshoot complex issues, perform system upgrades, and ensure high availability has consistently resulted in enhanced performance and reliability for my clients.
          </p>

          <p className="text-neutral-700 leading-relaxed text-lg">
            I am dedicated to helping organizations harness the power of virtualized environments to optimize their IT infrastructure. My deep expertise in VMware technologies, coupled with a strong background in infrastructure management, enables me to design, implement, and maintain robust and scalable solutions tailored to meet the unique needs of diverse clients.
          </p>
        </div>

        <div className="glass shadow-soft-md rounded-xl p-6 mt-10 relative z-10 border border-white/50 bg-white/40">
          <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary-500 rounded-full inline-block"></span>
            Key Skill Sets
          </h3>
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
