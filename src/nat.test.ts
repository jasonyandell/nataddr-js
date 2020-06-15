import * as nat from './nat';

test('all count', () => {
    expect(nat.all().length).toBe(26);
  });

test('v6 count', () => {
    expect(nat.v6().length).toBe(2);
  });

test('balance', () => {
    expect(nat.v6().length + nat.v4().length).toBe(nat.all().length);
  });

test('v6 addresses', () => {
    expect(nat.v6().sort())
        .toStrictEqual(nat.all()
            .filter(x => x.type === nat.AddressType.IPV6)
            .map(x => x.descriptor)
            .sort())
});

test('v4 addresses', () => {
    expect(nat.v4().sort())
        .toStrictEqual(nat.all()
            .filter(x => x.type === nat.AddressType.IPV4)
            .map(x => x.descriptor)
            .sort())
});
