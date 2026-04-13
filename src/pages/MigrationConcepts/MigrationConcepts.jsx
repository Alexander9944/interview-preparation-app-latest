import React, { useState } from "react";

const migrationSteps = [
  {
    title: "1. Plan the Migration",
    content: `• Assessment: Identify the current environment (servers, databases, dependencies, and configurations).
• Inventory: Document application components and dependencies.
• Sizing: Determine AWS resources (EC2 instance types, RDS configurations, etc.) based on current usage.
• Network Design: Plan VPC setup, subnets, security groups, and connectivity.
• Backup Plan: Create a fallback plan for any issues during migration.`
  },
  {
    title: "2. Prepare the AWS Environment",
    content: `• VPC Setup: Create a VPC with subnets across multiple Availability Zones (AZs).
• Security: Configure security groups, IAM roles, and policies.
• Database Configuration: Set up an Amazon RDS instance or EC2-based database for the migration.
• AD Server: Use AWS Managed Microsoft AD or deploy your AD on EC2.
• Application Server: Launch EC2 instances and configure the operating system and required dependencies.`
  },
  {
    title: "3. Migrate Database",
    content: `• Backup: Create a backup of the current database.
• Export/Import: Use database migration tools (e.g., AWS DMS or native tools) to migrate data to AWS.
• Replication: Set up replication for real-time sync with the on-prem database.
• Validation: Verify data consistency and integrity post-migration.`
  },
  {
    title: "4. Migrate Application Server",
    content: `• Packaging: Package the application (e.g., as Docker containers, AMIs, or simple binaries).
• Deployment: Deploy on AWS EC2 or use Elastic Beanstalk.
• DNS Configuration: Update DNS records to point to the AWS environment.`
  },
  {
    title: "5. Migrate Active Directory (AD)",
    content: `• Replication: Create a replica of on-prem AD in AWS using the AD Trust setup.
• DNS Sync: Sync DNS entries between on-prem and AWS.
• Validation: Test authentication and resource access.`
  },
  {
    title: "6. Test and Validate",
    content: `• End-to-End Testing: Validate the full environment (app, DB, and AD).
• Performance Check: Use CloudWatch and address issues.
• Failover Testing: Simulate failure scenarios for HA/DR readiness.`
  },
  {
    title: "7. Cutover and Go Live",
    content: `• Schedule Downtime: Coordinate for minimal downtime.
• Final Sync: Perform a final DB sync and switch traffic to AWS.
• DNS Propagation: Update DNS (may take up to 24 hours).
• Monitoring: Monitor AWS resources post-migration.`
  },
  {
    title: "8. Post-Migration Optimization",
    content: `• Scaling: Implement auto-scaling policies.
• Security: Continuously improve security configurations.
• Cost Optimization: Use AWS Cost Explorer to optimize usage.`
  },
  {
    title: "Downtime Considerations",
    content: `• Database Migration: Plan a 2–4 hour window for final sync and cutover.
• DNS Propagation: ~15 minutes to 24 hours depending on TTL (use short TTLs during migration).`
  }
];

const MigrationConcepts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 pt-32">
      <h2 className="text-3xl font-bold mb-6 text-center">
        On-Prem to AWS Cloud Migration Guide
      </h2>

      <div className="mb-6 flex justify-center">
        <img
          src="migration_concepts.jpg"
          alt=" Migration Concepts"
          className="rounded-xl shadow-lg w-full max-w-3xl"
        />
      </div>

      {migrationSteps.map((step, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-2xl shadow-md mb-4 bg-white hover:shadow-lg transition duration-300"
        >
          <button
            onClick={() => toggleBox(index)}
            className="w-full text-left px-6 py-4 font-semibold text-xl bg-gray-100 rounded-t-2xl"
          >
            {step.title}
          </button>
          {openIndex === index && (
            <div className="p-6 whitespace-pre-wrap text-gray-700">
              {step.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MigrationConcepts;
