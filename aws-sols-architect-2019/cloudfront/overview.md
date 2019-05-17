#### Overview
CloudFront is a CDN, meaning it's a distributed network of delivery servers serving cached content. Without that distribution, content can only be pulled from its origin. That means users may be pulling content down from the other side of the world.

#### Keywords
##### Edge Location
Location where content is cached. This isn't an AWS region, but an outlying store of content managed by AWS. Edge locations can be read from, but also written to.

##### Origin
The origin of the content that the CDN will distribute. This can be an S3 bucket, an EC2 instance, an Elastic Load Balancer, or Route53.

##### Distribution
The name given to the CDN, which is a collection of edge locations. There's <b>web distribution</b> for websites and similar content and <b>RTMP</b> (real time messaging protocal), which is used for media streaming.

#### Creating a CloudFront distrubtion
##### Setup
- Create Distribution
- Web/RTMP (selected web)
- Click on Origin Domain Domain, it'll list your valid origins
  - If none are listed, you've none available; set up an S3 bucket to demo
- Origin Path: used for subdirectories, if applicable
- Origin ID: identifier for CDN, sets a default
- TTL: time to live; you can set a min/max/default
- Restrict Viewer Access: Can restrict to signed urls/cookies
- Can set Web App Firewalls, Lambda associations, and a bunch of other stuff
- Deploy
- If you used an S3 bucket to demo it, hit the CDN's url with an object's key
- NB: _Not covered in the free tier_

##### Invalidations
- Distribution Settings -> Invalidations
  - This allows you to invalidate certain objects, subdirectories, and so on


