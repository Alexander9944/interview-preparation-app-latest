import React from "react";

const cloudGuides = [
  {
    title: "Getting Started with AWS EC2",
    description: "Learn how to launch and manage your first EC2 instance on Amazon Web Services.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "AWS",
    link: "/aws"
  },
  {
    title: "Infrastructure as Code with Terraform",
    description: "Explore how to automate your infrastructure deployment using Terraform.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    alt: "Azure",
    link: "/azure"
  },
  {
    title: "Modern Container Technologies",
    description: "Discover the power of containerization in modern application deployment.",
    img: "./vmware.png",
    alt: "VMware",
    link: "/vmware"
  },
  {
    title: "Google Cloud Fundamentals",
    description: "A beginner's guide to using Google Cloud services efficiently.",
    img: "./gcp.png",
    alt: "Google Cloud",
    link: "/gcp"
  }
];

const CloudPlatformGuides = () => {
  return (
    <section className="px-4 py-12 md:px-16 bg-[#CED6DD]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Cloud Platform Guides
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cloudGuides.map((guide, index) => (
          <a
            key={index}
            href={guide.link}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md transition transform hover:scale-105 hover:shadow-xl border border-gray-200"
          >
            <div className="aspect-w-1 aspect-h-1 w-full flex flex-col justify-center items-center p-4">
              <img
                src={guide.img}
                alt={guide.alt}
                className="h-26 w-full mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
              />
           
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CloudPlatformGuides;
