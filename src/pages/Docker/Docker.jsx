import React, { useState } from "react";

const dockerSections = [
  {
    title: "Docker Overview",
    content: `Docker has become a cornerstone technology for modern software development and deployment, enabling teams to build, ship, and run applications in consistent, portable environments. However, working with Docker in real-world scenarios often presents challenges that go beyond basic usage. From debugging failing containers to implementing secure deployments, these challenges require a solid understanding of Docker's features and best practices.`
  },
  {
    title: "How do you debug a container that is failing to start?",
    content: `• Use the docker logs command to check the container's logs:
  docker logs <container_id>

• If the container exits immediately, use the --tail and --follow options to monitor the logs.

• Start the container in an interactive shell:
  docker run -it <image_name> /bin/bash

• Check the Dockerfile for misconfigurations like incorrect entrypoints.

• Use docker inspect <container_id> to review container settings.

• Override CMD or ENTRYPOINT to debug startup:
  docker run -it <image_name> /bin/bash`
  },
  {
    title: "What happens if you bind a volume that doesn’t exist on the host?",
    content: `• Docker automatically creates the directory on the host.

Example:
docker run -v /nonexistent:/app alpine

• Default permissions depend on the Docker user.

• Best practice: manually create directories with proper permissions before use.`
  },
  {
    title: "How do you reduce the size of a Docker image?",
    content: `1. Use minimal base images like alpine:
FROM alpine:latest

2. Combine commands into one RUN to reduce layers:
RUN apt-get update && apt-get install -y \\
    curl \\
    vim && \\
    apt-get clean

3. Remove cache in the same RUN layer:
RUN rm -rf /var/lib/apt/lists/*

4. Use .dockerignore to avoid sending unnecessary files to build context.`
  }
];

const Docker = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 pt-36">
         <h1 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-8">
          Docker
        </h1>
      {dockerSections.map((section, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-300"
        >
          <button
            onClick={() => toggleBox(index)}
            className="w-full text-left px-6 py-4 font-semibold text-xl bg-gray-100 rounded-t-2xl"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="p-6 whitespace-pre-wrap text-gray-700">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Docker;
