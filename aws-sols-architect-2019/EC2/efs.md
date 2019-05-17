#### Overview
Elastic File System is a file storage service for EC2 instances. It provides a simple interface that allows the creation and configuration of file systems. Storage capacity grows and shrinks automatically as you add or remove files. It differs from EBS by being able to be shared between different EC2 instances. EBS volumes can only be mounted to one EC2 instance. EBS also doesn't grow or shrink depending on adding or removing files, but EFS does. EFS support Network File System version 4 (NFSv4) and can support thousands of concurrent NFS connections.


#### Creating an EFS
- Pick a region
- Choose availability zones
- Can be encrypted
- Create file system
- It should now be mountable to EC2 instances
  - Both EFS and EC2 will have to be in the same security group
  - ssh into the EC2 instance
  - The EFS has instructions on how to mount it from within the EC2 instance
    - Can mount with TLS, encrpyting the traffic between EFS and any EC2 instances it's attached to.


