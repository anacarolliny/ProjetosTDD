
const subtracao = require('../src/subtracao');// a funcao soma esta feita na pasta js, pronta pra ser importada

test('subtracao 1 e 1 tem que ser igual a 0', () => {
	expect(subtracao(1, 1)).toBe(0); // aqui ja só faz o uso da funcao soma que foi importada
});
