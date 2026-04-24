import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    const [scrolled, setScrolled] = useState(false);
    
    const conceptsTimeoutRef = useRef(null);
    const devOpsTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

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

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            if (conceptsTimeoutRef.current) clearTimeout(conceptsTimeoutRef.current);
            if (devOpsTimeoutRef.current) clearTimeout(devOpsTimeoutRef.current);
        };
    }, []);

    const toggleMobileDropdown = (key) => {
        setMobileDropdown((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleConceptsMouseLeave = () => {
        conceptsTimeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
            setActiveSubmenu(null);
        }, 150);
    };

    const handleConceptsMouseEnter = () => {
        if (conceptsTimeoutRef.current) {
            clearTimeout(conceptsTimeoutRef.current);
        }
        setShowDropdown(true);
    };

    const handleDevOpsMouseLeave = () => {
        devOpsTimeoutRef.current = setTimeout(() => {
            setShowDevOpsDropdown(false);
            setActiveSubSubmenu(null);
        }, 150);
    };

    const handleDevOpsMouseEnter = () => {
        if (devOpsTimeoutRef.current) {
            clearTimeout(devOpsTimeoutRef.current);
        }
        setShowDevOpsDropdown(true);
    };

    const navLinkClass = "flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:text-primary-600 hover:bg-primary-50/80";
    const dropdownItemClass = "flex items-center gap-2 px-4 py-3 hover:bg-primary-50 text-neutral-700 transition-colors duration-200 cursor-pointer rounded-md";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "glass shadow-glass-lg backdrop-blur-lg bg-white/80 border-b border-white/20"
                    : "bg-gradient-to-r from-primary-50/95 to-secondary-50/95 backdrop-blur-sm border-b border-primary-100/50"
            }`}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[80px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img
                            src="./logo-dummy.png"
                            alt="VCLOUDINFRA Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            PrepHub
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {/* Home */}
                        <Link
                            to="/"
                            className={navLinkClass}
                        >
                            <FaHome className="w-4 h-4" />
                            <span>Home</span>
                        </Link>

                        {/* About Me */}
                        <Link
                            to="/about-me"
                            className={navLinkClass}
                        >
                            <FaUser className="w-4 h-4" />
                            <span>About</span>
                        </Link>

                        {/* Technical Concepts Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={handleConceptsMouseEnter}
                            onMouseLeave={handleConceptsMouseLeave}
                        >
                            <button className={`${navLinkClass} flex items-center`}>
                                <FaTools className="w-4 h-4" />
                                <span>Concepts</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showDropdown && (
                                <div className="absolute left-0 top-full mt-1 w-56 glass-lg shadow-glass-lg rounded-xl py-2 animate-slide-down">
                                    <Link to="/migration-concepts" className={dropdownItemClass}>
                                        <FaListAlt className="w-4 h-4 text-primary-600" />
                                        <span>Migration Concepts</span>
                                    </Link>
                                    <Link to="/interview" className={dropdownItemClass}>
                                        <FaBook className="w-4 h-4 text-primary-600" />
                                        <span>Interview Questions</span>
                                    </Link>
                                    <Link to="/ai-guide" className={dropdownItemClass}>
                                        <FaBrain className="w-4 h-4 text-primary-600" />
                                        <span>AI Guide</span>
                                    </Link>
                                    <Link to="/reference-articles" className={dropdownItemClass}>
                                        <FaBook className="w-4 h-4 text-primary-600" />
                                        <span>References</span>
                                    </Link>

                                    {/* Cloud Submenu */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setActiveSubmenu("cloud")}
                                        onMouseLeave={() => setActiveSubmenu(null)}
                                    >
                                        <div className={`${dropdownItemClass} border-t border-neutral-200 mt-1 pt-3`}>
                                            <FaCloud className="w-4 h-4 text-primary-600" />
                                            <span>Cloud Platforms</span>
                                            <ChevronDown className="w-4 h-4 ml-auto" />
                                        </div>

                                        {activeSubmenu === "cloud" && (
                                            <div className="absolute left-full top-0 ml-0 w-48 glass-lg shadow-glass-lg rounded-xl py-2 animate-slide-right">
                                                <Link to="/aws" className={dropdownItemClass}>
                                                    <FaAws className="w-4 h-4 text-orange-500" />
                                                    <span>AWS</span>
                                                </Link>
                                                <Link to="/azure" className={dropdownItemClass}>
                                                    <FaMicrosoft className="w-4 h-4 text-blue-500" />
                                                    <span>Azure</span>
                                                </Link>
                                                <Link to="/gcp" className={dropdownItemClass}>
                                                    <FaGoogle className="w-4 h-4 text-red-500" />
                                                    <span>GCP</span>
                                                </Link>
                                                <Link to="/vmware" className={dropdownItemClass}>
                                                    <FaServer className="w-4 h-4 text-green-600" />
                                                    <span>VMware</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* DevOps Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={handleDevOpsMouseEnter}
                            onMouseLeave={handleDevOpsMouseLeave}
                        >
                            <button className={`${navLinkClass} flex items-center`}>
                                <FaCogs className="w-4 h-4" />
                                <span>DevOps</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDevOpsDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showDevOpsDropdown && (
                                <div className="absolute left-0 top-full mt-1 w-56 glass-lg shadow-glass-lg rounded-xl py-2 animate-slide-down">
                                    <Link to="/ansible" className={dropdownItemClass}>
                                        <FaTools className="w-4 h-4 text-primary-600" />
                                        <span>Ansible</span>
                                    </Link>

                                    {/* Containers Submenu */}
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setActiveSubSubmenu("containers")}
                                        onMouseLeave={() => setActiveSubSubmenu(null)}
                                    >
                                        <div className={`${dropdownItemClass} border-t border-neutral-200 mt-1 pt-3`}>
                                            <FaLayerGroup className="w-4 h-4 text-primary-600" />
                                            <span>Containers</span>
                                            <ChevronDown className="w-4 h-4 ml-auto" />
                                        </div>

                                        {activeSubSubmenu === "containers" && (
                                            <div className="absolute left-full top-0 ml-0 w-48 glass-lg shadow-glass-lg rounded-xl py-2 animate-slide-right">
                                                <Link to="/docker" className={dropdownItemClass}>
                                                    <FaDocker className="w-4 h-4 text-blue-500" />
                                                    <span>Docker</span>
                                                </Link>
                                                <Link to="/kubernetes" className={dropdownItemClass}>
                                                    <FaProjectDiagram className="w-4 h-4 text-blue-600" />
                                                    <span>Kubernetes</span>
                                                </Link>
                                                <Link to="/openshift" className={dropdownItemClass}>
                                                    <FaCodeBranch className="w-4 h-4 text-red-600" />
                                                    <span>OpenShift</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    <Link to="/github" className={dropdownItemClass}>
                                        <FaGithub className="w-4 h-4 text-neutral-800" />
                                        <span>GitHub</span>
                                    </Link>
                                    <Link to="/jenkins" className={dropdownItemClass}>
                                        <FaJenkins className="w-4 h-4 text-red-600" />
                                        <span>Jenkins</span>
                                    </Link>
                                    <Link to="/terraform" className={dropdownItemClass}>
                                        <FaTools className="w-4 h-4 text-primary-600" />
                                        <span>Terraform</span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Contact Me */}
                        <Link
                            to="/contact-us"
                            className={navLinkClass}
                        >
                            <FaEnvelope className="w-4 h-4" />
                            <span>Contact</span>
                        </Link>

                        {/* CTA Button */}
                        <Link
                            to="/contact-us"
                            className="ml-2 px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:shadow-soft-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-primary-100 transition-colors duration-300"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-neutral-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-neutral-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden glass-lg border-t border-white/20 animate-slide-down">
                    <div className="max-w-[1280px] mx-auto px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium transition-colors"
                        >
                            <FaHome className="w-4 h-4" />
                            Home
                        </Link>

                        <Link
                            to="/about-me"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium transition-colors"
                        >
                            <FaUser className="w-4 h-4" />
                            About Me
                        </Link>

                        {/* Mobile Technical Concepts */}
                        <button
                            onClick={() => toggleMobileDropdown("tc")}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <FaTools className="w-4 h-4" />
                                Technical Concepts
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.tc ? 'rotate-180' : ''}`} />
                        </button>

                        {mobileDropdown.tc && (
                            <div className="pl-4 space-y-1">
                                <Link
                                    to="/migration-concepts"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaListAlt className="w-4 h-4 text-primary-500" />
                                    Migration Concepts
                                </Link>
                                <Link
                                    to="/interview"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaBook className="w-4 h-4 text-primary-500" />
                                    Interview Questions
                                </Link>
                                <Link
                                    to="/ai-guide"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaBrain className="w-4 h-4 text-primary-500" />
                                    AI Guide
                                </Link>
                                <Link
                                    to="/reference-articles"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaBook className="w-4 h-4 text-primary-500" />
                                    Reference Articles
                                </Link>

                                {/* Cloud Submenu Mobile */}
                                <button
                                    onClick={() => toggleMobileDropdown("cloud")}
                                    className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors border-t border-neutral-200 mt-2 pt-2"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaCloud className="w-4 h-4 text-primary-500" />
                                        Cloud
                                    </span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.cloud ? 'rotate-180' : ''}`} />
                                </button>

                                {mobileDropdown.cloud && (
                                    <div className="pl-4 space-y-1">
                                        <Link
                                            to="/aws"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaAws className="w-4 h-4 text-orange-500" />
                                            AWS
                                        </Link>
                                        <Link
                                            to="/azure"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaMicrosoft className="w-4 h-4 text-blue-500" />
                                            Azure
                                        </Link>
                                        <Link
                                            to="/gcp"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaGoogle className="w-4 h-4 text-red-500" />
                                            GCP
                                        </Link>
                                        <Link
                                            to="/vmware"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaServer className="w-4 h-4 text-green-600" />
                                            VMware
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Mobile DevOps */}
                        <button
                            onClick={() => toggleMobileDropdown("devops")}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium transition-colors border-t border-neutral-200 mt-2 pt-3"
                        >
                            <span className="flex items-center gap-2">
                                <FaCogs className="w-4 h-4" />
                                DevOps
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.devops ? 'rotate-180' : ''}`} />
                        </button>

                        {mobileDropdown.devops && (
                            <div className="pl-4 space-y-1">
                                <Link
                                    to="/ansible"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaTools className="w-4 h-4 text-primary-500" />
                                    Ansible
                                </Link>

                                {/* Containers Submenu Mobile */}
                                <button
                                    onClick={() => toggleMobileDropdown("containers")}
                                    className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors border-t border-neutral-200 mt-2 pt-2"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaLayerGroup className="w-4 h-4 text-primary-500" />
                                        Containers
                                    </span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown.containers ? 'rotate-180' : ''}`} />
                                </button>

                                {mobileDropdown.containers && (
                                    <div className="pl-4 space-y-1">
                                        <Link
                                            to="/docker"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaDocker className="w-4 h-4 text-blue-500" />
                                            Docker
                                        </Link>
                                        <Link
                                            to="/kubernetes"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaProjectDiagram className="w-4 h-4 text-blue-600" />
                                            Kubernetes
                                        </Link>
                                        <Link
                                            to="/openshift"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                        >
                                            <FaCodeBranch className="w-4 h-4 text-red-600" />
                                            OpenShift
                                        </Link>
                                    </div>
                                )}

                                <Link
                                    to="/github"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaGithub className="w-4 h-4 text-neutral-800" />
                                    GitHub
                                </Link>
                                <Link
                                    to="/jenkins"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaJenkins className="w-4 h-4 text-red-600" />
                                    Jenkins
                                </Link>
                                <Link
                                    to="/terraform"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-primary-50 text-neutral-600 transition-colors"
                                >
                                    <FaTools className="w-4 h-4 text-primary-500" />
                                    Terraform
                                </Link>
                            </div>
                        )}

                        <Link
                            to="/contact-us"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 w-full px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium transition-colors border-t border-neutral-200 mt-2 pt-3"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
