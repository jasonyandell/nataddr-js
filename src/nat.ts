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
