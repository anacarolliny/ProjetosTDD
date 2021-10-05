
const soma = require('../src/soma');// a funcao soma esta feita na pasta js, pronta pra ser importada

test('soma 1 e 2 tem que ser igual a 3', () => {
	expect(soma(1, 2)).toBe(3); // aqui ja só faz o uso da funcao soma que foi importada
});
