/**
 * Type of addresses specified by a descriptor.
 */
export enum AddressType {
  IPV6,
  IPV4,
}

/**
 * Contiguous block of IP Addresses
 */
export interface AddressBlock {
  /**
   * Block specification in CIDR shorthand notation.
   */
  readonly descriptor: string;

  /**
   * Type of address block, i.e. IPv6 or IPv4.
   */
  readonly type: AddressType;
}

/**
 * All NAT address blocks.
 */
export function all(): AddressBlock[] {
  return BLOCKS;
}

/**
 * All IPv4 address blocks projected onto their
 * descriptors.
 */
export function v4(): string[] {
  return BLOCKS.filter((b) => b.type === AddressType.IPV4).map(
    (b) => b.descriptor
  );
}

/**
 * All IPv6 address blocks projected onto their
 * descriptors.
 */
export function v6(): string[] {
  return BLOCKS.filter((b) => b.type === AddressType.IPV6).map(
    (b) => b.descriptor
  );
}

const IPV6_BLOCKS: string[] = [
  // Epsilon/Conversant
  "2606:ae80:0000:0000:0000:0000:0000:0000/32",
  "2a02:fa8:0000:0000:0000:0000:0000:0000/32",
  "2001:438:65:0000:0000:0000:0000:0000/48",
  "2a02:fa8:c410:0000:0000:0000:0000:0000/44",
];

const IPV4_BLOCKS: string[] = [
  // Epsilon/Conversant
  "63.215.202.0/24",
  "64.158.223.0/24",
  "159.127.42.0/23",
  "216.48.66.0/24",
  "208.185.183.128/25",
  "89.207.22.0/23",
  "89.207.16.0/21",
  "8.18.45.0/24",
  "64.156.167.0/24",
  "205.180.86.0/23",
  "159.127.104.0/22",
  "159.127.40.0/23",
  "67.72.99.0/24",
  "205.180.85.0/24",
  "41.162.70.34/32",
  "89.197.36.34/32",
  "31.221.7.18/32",
  "62.96.18.234/32",
  "62.96.18.234/32",
  "62.96.18.234/32",
  "88.217.144.6/32",
  "195.68.101.136/29",
  "178.208.9.229/32",

  // Epsilon Elk Grove (from user, need Epsilon confirmation)
  "159.127.85.252/30",

  // Publicis Americas VPN
  "167.246.0.0/16",

  // Prodigious Site NATs
  "190.98.184.24/29",
  "190.85.27.180/32",

  // CheckPoint VPN
  "167.246.65.40/32",
  "81.200.189.14/32",
  "196.22.213.122/32",
  "80.227.101.131/32",
  "81.246.107.210/32",
  "213.61.241.82/32",
  "62.119.161.239/32",
  "212.203.88.162/32",
  "84.207.252.196/32",
  "167.246.61.40/32",
  "14.140.116.145/32",
  "46.44.151.226/32",
  "37.128.96.130/32",
  "194.50.126.7/32",
  "125.16.91.5/32",
  "62.36.0.165/32",
  "213.215.198.215/32",
  "167.246.60.40/32",
  "167.246.62.40/32",
  "81.211.32.114/32",
  "62.168.35.165/32",
  "203.28.166.2/32",
  "81.200.176.13/32",
  "180.235.155.4/32",
  "203.116.40.179/32",
  "167.246.40.40/32",

  // Agoura Hills Office (confirmed w/ Publicis)
  "131.239.140.150/32",
];

const BLOCKS: AddressBlock[] = (() => {
  const v4 = IPV4_BLOCKS.map((descriptor) => ({
    type: AddressType.IPV4,
    descriptor,
  }));
  const v6 = IPV6_BLOCKS.map((descriptor) => ({
    type: AddressType.IPV6,
    descriptor,
  }));
  return v4.concat(v6);
})();
