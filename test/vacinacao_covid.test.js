
const possoVacinar = require('../src/vacinacao_covid');


const pessoaAcimade40 = {
	idade: 41
	
};

test("Deve retornar que pode vacinar quando a pessoa tem mais de 40", () =>{ 
		expect(possoVacinar(pessoaAcimade40)).toBe("Voce pode vacinar")
})

const pessoaComorbidade18anos= {
	idade: 19,
	comorbidades : "diabetes"
	
};

test("Deve retornar que pode vacinar quando a pessoa tem mais de 18 e tem comorbidades", () =>{ 
		expect(possoVacinar(pessoaComorbidade18anos)).toBe("Voce pode vacinar")
})

const pessoaDesenvolvedora= {
	idade: 19,
	desenvolvedora : true
	
};

test("Deve retornar que pode vacinar quando a pessoa tem mais de 18 e é desenvolvedora", () =>{ 
		expect(possoVacinar(pessoaDesenvolvedora)).toBe("Voce pode vacinar")
})

const pessoaAcimade30= {
	idade: 31
	
};

test("Deve retornar que ainda não pode vacinar mas deve ficar atento", () =>{ 
		expect(possoVacinar(pessoaAcimade30)).toBe("Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!")
})

const pessoaProfissaoQA= {
	profissao : "QA"
};

test("Deve retornar que ainda não pode vacinar mas deve ficar atento", () =>{ 
		expect(possoVacinar(pessoaProfissaoQA)).toBe("Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!")
})

const pessoaProfissaoDBA= {
	profissao : "DBA"
};

test("Deve retornar que ainda não pode vacinar mas deve ficar atento", () =>{ 
		expect(possoVacinar(pessoaProfissaoDBA)).toBe("Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!")
})

const pessoaNaopodeVacinar= {
	
	    idade: 16,
	    comorbidades: [0],
	    profissao: "lider_tecnica"
	
};

test("Você não faz parte de nenhum grupo", () =>{ 
		expect(possoVacinar(pessoaNaopodeVacinar)).toBe("Você não pode se vacinar")
})