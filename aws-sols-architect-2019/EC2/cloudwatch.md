#### Overview
CloudWatch is a monitoring tool used to monitor performance. It can monitor a bunch of stuff: EC2 instances, autoscaling groups, elastic load balances, Route53 health checks, EBS volume (e.g., how busy they are), storage gateways, CloudFront, and so on. By default, it will monitor EC2 instance events every 5 minutes. Detailed logging can be turned on to monitor events every minute. Alarms can be created to trigger notifications.

#### Creating alerts
- Alarms
- Select metrics
  -  E.g., EC2
- Find target for metric
- Add details to the alert
  - E.g., `Whenever CPUUtilization is >= 90 for 1 out of 1 datapoints (i.e., minutes`
- Add action
  - E.g., an email and alarm

#### Note
CloudTrail is a different service with a simliar name: it's for auditing AWS use (not AWS service). E.g., it would be used to monitor creation of S3 buckets on AWS, the IAM user who created them, and their IP.


