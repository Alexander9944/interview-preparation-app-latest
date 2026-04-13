import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
    FaCloud, FaCogs, FaBook, FaBrain, FaListAlt, FaAws, FaMicrosoft, FaGoogle,
    FaServer, FaTools, FaDocker, FaProjectDiagram, FaGithub, FaJenkins, FaCodeBranch,
    FaLayerGroup, FaHome, FaUser, FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDevOpsDropdown, setShowDevOpsDropdown] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState({});

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
                setShowDropdown(false);
                setShowDevOpsDropdown(false);
                setActiveSubmenu(null);
                setActiveSubSubmenu(null);
                setMobileDropdown({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileDropdown = (key) => {
        setMobileDropdown((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <nav className="bg-[#274467] shadow-md fixed w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[100px]">
                    <div className="flex items-center h-[100px]">
                        <img
                            src="./logo-dummy.png"
                            alt="VCLOUDINFRA Logo"
                            className="h-32 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-10 items-center text-md font-medium">
                        <Link to='/' className="flex items-center gap-1 text-white hover:text-[#147BD1]">
                            <FaHome /> Home
                        </Link>
                        <Link to='/about-me' className="flex items-center gap-1 text-white hover:text-[#147BD1]">
                            <FaUser /> About Me
                        </Link>
                        <div
                            className="relative"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => {
                                setShowDropdown(false);
                                setActiveSubmenu(null);
                            }}
                        >
                            <Link to='/technical-concepts'>
                                <button className="flex items-center gap-1 text-white hover:text-[#147BD1]">
                                    <FaTools /> Technical Concepts ▼
                                </button>
                            </Link>
                            {showDropdown && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-64 bg-[#274467] shadow-lg z-50 rounded-md">
                                    <ul className="py-2 text-white text-sm">
                                        <li><Link to="/migration-concepts" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaListAlt /> Migration Concepts</Link></li>
                                        <li><Link to="/interview" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaBook /> Interview Questions</Link></li>
                                        <li><Link to="/ai-guide" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaBrain /> AI Guide</Link></li>
                                        <li><Link to="/reference-articles" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaBook /> Reference Articles</Link></li>
                                        <li className="relative" onMouseEnter={() => setActiveSubmenu("cloud")}>
                                            <span className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition cursor-pointer"><FaCloud /> Cloud▼</span>
                                            {activeSubmenu === "cloud" && (
                                                <ul className="absolute top-0 left-full ml-1 w-44 bg-[#274467] shadow-lg rounded-md z-50">
                                                    <li><Link to="/aws" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaAws /> AWS</Link></li>
                                                    <li><Link to="/azure" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaMicrosoft /> Azure</Link></li>
                                                    <li><Link to="/gcp" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaGoogle /> GCP</Link></li>
                                                    <li><Link to="/vmware" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaServer /> VMware</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => setShowDevOpsDropdown(true)}
                            onMouseLeave={() => {
                                setShowDevOpsDropdown(false);
                                setActiveSubSubmenu(null);
                            }}
                        >
                            <button className="flex items-center gap-1 text-white hover:text-[#147BD1]">
                                <FaCogs /> DevOps ▼
                            </button>
                            {showDevOpsDropdown && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-64 bg-[#274467] shadow-lg z-50 rounded-md">
                                    <ul className="py-2 text-white text-sm">
                                        <li><Link to="/ansible" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaTools /> Ansible</Link></li>
                                        <li className="relative" onMouseEnter={() => setActiveSubSubmenu("containers")} onMouseLeave={() => setActiveSubSubmenu(null)}>
                                            <span className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition cursor-pointer"><FaLayerGroup /> Containers▼</span>
                                            {activeSubSubmenu === "containers" && (
                                                <ul className="absolute top-0 left-full ml-1 w-52 bg-[#274467] shadow-lg z-50 rounded-md">
                                                    <li><Link to="/docker" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaDocker /> Docker</Link></li>
                                                    <li><Link to="/kubernetes" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaProjectDiagram /> Kubernetes</Link></li>
                                                    <li><Link to="/openshift" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaCodeBranch /> OpenShift</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li><Link to="/github" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaGithub /> GitHub</Link></li>
                                        <li><Link to="/jenkins" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaJenkins /> Jenkins</Link></li>
                                        <li><Link to="/terraform" className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-[#274467] cursor-pointer transition"><FaTools /> Terraform</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link to='/contact-us' className="flex items-center gap-1 text-white hover:text-[#147BD1]">
                            <FaEnvelope /> Contact Me
                        </Link>
                    </div>

                    {/* Toggle Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white px-4 py-4 shadow-md">
                    <Link to="/" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Home</Link>
                    <Link to="/about-me" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">About Me</Link>

                    <button onClick={() => toggleMobileDropdown("tc")} className="w-full text-left py-2 font-medium text-gray-700 hover:text-[#147BD1]">
                        Technical Concepts {mobileDropdown.tc ? "▲" : "▼"}
                    </button>
                    {mobileDropdown.tc && (
                        <div className="pl-4">
                            <Link to="/migration-concepts" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Migration Concepts</Link>
                            <Link to="/interview" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Interview Questions</Link>
                            <Link to="/ai-guide" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">AI Guide</Link>
                            <Link to="/reference-articles" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Reference Articles</Link>

                            <button onClick={() => toggleMobileDropdown("cloud")} className="w-full text-left py-2 text-gray-700 hover:text-[#147BD1]">
                                Cloud {mobileDropdown.cloud ? "▲" : "▼"}
                            </button>
                            {mobileDropdown.cloud && (
                                <div className="pl-4">
                                    <Link to="/aws" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">AWS</Link>
                                    <Link to="/azure" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Azure</Link>
                                    <Link to="/gcp" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">GCP</Link>
                                    <Link to="/vmware" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">VMware</Link>
                                </div>
                            )}
                        </div>
                    )}

                    <button onClick={() => toggleMobileDropdown("devops")} className="w-full text-left py-2 font-medium text-gray-700 hover:text-[#147BD1]">
                        DevOps {mobileDropdown.devops ? "▲" : "▼"}
                    </button>
                    {mobileDropdown.devops && (
                        <div className="pl-4">
                            <Link to="/ansible" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Ansible</Link>

                            <button onClick={() => toggleMobileDropdown("containers")} className="w-full text-left py-2 text-gray-700 hover:text-[#147BD1]">
                                Containers {mobileDropdown.containers ? "▲" : "▼"}
                            </button>
                            {mobileDropdown.containers && (
                                <div className="pl-4">
                                    <Link to="/docker" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Docker</Link>
                                    <Link to="/kubernetes" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Kubernetes</Link>
                                    <Link to="/openshift" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">OpenShift</Link>
                                </div>
                            )}
                            <Link to="/github" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">GitHub</Link>
                            <Link to="/jenkins" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Jenkins</Link>
                            <Link to="/terraform" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Terraform</Link>
                        </div>
                    )}

                    <Link to="/contact-us" className="block py-2 text-gray-700 hover:text-[#147BD1] hover:font-semibold">Contact Me</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
