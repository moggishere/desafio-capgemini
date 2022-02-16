const test02 = require('./test02');

test('testa mensagem', () => {
    expect(test02('aB1@cD')).toBe('✔ TEM 6 OU MAIS CARACTERES<br>✔ TEM MINÚSCULA <br>✔ TEM MAIÚSCULA <br>✔ TEM CARACTERE ESPECIAL <br>')
})

test('testa mensagem', () => {
    expect(test02('sdD')).toBe('❌ FALTAM 3 CARACTERES<br>✔ TEM MINÚSCULA <br>✔ TEM MAIÚSCULA <br>❌ FALTA CARACTERE ESPECIAL <br>')
})

test('testa mensagem', () => {
    expect(test02('ad1@csdfs')).toBe('✔ TEM 6 OU MAIS CARACTERES<br>✔ TEM MINÚSCULA <br>❌ FALTA MAIÚSCULA <br>✔ TEM CARACTERE ESPECIAL <br>')
})

test('testa mensagem', () => {
    expect(test02('----')).toBe('❌ FALTAM 2 CARACTERES<br>❌ FALTA MINÚSCULA <br>❌ FALTA MAIÚSCULA <br>❌ FALTA CARACTERE ESPECIAL <br>')
})

test('testa mensagem', () => {
    expect(test02('!!!!AA')).toBe('✔ TEM 6 OU MAIS CARACTERES<br>❌ FALTA MINÚSCULA <br>✔ TEM MAIÚSCULA <br>✔ TEM CARACTERE ESPECIAL <br>')
})