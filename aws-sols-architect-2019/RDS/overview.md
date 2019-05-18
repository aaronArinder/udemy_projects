#### Overview
The Relational Database Service is . RDS can have multiple availability zones, used for disaster recovery, and read replicas, for performance. If multiple availability zones are used, AWS will update the DNS for the databse to a backup database. Pretty neat. For read replicas, that doesn't happen. If the primary database is lost, AWS doesn't change the DNS to point at the replica. It has to be done manually.

#### Multiple availability zones
A primary database exists in a particular zone, and a secondary database exists in a different availability zone. All changes to the primary are propagated to the secondary, but the secondary isn't used in production. If the primary fails or is taken down, AWS automatically points the DNS to the secondary. The purpose of multiple availability zones is disaster recovery.

#### Read replicas
One database is the master and all writes go to it. Other databases (up to 5) can replicate what's on the master and be read from. You can promote read replicas to be their own standalone database, but it's a manual process. You can also have read replicas of read replicas, with the potential of replica latency. Read replicas can have multiple availability zones turned on.


#### Automated backups
Automated backups allow you to recover your DB to any point within a set retention period. The period can be between 1 and 35 days. Automated backups will take a full, daily snapshot and store transaction logs throughout the day. When you do a recovery, AWS first chooses the most recent daily backup, and then apply the transaction logs relevant to that day. This allows fine-grained control of when you recover to.

Automated backups are enabled by default, and the size of storage (S3) allocated to the backup matches the size of your database instance. Backups occur during a defined window, and input/output may be suspended while your data is being backed up, possibly creating latency. When the RDS instance of which the backup was created is terminated, the backups are deleted.

#### Snapshots
DB snapshots are done manually, and they persist even after you delete the original RDS instance.

#### When to use read replicas
If your application is read heavy (e.g., blogs), use read replicas. You can have up to five read replicas.

#### Creating an RDS instance
1) RDS -> `Create Database`
2) Select DB (there's an option at the bottom to only enable free tier eligible options)
3) Specify details
    - for free tier, make sure you select smallest possible class
    - multi-AZ deployment: this asks if you want to create a replica in a different zone, but it's not a read replica, it's multi-AZ availability
    - allocate size
    - note estimated cost
    - add DB identifier, username, and password
4) Advanced settings
    - pick VPC
      - default if you haven't set one up
    - pick subnet group (optional)
    - public accessibility
5) `Create Database`!
6) Provision or select an EC2 instance
7) Make sure the EC2 instance can talk to RDS
    - Security Groups -> rds-launch-wizard
    - Select DB
    - Source: EC2 instance's security group

#### Turning on multiple availability zones
1) RDS instance -> modify
2) Toggle multiple availability zone
3) `Modify`

#### Turning on read replicas
1) RDS instance -> actions
2) `Create read replica`
   - If this isn't an option, you likely need to turn on backups
   - RDS instance -> `Modify` -> turn on backupss
3) Name it
4) `Create`

#### Misc
- You can ssh into the DB, but not the virtual machine running the DB
- Aurora Serverless is a serverless relational DB, but the others aren't; look into this if you're interested in going severless
