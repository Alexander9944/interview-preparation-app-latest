import React from "react";

const Jenkins = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-8">
          Jenkins Concepts
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border-l-8 border-red-500">
          <div className="overflow-y-auto max-h-[600px] space-y-6 text-gray-800 leading-relaxed">

            <section>
              <p>
                <strong>Jenkins</strong> is a self-contained, open-source automation server used to automate tasks like building, testing, and deploying software. It supports installation via native system packages, Docker, or directly via Java Runtime Environment. Jenkins originated from Hudson with a new name.
              </p>
              <p>
                Jenkins enables <strong>continuous integration</strong> by serving as a central build system. It runs on a server, executing workflows triggered by code changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-red-600">
                Continuous Integration Workflow:
              </h2>
              <p>
                As Martin Fowler defined, Continuous Integration (CI) is a practice where team members frequently merge their code (often daily). Each integration is verified by automated builds and tests to catch errors early.
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Integrated – All changes are merged into the project</li>
                <li>Built – Code is compiled into executables or packages</li>
                <li>Tested – Automated test suites are executed</li>
                <li>Archived – Artifacts are versioned and stored</li>
                <li>Deployed – Pushed to a testing or production environment</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-red-600">
                Continuous Integration Tools:
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Code Repositories:</strong> SVN, Mercurial, Git</li>
                <li><strong>Build Systems:</strong> Jenkins, Bamboo, Cruise Control</li>
                <li><strong>Test Frameworks:</strong> JUnit, Cucumber, CppUnit</li>
                <li><strong>Artifact Repositories:</strong> Nexus, Artifactory, Archiva</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-red-600">
                Jenkins Tool Workflow:
              </h2>
              <p>
                Jenkins is a Java-based Continuous Build System branched from Hudson. It runs in servlet containers such as Glassfish or Tomcat and supports over 400 plugins including SCM, Testing, Notifications, Reporting, Artifact Saving, Triggers, and External Integrations.
              </p>
              <p>
                <strong>History:</strong>  
                <br />
                • 2005 – Hudson released by Kohsuke Kawaguchi (Sun Microsystems)  
                <br />
                • 2010 – Oracle acquired Sun Microsystems  
                <br />
                • Due to naming dispute, Hudson was renamed to Jenkins
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-red-600">
                Key Features of Jenkins:
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Generates test reports</li>
                <li>Integrates with multiple version control systems</li>
                <li>Deploys directly to production or test environments</li>
                <li>Supports hundreds of plugins for automation</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Jenkins;
