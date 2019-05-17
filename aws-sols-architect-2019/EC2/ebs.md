#### Overview
Elastic Block Store provides persistent block storage volumes for use with EC2 instances. Each EBS volume is automatically recplicated within its Availability Zone to protect against component failure, meaning they have high availability and durability.

#### Types
|Volume type|General Purpose SSD|Provisioned IOPS (input/out per second) SSD| Throughput Optimized HDD|Cold HDD|EBS Magnetic|
|--|--|--|--|--|--|
|Description|General purpose; balances price/performance for wide variety of transactional workloads|Highest performance SSD designed for mission-critical apps|Low cost HDD for frequently accessed, throughput-intensive workloads|Lowest cost HDD volume designed for less frequently accessed workloads|Previous generation HDD|
|Use Cases|Most workloads|Databases|Big data & data warehousing|File servers|Workloads where data is infrequently accessed|
|API Name|gp2|io1|st1|sc1|Standard|
|Volume Size|1gb-16tb|4gb-16tb|500gb-16tb|500gb-16tb|1gb-1tb|
|Max IOPS/Volume|16k|64k|500|250|40-200|

#### Managing volumes
Under Elastic Block Store, you can select `volumes`, see information about them, and modify them.
  - You can change the size (though it might require repartitioning for the AMI's OS to see the new size).
  - A volume's type can change, too. E.g., you can promote a volume to provisioned IOPS.
    - Note that you can do this _without shutting the instance down or removing the volume first_. That's effing sweet.
  - When an EC2 instance that an EBS volume is attached to is terminated, the root volume doesn't persist. Any other attached volumes do persist. If you're worried about pricing, make sure you delete all EBS volumes after terminating an EC2 instance.

#### Snapshots
Snapshots are images of a volume's state at a particular time. To create a snapshot, toggle `actions` for a volume. After a snapshot is created, you can create a volume or image from it. Snapshots are saved in S3. They are incremental, meaning that only the blocks that have changed since your last snapshot are moved to S3. Before creating a snapshot, it's best to stop your EC2 instance. This  lets you know _exactly_ what should be on the snapshot.

#### EBS vs. Instance Store
For the root volume of an EC2 instance, you can choose between an EBS or Instance Store root volume. EBS backed instances are created from an EBS snapshot, and Instance Store backed instances are created from a template stored in S3. Instance Store backed instances will lose their root volumes if stopped; EBS backed instances can be stopped without losing their data. So, if the underlying host fails for an Instance Store backed instance, data will be lost. Both can be rebooted without losing data. By default, both types will be lost on instance termination, but there's an option for saving EBS root volumes for EBS backed instances.

#### Questions
I'm not sure why you'd want to use an Instance Store backed instance; mthey might be cheaper?

