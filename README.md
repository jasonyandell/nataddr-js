# CJ NAT Addresses

List of CJ NAT addresses suitable for source IP whitelisting.

## Usage

Install insto project: `npm i @cjdev/nataddr`

``` typescript
import * as nat from '@cjdev/nataddr';

// All CIDR blocks, with IP type property
console.log("all:", JSON.stringify(nat.all()));

// IPv4 CIDR blocks only, as strings
console.log("IPv4:", JSON.stringify(nat.v4()));

// IPv6 CIDR blocks only, as strings
console.log("IPv6:", JSON.stringify(nat.v6()));

```
