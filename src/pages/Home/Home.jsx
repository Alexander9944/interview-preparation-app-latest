import React from "react";
import CloudPlatformGuides from "../../components/CloudPlatformGuides/CloudPlatformGuides.jsx";

const Home = () => {
  return (
    <>
      <div className=" pt-[200px] sm:pt-[150px] md:pt-[180px]  px-4 md:px-8 lg:px-16 bg-[#CED6DD] min-h-screen flex items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Left content */}
          <div className="space-y-6 md:pl-6 lg:pl-10 text-center md:text-left">
            <p className="text-base sm:text-lg tracking-wide text-[#6AA3C2] font-semibold uppercase">
              Cloud & On-Premise Infrastructure Engineer
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#274467] leading-tight">
              Transforming Ideas into{" "}
              <span className="text-[#147BD1]">On-Premise & Cloud Solutions.</span>
            </h1>
            <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
              Specializing in both on-premises & cloud infrastructure and passionate
              about architecting robust, secure, and scalable environments across both
              digital and physical landscapes. Whether building cloud-native apps or
              maintaining mission-critical on-premises systems, I design hybrid ecosystems
              that support performance, growth, and business continuity—from data centers
              to distributed cloud networks—along with DevOps practices to help businesses
              achieve their digital transformation goals.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="./Multi-clouds.png"
              alt="Cloud Logos Grid"
              className="w-4/5 sm:w-3/4 md:w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section below */}
      <CloudPlatformGuides />
    </>
  );
};

export default Home;
