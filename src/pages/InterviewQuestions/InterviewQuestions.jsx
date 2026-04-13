import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Server,
  Cpu,
  Settings,
  GitBranch,
  MoreHorizontal,
} from "lucide-react";

const tabs = [
  {
    name: "Linux",
    to: "linux",
    icon: <Server size={18} className="inline-block mr-1" />,
    color: "bg-[#507d2a] hover:bg-[#6c8955]",
  },
  {
    name: "CCID",
    to: "ccid",
    icon: <Cpu size={18} className="inline-block mr-1" />,
    color: "bg-[#0a7e8c] hover:bg-[#445254]",
  },
  {
    name: "DevOps",
    to: "devops",
    icon: <Settings size={18} className="inline-block mr-1" />,
    color: "bg-[#324ab2] hover:bg-[#384062]",
  },
  {
    name: "Jenkins",
    to: "jenkins-interview-qsns",
    icon: <GitBranch size={18} className="inline-block mr-1" />,
    color: "bg-[#483d8b] hover:bg-[#3f3a62]",
  },
  {
    name: "DevOps Commands",
    to: "devopscmds",
    icon: <GitBranch size={18} className="inline-block mr-1" />,
    color: "bg-[#483d8b] hover:bg-[#3f3a62]",
  },
  {
    name: "Miscellaneous",
    to: "miscellaneous",
    icon: <MoreHorizontal size={18} className="inline-block mr-1" />,
    color: "bg-[#4682b4] hover:bg-[#527088]",
  },
];

const InterviewQuestions = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-12 pt-28 pb-12 scroll-smooth">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
        Interview Questions
      </h1>

      {/* Sticky tab bar on mobile */}
      <div className="sticky top-16 z-10 bg-gray-100 py-3">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {tabs.map(({ name, to, icon, color }) => (
            <Link
              key={to}
              to={to}
              className={`text-white px-5 sm:px-6 py-2 rounded transition text-sm sm:text-base flex items-center ${location.pathname.split("/").pop() === to
                  ? "ring-2 ring-offset-2 ring-blue-300"
                  : ""
                } ${color}`}
            >
              {icon}
              {name}
            </Link>
          ))}

        </div>
      </div>

      {/* Renders the selected subpage below */}
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default InterviewQuestions;
