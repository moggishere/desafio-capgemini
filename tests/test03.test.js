const test03 = require('./test03');

test('testa quantidade de anagramas', () => {
    expect(test03('ovo')).toBe(2)
})

test('testa quantidade de anagramas', () => {
    expect(test03('mom')).toBe(2)
})

test('testa quantidade de anagramas', () => {
    expect(test03('ifailuhkqq')).toBe(3)
})

test('testa quantidade de anagramas', () => {
    expect(test03('aaa')).toBe(4)
})

test('testa quantidade de anagramas', () => {
    expect(test03('aaaa')).toBe(10)
})

test('testa quantidade de anagramas', () => {
    expect(test03('aaaaa')).toBe(20)
})