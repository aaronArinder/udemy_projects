#### Overview
  - object-based storage
    - key: file name
    - value: data, sequence of bytes
    - version ID
    - metadata
    - 0-5tb
    - subresources
      - access control lists
      - torrents
  - stored in 'buckets'
  - universal namespace (no bucket anywhere can have the name of another)
  - buckets get a url for uploading/downloading
  - data saved across multiple devices/facilities

#### Data consistency
  - read after write consistency for puts of new objects
    - if you upload file to s3, it's immediately readable
  - eventual consistency for overwrite puts and deletes
    - won't be immediately readable, will take time to become readable (might get old version)

#### Lifecycle management:
  - can move data to different tiers of storage (e.g., archive)

#### Storage classes:
  - s3 standard: stored redundant; designed to sustained the loss of two facilities concurrently
    - Amazon guarantees incredibly high durability of s3 data: 99.99999999999% (11 9s!), and
      99.99% availability
    - this is the one the guarantee applies to
  - s3 - infrequent access
    - cheaper, but retrival fee
  - s3 - inqfrquent access at one zone
    - one zone availability, even cheaper than normal IA
  - s3 - intelligent tiering
    - let s3 move your objects around based on how frequently you access them

#### Glacier:
  - archival service
  - s3 glacier
    - super cheap, retrieval times are minutes to hours
  - s3 glacier - deep archive
    - lowest-cost, but retrieval time can be up to 12 hours

#### Encryption
  - can be encrypted

#### MFA:
  - mfa for deleting objects (didn't realize this--pretty sweet)

#### Security:
  - access control lists
  - bucket policies

#### Billing, charged for:
  - amount stored
  - number of requests
  - type of management
  - data transfer
  - accelerating transfers
    - users upload to an edge location, and then amazon uses it's backbone network to upload
      it to the region's data center. Greatly speeds up transfers.
  - cross region replication

