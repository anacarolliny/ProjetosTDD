
const reajuste = require('../src/reajuste_salarial');

/*
 * A empresa ABC resolveu conceder um aumento de salários a suas funcionárias de acordo com os valores abaixo:
 * - Para quem ganha de 0 ~ 1000 reais:  20% 
 *   - Para quem ganha de 1000 ~ 2000 reais: 15%
 *   - Acima de 2000: 4%
 *   */ 

test('não reajsuta se for menor ou igual a 0 ', () => {
	expect(reajuste(0)).toBe(0);
});
test('reajusta salario em 20% quando salario for maior que 0 e menor que 1000', () => {
	expect(reajuste(500)).toBe(600);
});

test("reajusta salario em 15% quando salario for maior que 1000 e menor que 2000", () =>{
	expect(reajuste(1100)).toBe(1265);
});

test("reajusta salario em 5% quando salario for maior que 2000", () => {
	expect(reajuste(2000)).toBe(2100);
});