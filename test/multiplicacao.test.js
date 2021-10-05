
const multiplicacao = require('../src/multiplicacao');// a funcao soma esta feita na pasta js, pronta pra ser importada

test('multiplicacao 2 e 2 tem que ser igual a 4', () => {
	expect(multiplicacao(2, 2)).toBe(4); // aqui ja só faz o uso da funcao soma que foi importada
});
