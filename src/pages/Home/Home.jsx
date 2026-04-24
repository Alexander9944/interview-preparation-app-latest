import React from "react";
import CloudPlatformGuides from "../../components/CloudPlatformGuides/CloudPlatformGuides.jsx";

const Home = () => {
  return (
    <>
      <div className="pt-[160px] sm:pt-[120px] md:pt-[160px] px-4 md:px-8 lg:px-16 bg-gradient-soft min-h-screen flex items-center">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center w-full max-w-[1280px] mx-auto">
          {/* Left content */}
          <div className="space-y-6 text-center md:text-left animate-slide-up">
            <p className="text-sm sm:text-base tracking-widest text-primary-600 font-bold uppercase drop-shadow-sm">
              Cloud & On-Premise Infrastructure Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-tight">
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                On-Premise & Cloud Solutions
              </span>
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed">
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
              className="w-4/5 sm:w-3/4 md:w-full max-w-[448px] rounded-lg shadow-lg"
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
