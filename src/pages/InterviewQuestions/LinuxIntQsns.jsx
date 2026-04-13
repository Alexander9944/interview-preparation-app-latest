import { useState } from "react";

const Linux = () => {
  const categories = [
    {
      title: "🔧 General Linux Concepts",
      questions: [
        "Explain the Linux boot process.",
        "How do you manage disk partitions in Linux?",
        "What are inodes in Linux?",
        "How do you check system uptime and load average?",
        "Explain the difference between hard links and soft links.",
        "What is the purpose of the /etc/fstab file?",
        "How do you change the hostname of a Linux system?",
        "What is the difference between cron and anacron?",
        "How do you troubleshoot file permission issues?",
        "What is the difference between df and du commands?",
      ],
    },
    {
      title: "⚙️ System Administration",
      questions: [
        "How do you manage system logs in Linux?",
        "Explain the concept of runlevels and systemd targets.",
        "How do you schedule tasks using at and cron?",
        "What are the steps to recover a forgotten root password?",
        "How do you add and remove swap space?",
        "How do you extend a filesystem in Linux?",
        "What are kernel modules, and how do you load/unload them?",
        "How do you manage user quotas in Linux?",
        "How do you manage time synchronization using chrony or ntpd?",
        "What are the steps to troubleshoot a failed service?",
        // Added 21 new questions
        "Are you aware of configuration of RAID.",
        "Suppose a Linux machine is running on RHEL7.9 and want to upgrade to 9.4",
        "Suppose you have two different type of datacentres A and B, if your app running on DC A",
        "Due to power issue, app stopped on DC A, how you configure to run app on secondary server.",
        "Which HA tools, you have worked on.",
        "Server is able to ping, but unable to SSH via remote.",
        "If you hit df -kh command, server is hanging, what are the reasons.",
        "Do you have any idea about Daemon services",
        "If Daemon services file is corrupted how to recover it.",
        "I want to check the daemon level troubleshooting, how will you do that.",
        "How many types of special permissions available",
        "What is mean by UUID and GUID.",
        "Suppose you have file/directory, you need to set the UUID how?",
        "What is difference between soft link and hard link.",
        "In which condition, we will use above links.",
        "Security team, reported a vulnerability, you need to fix it, how?",
        "How many types of patching.",
        "I want to install third party package, how?",
        "Have you heard of Epel, and how to install it, how to configure epel.",
        "What is your plan to roll back your application with minimal downtime.",
        "You have one directory, size 1TB, you need to identify how many files present not updated last 15 days and size is around 10GB and I need to remove those file?",
      ],
    },
    {
      title: "🌐 Networking",
      questions: [
        "How do you configure a static IP address in Linux?",
        "What is the difference between ip and ifconfig commands?",
        "How do you troubleshoot network connectivity issues?",
        "How do you configure a firewall using iptables or firewalld?",
        "How do you check open ports on a Linux system?",
        "What is the purpose of the /etc/hosts file?",
        "How do you configure SSH for key-based authentication?",
        "How do you restrict SSH access for specific users?",
        "How do you set up port forwarding in Linux?",
        "What is the difference between netstat and ss commands?",
      ],
    },
    {
      title: "🔒 Security",
      questions: [
        "How do you secure a Linux server?",
        "What is SELinux, and how do you manage it?",
        "How do you use Fail2ban to prevent brute-force attacks?",
        "How do you set up file permissions and ownership for security?",
        "What is the purpose of the /etc/passwd and /etc/shadow files?",
        "How do you implement sudo policies for specific users?",
        "What is the difference between umask and chmod?",
        "How do you encrypt files or directories in Linux?",
        "How do you audit user activities on a Linux system?",
        "What tools do you use for vulnerability scanning in Linux?",
      ],
    },
    {
      title: "📈 Performance & Troubleshooting",
      questions: [
        "How do you monitor disk I/O in Linux?",
        "How do you analyze system performance using sar or vmstat?",
        "What is the purpose of the dmesg command?",
        "How do you identify and kill resource-heavy processes?",
        "How do you troubleshoot high CPU usage?",
        "How do you handle a full /var partition?",
        "How do you check for zombie processes?",
        "How do you trace a process in Linux using strace?",
        "How do you optimize the performance of a Linux server?",
        "How do you troubleshoot application errors using logs?",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">L2 Linux Interview Questions</h2>
      <p className="mb-6 text-gray-600 text-center">
        Prepare for your next Linux interview with these categorized questions.
      </p>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="font-semibold text-blue-700 text-base sm:text-lg">{category.title}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[1000px] p-4" : "max-h-0"
              } bg-white`}
            >
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                {category.questions.map((question, qIndex) => (
                  <li key={qIndex}>{question}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linux;
