const test01 = require('./test01');

test('testa string em HTML', () => {
    expect(test01(2)).toBe('&nbsp;*<br>**<br>')
})

test('testa string em HTML', () => {
    expect(test01(6)).toBe('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br>&nbsp;&nbsp;&nbsp;&nbsp;**<br>&nbsp;&nbsp;&nbsp;***<br>&nbsp;&nbsp;****<br>&nbsp;*****<br>******<br>')
})