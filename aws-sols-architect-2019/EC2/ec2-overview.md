#### Overview
Elastic Cloud Computer is a web service that provides resizable computer capacity in the cloud. It reduces the time required to option and boot new server instances to minutes, allowing you to quickly scale capacity, both up and odwn, as your computing requirements change.

#### Creating an EC2 instance
- Launch Instance
- Choose Amazon Machine Image (virtual machine)
  - Linux flavor, etc.
- Choose instance type
  - Choose free tier if you're stingy
- Configure instance details
  - Select number to launch
  - Purchasing options: can bid on spot instances here
  - Network: allows VPC selection (keep default if you don't have a VPC set up)
  - Subnet: choose availability zone (or keep no preference)
  - Auto-assign public IP: keep default
  - Placement group: keep unchecked (it's for high-performance computing)
  - Capacity reservations: reserve capacity in specific availability zone (keep default)
  - IAM roles: set or keep none
  - Shutdown behavior: what we want done with the EC2 instance on shutdown
  - Termination protection: toggle protection for accidental termination, if you want
  - Monitoring: enables CloudWatch logs at a finer-grained scale (not free tier)
  - Tenancy: dedicated instance or shared hardware
  - Elastic Inference: enables accelerator (not free tier)
  - Advanced details: scripts can be passed here
- Add storage
  - Volume type: general purpose sdd, provisional ssd, and magnetic. The first volume selected is the root valume and can only launched on ssd or magnetic; additional volumes have different options.
  - Optional: encrypt volume (can't encrypt root device volme on launch, only additional volumes)
- Add tags
  - Optional tags go here
- Security groups
  - Virtual firewall that allows communication over particular ports.
  - Set SSH/HTTP/etc ports
    - Source IPs can be set; this is where you'd lock down your ssh port to a partciular IP or range of IPs.
- Select/create key pair and launch!
  - Select or create a key pair to attach to this instance. These allow you to access your EC2 instance.

#### SSHing into your EC2 instance
- Find your `.pem`
- Assuming you just created the pair from the above instructions on launching an EC2 instance, `CHMOD 400 key-name.pem`
  - Makes your `.pem` read-only so you don't accidentally overwrite or delete it
- `ssh ec2-user@<ip-here> -i key-name.pem`
  - If you have trouble (e.g., on public wifi), port 22 might be blocked
- Do whatever you want: update the AMI's system packages, check out any running processes, install something, etc.

#### Instance types
|Family|Speciality|Use Case|
|--|--|--|
|F1|Field Programmable Gate Array|Genomics research, financial analytics, real-time video processing, big data, etc.|
|I3|High Speed Storage|NoSQL DBs, data warehousing, etc.|
|G3|Graphics Intensive|Video encoding, 3D application streaming|
|H1|High Disk Throughput|MapReduce-based workloads, distributed file systems|
|T3|Lowest Cost, General Purpose|Web servers, small DBs|
|D2|Dense Storage|Fileservers, data warehousing, Hadoop|
|R5|Memory Optimized|Memory intensive apps/DBs|
|M5|General Purpose|Application servers|
|C5|Compute Optimized|CPU intensive apps/DBs|
|P3|Graphhics/General Purpose GPU|Machine learning, cryto hashing|
|X1|Memory Optimized|SAP HANA/Apache Spark, etc.|
|Z1D|High Compute, High Memory|Electronic design automation, certain relational DBs with high per-core licensing costs|
|A1|ARM-based workloads|Scale-out workloads such as web-servers|
|U6tb1|Bare Metal|Bare metal capabilities that eliminate virtualization overheadd|

Letters mark the type and numbers mark the generation. Numbers will change, but the letters won't.

#### Pricing
##### On demand
Pay a fixed rate by the hour (or second) with no commitment.

##### Reserved
Reserve a particular capacity at a decent discount for what would be the hourly rate; terms are 1 or 3 years.

##### Spot
Bid whatever price you want for instance capacity that's not being used in the AWS infrastructure. Great if you're apps have flexible start/end times.

##### Dedicated hosts
Physical EC2 servers dedicated to your use. They help reduce cost by allowing you to use your existing server-bound software licenses (e.g., Oracle, government).


