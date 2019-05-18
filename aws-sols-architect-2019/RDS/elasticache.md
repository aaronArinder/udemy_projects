#### Overview
ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud. The service improves the performance of web applications by allowing the retrieval of information from fast, managed, in-memory caches rather than on slower disk-based databases. ElastiCache supports two open-source, in-memory caching engines: memcachedd and redis.

#### Memcached vs redis
|Requirement|Memcached|Redis|
|--|--|--|
|Simple cache to offload DB|y|y|
|Ability to scale horizontally|y|n|
|Multi-threaded performance|y|n|
|Advanced data types|n|y|
|Ranking/sortng datasets|n|y|
|Publish/subscribe capabilities|n|y|
|Persistence|n|y|
|Multi-AZ|n|y|
|Backup/restore capabilities|n|y|

