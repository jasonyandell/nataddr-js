
/**
 * Type of addresses specified by a descriptor.
 */
export enum AddressType {
    IPV6, IPV4
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
    return blocks;
}

/**
 * All IPv4 address blocks projected onto their
 * descriptors.
 */
export function v4(): string[] {
    return  blocks
        .filter(b => b.type === AddressType.IPV4)
        .map(b => b.descriptor);
}

/**
 * All IPv6 address blocks projected onto their
 * descriptors.
 */
export function v6(): string[] {
    return  blocks
        .filter(b => b.type === AddressType.IPV6)
        .map(b => b.descriptor);
}


const  blocks: AddressBlock[] = [];

