
const possoVacinar = require('../src/vacinacao_covid');


const pessoaExemplo = {
	    idade: 30,
	    comorbidades: [],
	    profissao: 'desenvolvedora'
};

test('', () => {
	      expect(possoVacinar(pessoaExemplo)).toBe(0);
});
