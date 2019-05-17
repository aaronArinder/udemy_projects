#### Overview
  - centralized control for account
  - shared access to account
  - granular permissions
  - identity federation (including active directory, facebook, linkedin, etc.)
  - multifactor auth to account
  - provide temporary access to users/devices and services where necessary
  - password rotation policy
  - integrates with many aws services
  - supports pci dss compliance

#### Key terminology
  - users: folks, including employees, etc.
  - groups: collection of users
  - policies: JSON-formatted permissions
  - roles: assigned to aws resources
    - way of allowing one part of aws to do somethign with another part

#### Misc
  - IAM's scope is universal, not region-specific
