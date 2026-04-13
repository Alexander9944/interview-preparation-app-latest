import React, { useState } from 'react';

const DevOpsCmds = () => {
  const categories = [
    {
      section: 'Basic Linux Commands',
      items: [
        'pwd - Print the current working directory.',
        'ls - List files and directories.',
        'cd - Change directory.',
        'touch - Create an empty file.',
        'mkdir - Create a new directory.',
        'rm - Remove files or directories.',
        'rmdir - Remove empty directories.',
        'cp - Copy files or directories.',
        'mv - Move or rename files and directories.',
        'cat - Display the content of a file.',
        'echo - Display a line of text.',
        'clear - Clear the terminal screen.'
      ]
    },
    {
      section: 'Intermediate Linux Commands',
      items: [
        'chmod - Change file permissions.',
        'chown - Change file ownership.',
        'find - Search for files and directories.',
        'grep - Search for text in a file.',
        'wc - Count lines, words, and characters in a file.',
        'head - Display the first few lines of a file.',
        'tail - Display the last few lines of a file.',
        'sort - Sort the contents of a file.',
        'uniq - Remove duplicate lines from a file.',
        'diff - Compare two files line by line.',
        'tar - Archive files into a tarball.',
        'zip/unzip - Compress and extract ZIP files.'
      ]
    },
    {
      section: 'Advanced Linux Commands',
      items: [
        'awk - Text processing and pattern scanning.',
    'sed - Stream editor for filtering and transforming text.',
    'cut - Remove sections from each line of a file.',
    'tr - Translate or delete characters.',
    'xargs - Build and execute command lines from standard input.',
    'ln - Create symbolic or hard links.',
    'df -h - Display disk usage in human-readable format.',
    'free - Display memory usage.',
    'iostat - Display CPU and I/O statistics.',
    'netstat - Network statistics (use ss as modern alternative).',
    'ifconfig/ip - Configure network interfaces (use ip as modern alternative).',
    'iptables - Configure firewall rules.',
    'systemctl - Control the systemd system and service manager.',
    'journalctl - View system logs.',
    'crontab - Schedule recurring tasks.',
    'at - Schedule tasks for a specific time.',
    'uptime - Display system uptime.',
    'whoami - Display the current user.',
    'users - List all users currently logged in.',
    'hostname - Display or set the system hostname.',
    'env - Display environment variables.',
    'export - Set environment variables. '
      ]
    },
    {
  section: 'Networking Commands',
  items: [
    'ip addr - Display or configure IP addresses.',
    'ip route - Show or manipulate routing tables.',
    'traceroute - Trace the route packets take to a host.',
    'nslookup - Query DNS records.',
    'dig - Query DNS servers.',
    'ssh - Connect to a remote server via SSH.',
    'ftp - Transfer files using the FTP protocol.',
    'nmap - Network scanning and discovery.',
    'telnet - Communicate with remote hosts.',
    'netcat (nc) - Read/write data over networks.'
  ]
},
{
  section: 'File Management and Search',
  items: [
    'locate - Find files quickly using a database.',
    'stat - Display detailed information about a file.',
    'tree - Display directories as a tree.',
    'file - Determine a file’s type.',
    'basename - Extract the filename from a path.',
    'dirname - Extract the directory part of a path.'
  ]
},
{
  section: 'System Monitoring',
  items: [
    'vmstat - Display virtual memory statistics.',
    'htop - Interactive process viewer (alternative to top).',
    'lsof - List open files.',
    'dmesg - Print kernel ring buffer messages.',
    'uptime - Show how long the system has been running.',
    'iotop - Display real-time disk I/O by processes.'
  ]
},
{
  section: 'Package Management',
  items: [
    'apt - Package manager for Debian-based distributions.',
    'yum/dnf - Package manager for RHEL-based distributions.',
    'snap - Manage snap packages.',
    'rpm - Manage RPM packages.'
  ]
},
{
  section: 'Disk and Filesystem',
  items: [
    'mount/umount - Mount or unmount filesystems.',
    'fsck - Check and repair filesystems.',
    'mkfs - Create a new filesystem.',
    'blkid - Display information about block devices.',
    'lsblk - List information about block devices.',
    'parted - Manage partitions interactively.'
  ]
},
{
  section: 'Scripting and Automation',
  items: [
    'bash - Command interpreter and scripting shell.',
    'sh - Legacy shell interpreter.',
    'cron - Automate tasks.',
    'alias - Create shortcuts for commands.',
    'source - Execute commands from a file in the current shell.'
  ]
},
{
  section: 'Development and Debugging',
  items: [
    'gcc - Compile C programs.',
    'make - Build and manage projects.',
    'strace - Trace system calls and signals.',
    'gdb - Debug programs.',
    'git - Version control system.',
    'vim/nano - Text editors for scripting and editing.'
  ]
},
{
  section: 'Other Useful Commands',
  items: [
    'uptime - Display system uptime.',
    'date - Display or set the system date and time.',
    'cal - Display a calendar.',
    'man - Display the manual for a command.',
    'history - Show previously executed commands.',
    'alias - Create custom shortcuts for commands.'
  ]
},






{
  section: 'Git Commands',
  items: [
    'git init - Initializes a new Git repository in the current directory. Example: git init',
    'git clone - Copies a remote repository to the local machine. Example: git clone https://github.com/user/repo.git',
    'git status - Displays the state of the working directory and staging area. Example: git status',
    'git add - Adds changes to the staging area. Example: git add file.txt',
    'git commit - Records changes to the repository. Example: git commit -m "Initial commit"',
    'git config - Configures user settings, such as name and email. Example: git config --global user.name "Your Name"',
    'git log - Shows the commit history. Example: git log',
    'git show - Displays detailed information about a specific commit. Example: git show <commit-hash>',
    'git diff - Shows changes between commits, the working directory, and the staging area. Example: git diff',
    'git reset - Unstages changes or resets commits. Example: git reset HEAD file.txt',
    'git branch - Lists branches or creates a new branch. Example: git branch feature-branch',
    'git checkout - Switches between branches or restores files. Example: git checkout feature-branch',
    'git switch - Switches branches (modern alternative to git checkout). Example: git switch feature-branch',
    'git merge - Combines changes from one branch into another. Example: git merge feature-branch',
    'git rebase - Moves or combines commits from one branch onto another. Example: git rebase main',
    'git cherry-pick - Applies specific commits from one branch to another. Example: git cherry-pick <commit-hash>',
    'git remote - Manages remote repository connections. Example: git remote add origin https://github.com/user/repo.git',
    'git push - Sends changes to a remote repository. Example: git push origin main',
    'git pull - Fetches and merges changes from a remote repository. Example: git pull origin main',
    'git fetch - Downloads changes from a remote repository without merging. Example: git fetch origin',
    'git remote -v - Lists the URLs of remote repositories. Example: git remote -v',
    'git stash - Temporarily saves changes not yet committed. Example: git stash',
    'git stash pop - Applies stashed changes and removes them from the stash list. Example: git stash pop',
    'git stash list - Lists all stashes. Example: git stash list',
    'git clean - Removes untracked files from the working directory. Example: git clean -f',
    'git tag - Creates a tag for a specific commit. Example: git tag -a v1.0 -m "Version 1.0"',
    'git tag -d - Deletes a tag. Example: git tag -d v1.0',
    'git push --tags - Pushes tags to a remote repository. Example: git push origin --tags',
    'git bisect - Finds the commit that introduced a bug. Example: git bisect start',
    'git blame - Shows which commit and author modified each line of a file. Example: git blame file.txt',
    'git reflog - Shows a log of changes to the tip of branches. Example: git reflog',
    'git submodule - Manages external repositories as submodules. Example: git submodule add https://github.com/user/repo.git',
    'git archive - Creates an archive of the repository files. Example: git archive --format=zip HEAD > archive.zip',
    'git gc - Cleans up unnecessary files and optimizes the repository. Example: git gc',
    'gh auth login - Logs into GitHub via the command line. Example: gh auth login',
    'gh repo clone - Clones a GitHub repository. Example: gh repo clone user/repo',
    'gh issue list - Lists issues in a GitHub repository. Example: gh issue list',
    'gh pr create - Creates a pull request on GitHub. Example: gh pr create --title "New Feature" --body "Description of the feature"',
    'gh repo create - Creates a new GitHub repository. Example: gh repo create my-repo'
  ]
},

   {
  section: 'Docker Commands',
  items: [
    'docker --version - Displays the installed Docker version. Example: docker --version',
    'docker info - Shows system-wide information about Docker, such as the number of containers and images. Example: docker info',
    'docker pull - Downloads an image from a Docker registry (default: Docker Hub). Example: docker pull ubuntu:latest',
    'docker images - Lists all downloaded images. Example: docker images',
    'docker run - Creates and starts a new container from an image. Example: docker run -it ubuntu bash',
    'docker ps - Lists running containers. Example: docker ps',
    'docker ps -a - Lists all containers, including stopped ones. Example: docker ps -a',
    'docker stop - Stops a running container. Example: docker stop container_name',
    'docker start - Starts a stopped container. Example: docker start container_name',
    'docker rm - Removes a container. Example: docker rm container_name',
    'docker rmi - Removes an image. Example: docker rmi image_name',
    'docker exec - Runs a command inside a running container. Example: docker exec -it container_name bash',
    'docker build - Builds an image from a Dockerfile. Example: docker build -t my_image .',
    'docker commit - Creates a new image from a container’s changes. Example: docker commit container_name my_image:tag',
    'docker logs - Fetches logs from a container. Example: docker logs container_name',
    'docker inspect - Returns detailed information about an object (container or image). Example: docker inspect container_name',
    'docker stats - Displays live resource usage statistics of running containers. Example: docker stats',
    'docker cp - Copies files between a container and the host. Example: docker cp container_name:/path/in/container /path/on/host',
    'docker rename - Renames a container. Example: docker rename old_name new_name',
    'docker network ls - Lists all Docker networks. Example: docker network ls',
    'docker network create - Creates a new Docker network. Example: docker network create my_network',
    'docker network inspect - Shows details about a Docker network. Example: docker network inspect my_network',
    'docker network connect - Connects a container to a network. Example: docker network connect my_network container_name',
    'docker volume ls - Lists all Docker volumes. Example: docker volume ls',
    'docker volume create - Creates a new Docker volume. Example: docker volume create my_volume',
    'docker volume inspect - Provides details about a volume. Example: docker volume inspect my_volume',
    'docker volume rm - Removes a Docker volume. Example: docker volume rm my_volume',
    'docker-compose up - Starts services defined in a docker-compose.yml file. Example: docker-compose up',
    'docker-compose down - Stops and removes services defined in a docker-compose.yml file. Example: docker-compose down',
    'docker-compose logs - Displays logs for services managed by Docker Compose. Example: docker-compose logs',
    'docker-compose exec - Runs a command in a service’s container. Example: docker-compose exec service_name bash',
    'docker save - Exports an image to a tar file. Example: docker save -o my_image.tar my_image:tag',
    'docker load - Imports an image from a tar file. Example: docker load < my_image.tar',
    'docker export - Exports a container’s filesystem as a tar file. Example: docker export container_name > container.tar',
    'docker import - Creates an image from an exported container. Example: docker import container.tar my_new_image',
    'docker system df - Displays disk usage by Docker objects. Example: docker system df',
    'docker system prune - Cleans up unused Docker resources (images, containers, volumes, networks). Example: docker system prune',
    'docker tag - Assigns a new tag to an image. Example: docker tag old_image_name new_image_name',
    'docker push - Uploads an image to a Docker registry. Example: docker push my_image:tag',
    'docker login - Logs into a Docker registry. Example: docker login',
    'docker logout - Logs out of a Docker registry. Example: docker logout',
    'docker swarm init - Initializes a Docker Swarm mode cluster. Example: docker swarm init',
    'docker service create - Creates a new service in Swarm mode. Example: docker service create --name my_service nginx',
    'docker stack deploy - Deploys a stack using a Compose file in Swarm mode. Example: docker stack deploy -c docker-compose.yml my_stack',
    'docker stack rm - Removes a stack in Swarm mode. Example: docker stack rm my_stack',
    'docker checkpoint create - Creates a checkpoint for a container. Example: docker checkpoint create container_name checkpoint_name',
    'docker checkpoint ls - Lists checkpoints for a container. Example: docker checkpoint ls container_name',
    'docker checkpoint rm - Removes a checkpoint. Example: docker checkpoint rm container_name checkpoint_name'
  ]
},

   {
  section: 'Kubernetes Commands',
  items: [
    'kubectl version - Displays the Kubernetes client and server version. Example: kubectl version --short',
    'kubectl cluster-info - Shows information about the Kubernetes cluster. Example: kubectl cluster-info',
    'kubectl get nodes - Lists all nodes in the cluster. Example: kubectl get nodes',
    'kubectl get pods - Lists all pods in the default namespace. Example: kubectl get pods',
    'kubectl get services - Lists all services in the default namespace. Example: kubectl get services',
    'kubectl get namespaces - Lists all namespaces in the cluster. Example: kubectl get namespaces',
    'kubectl describe pod - Shows detailed information about a specific pod. Example: kubectl describe pod pod-name',
    'kubectl logs - Displays logs for a specific pod. Example: kubectl logs pod-name',
    'kubectl create namespace - Creates a new namespace. Example: kubectl create namespace my-namespace',
    'kubectl delete pod - Deletes a specific pod. Example: kubectl delete pod pod-name',
    
    // Intermediate Kubernetes Commands
    'kubectl apply - Applies changes defined in a YAML file. Example: kubectl apply -f deployment.yaml',
    'kubectl delete - Deletes resources defined in a YAML file. Example: kubectl delete -f deployment.yaml',
    'kubectl scale - Scales a deployment to the desired number of replicas. Example: kubectl scale deployment my-deployment --replicas=3',
    'kubectl expose - Exposes a pod or deployment as a service. Example: kubectl expose deployment my-deployment --type=LoadBalancer --port=80',
    'kubectl exec - Executes a command in a running pod. Example: kubectl exec -it pod-name -- /bin/bash',
    'kubectl port-forward - Forwards a local port to a port in a pod. Example: kubectl port-forward pod-name 8080:80',
    'kubectl get configmaps - Lists all ConfigMaps in the namespace. Example: kubectl get configmaps',
    'kubectl get secrets - Lists all Secrets in the namespace. Example: kubectl get secrets',
    'kubectl edit - Edits a resource definition directly in the editor. Example: kubectl edit deployment my-deployment',
    'kubectl rollout status - Displays the status of a deployment rollout. Example: kubectl rollout status deployment/my-deployment',
    
    // Advanced Kubernetes Commands
    'kubectl rollout undo - Rolls back a deployment to a previous revision. Example: kubectl rollout undo deployment/my-deployment',
    'kubectl top nodes - Shows resource usage for nodes. Example: kubectl top nodes',
    'kubectl top pods - Displays resource usage for pods. Example: kubectl top pods',
    'kubectl cordon - Marks a node as unschedulable. Example: kubectl cordon node-name',
    'kubectl uncordon - Marks a node as schedulable. Example: kubectl uncordon node-name',
    'kubectl drain - Safely evicts all pods from a node. Example: kubectl drain node-name --ignore-daemonsets',
    'kubectl taint - Adds a taint to a node to control pod placement. Example: kubectl taint nodes node-name key=value:NoSchedule',
    'kubectl get events - Lists all events in the cluster. Example: kubectl get events',
    'kubectl apply -k - Applies resources from a kustomization directory. Example: kubectl apply -k ./kustomization-dir/',
    'kubectl config view - Displays the kubeconfig file. Example: kubectl config view',
    'kubectl config use-context - Switches the active context in kubeconfig. Example: kubectl config use-context my-cluster',
    'kubectl debug - Creates a debugging session for a pod. Example: kubectl debug pod-name',
    'kubectl delete namespace - Deletes a namespace and its resources. Example: kubectl delete namespace my-namespace',
    'kubectl patch - Updates a resource using a patch. Example: kubectl patch deployment my-deployment -p \'{"spec": {"replicas": 2}}\'',
    'kubectl rollout history - Shows the rollout history of a deployment. Example: kubectl rollout history deployment my-deployment',
    'kubectl autoscale - Automatically scales a deployment based on resource usage. Example: kubectl autoscale deployment my-deployment --cpu-percent=50 --min=1 --max=10',
    'kubectl label - Adds or modifies a label on a resource. Example: kubectl label pod pod-name environment=production',
    'kubectl annotate - Adds or modifies an annotation on a resource. Example: kubectl annotate pod pod-name description="My app pod"',
    'kubectl delete pv - Deletes a PersistentVolume (PV). Example: kubectl delete pv my-pv',
    'kubectl get ingress - Lists all Ingress resources in the namespace. Example: kubectl get ingress',
    'kubectl create configmap - Creates a ConfigMap from a file or literal values. Example: kubectl create configmap my-config --from-literal=key1=value1',
    'kubectl create secret - Creates a Secret from a file or literal values. Example: kubectl create secret generic my-secret --from-literal=password=myPassword',
    'kubectl api-resources - Lists all available API resources in the cluster. Example: kubectl api-resources',
    'kubectl api-versions - Lists all API versions supported by the cluster. Example: kubectl api-versions',
    'kubectl get crds - Lists all CustomResourceDefinitions (CRDs). Example: kubectl get crds'
  ]
},
{
  section: 'Helm Commands',
  items: [
    'helm help - Displays help for the Helm CLI or a specific command. Example: helm help',
    'helm version - Shows the Helm client and server version. Example: helm version',
    'helm repo add - Adds a new chart repository. Example: helm repo add stable https://charts.helm.sh/stable',
    'helm repo update - Updates all Helm chart repositories to the latest version. Example: helm repo update',
    'helm repo list - Lists all the repositories added to Helm. Example: helm repo list',
    'helm search hub - Searches for charts on Helm Hub. Example: helm search hub nginx',
    'helm search repo - Searches for charts in the repositories. Example: helm search repo stable/nginx',
    'helm show chart - Displays information about a chart, including metadata and dependencies. Example: helm show chart stable/nginx',
    
    'helm install - Installs a chart into a Kubernetes cluster. Example: helm install my-release stable/nginx',
    'helm upgrade - Upgrades an existing release with a new version of the chart. Example: helm upgrade my-release stable/nginx',
    'helm upgrade --install - Installs or upgrades a chart. Example: helm upgrade --install my-release stable/nginx',
    'helm uninstall - Uninstalls a release. Example: helm uninstall my-release',
    'helm list - Lists all the releases installed on the Kubernetes cluster. Example: helm list',
    'helm status - Displays the status of a release. Example: helm status my-release',
    
    'helm create - Creates a new Helm chart in a specified directory. Example: helm create my-chart',
    'helm lint - Lints a chart to check for common errors. Example: helm lint ./my-chart',
    'helm package - Packages a chart into a .tgz file. Example: helm package ./my-chart',
    'helm template - Renders Kubernetes YAML from a chart without installing. Example: helm template my-release ./my-chart',
    'helm dependency update - Updates dependencies in Chart.yaml. Example: helm dependency update ./my-chart',
    
    'helm rollback - Rolls back a release to a previous version. Example: helm rollback my-release 1',
    'helm history - Displays the history of a release. Example: helm history my-release',
    'helm get all - Gets all info for a release. Example: helm get all my-release',
    'helm get values - Displays the values used in a release. Example: helm get values my-release',
    'helm test - Runs tests defined in a chart. Example: helm test my-release',
    
    'helm repo remove - Removes a chart repository. Example: helm repo remove stable',
    'helm repo index - Creates or updates the index file for a repo. Example: helm repo index ./charts',
    
    'helm install --values - Installs a chart with custom values. Example: helm install my-release stable/nginx --values values.yaml',
    'helm upgrade --values - Upgrades a release with custom values. Example: helm upgrade my-release stable/nginx --values values.yaml',
    'helm install --set - Installs a chart with custom value set. Example: helm install my-release stable/nginx --set replicaCount=3',
    'helm upgrade --set - Upgrades a release with custom value set. Example: helm upgrade my-release stable/nginx --set replicaCount=5',
    
    'helm uninstall --purge - Removes a release and deletes associated resources. Example: helm uninstall my-release --purge',
    'helm template --debug - Renders manifests and includes debug output. Example: helm template my-release ./my-chart --debug',
    'helm install --dry-run - Simulates installation without applying. Example: helm install my-release stable/nginx --dry-run',
    'helm upgrade --dry-run - Simulates upgrade without applying. Example: helm upgrade my-release stable/nginx --dry-run',
    
    'helm list --namespace - Lists releases in a specific namespace. Example: helm list --namespace kube-system',
    'helm uninstall --namespace - Uninstalls a release from a specific namespace. Example: helm uninstall my-release --namespace kube-system',
    'helm install --namespace - Installs a chart into a specific namespace. Example: helm install my-release stable/nginx --namespace mynamespace',
    'helm upgrade --namespace - Upgrades a release in a specific namespace. Example: helm upgrade my-release stable/nginx --namespace mynamespace',
    
    'helm package --sign - Packages a chart and signs it using a GPG key. Example: helm package ./my-chart --sign --key my-key-id',
    'helm create --starter - Creates a new chart based on a starter template. Example: helm create --starter https://github.com/helm/charts.git',
    'helm push - Pushes a chart to a Helm chart repository. Example: helm push ./my-chart my-repo',
    
    'helm list -n - Lists releases in a namespace. Example: helm list -n kube-system',
    'helm install --kube-context - Installs a chart to a cluster defined in kubeconfig context. Example: helm install my-release stable/nginx --kube-context my-cluster',
    'helm upgrade --kube-context - Upgrades a release in a Kubernetes context. Example: helm upgrade my-release stable/nginx --kube-context my-cluster',
    
    'helm dependency build - Builds dependencies for a Helm chart. Example: helm dependency build ./my-chart',
    'helm dependency list - Lists all dependencies for a chart. Example: helm dependency list ./my-chart',
    
    'helm rollback --recreate-pods - Rolls back to previous version and recreates pods. Example: helm rollback my-release 2 --recreate-pods',
    'helm history --max - Limits number of versions shown in history. Example: helm history my-release --max 5'
  ]
},


    {
  section: 'Terraform Commands',
  items: [
    'terraform --help - Displays general help for Terraform CLI commands.',
    'terraform init - Initializes the working directory containing Terraform configuration files. It downloads the necessary provider plugins.',
    'terraform validate - Validates the Terraform configuration files for syntax errors or issues.',
    'terraform plan - Creates an execution plan, showing what actions Terraform will perform to make the infrastructure match the desired configuration.',
    'terraform apply - Applies the changes required to reach the desired state of the configuration. It will prompt for approval before making changes.',
    'terraform show - Displays the Terraform state or a plan in a human-readable format.',
    'terraform output - Displays the output values defined in the Terraform configuration after an apply.',
    'terraform destroy - Destroys the infrastructure defined in the Terraform configuration. It prompts for confirmation before destroying resources.',
    'terraform refresh - Updates the state file with the real infrastructure\'s current state without applying changes.',
    'terraform taint - Marks a resource for recreation on the next apply. Useful for forcing a resource to be recreated even if it hasn\'t been changed.',
    'terraform untaint - Removes the "tainted" status from a resource.',
    'terraform state - Manages Terraform state files, such as moving resources between modules or manually.',
    'terraform import - Imports existing infrastructure into Terraform management.',
    'terraform graph - Generates a graphical representation of Terraform\'s resources and their relationships.',
    'terraform providers - Lists the providers available for the current Terraform configuration.',
    'terraform state list - Lists all resources tracked in the Terraform state file.',
    'terraform backend - Configures the backend for storing Terraform state remotely (e.g., in S3, Azure Blob Storage, etc.).',
    'terraform state mv - Moves an item in the state from one location to another.',
    'terraform state rm - Removes an item from the Terraform state file.',
    'terraform workspace - Manages Terraform workspaces, which allow for creating separate environments within a single configuration.',
    'terraform workspace new - Creates a new workspace.',
    'terraform module - Manages and updates Terraform modules, which are reusable configurations.',
    'terraform init -get-plugins=true - Ensures that required plugins are fetched and available for modules.',
    'TF_LOG - Sets the logging level for Terraform debug output (e.g., TRACE, DEBUG, INFO, WARN, ERROR).',
    'TF_LOG_PATH - Directs Terraform logs to a specified file.',
    'terraform login - Logs into Terraform Cloud or Terraform Enterprise for managing remote backends and workspaces.',
    'terraform remote - Manages remote backends and remote state storage for Terraform configurations.',
    'terraform push - Pushes Terraform modules to a remote module registry.'
  ]
}

  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-white text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">DevOps Commands Cheat Sheet</h1>
      <div className="space-y-6">
        {categories.map((section, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-5 py-4 bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold text-lg flex justify-between items-center"
            >
              {section.section}
              <span className="text-xl">{expandedIndex === index ? '−' : '+'}</span>
            </button>
            {expandedIndex === index && (
              <ul className="list-disc list-inside px-6 py-4 bg-white space-y-2 text-gray-700 text-base sm:text-lg">
                {section.items.map((cmd, i) => (
                  <li key={i}>{cmd}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevOpsCmds;
