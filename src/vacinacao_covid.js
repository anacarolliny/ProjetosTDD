
function possoVacinar(pessoa) {

	/* 
	Chegou mais uma fase de vacinação do COVID e para facilitar cada pessoa saber se pode 
	ou não vacinar, a Prefeita da cidade solicitou um algoritmo para as desenvolvedoras:
	- O algoritmo deve retornar "Você pode vacinar!":
		1- Pessoas com mais de 40 anos; 
		2- Pessoas com comorbidades acima de 18 anos;
		3- Pessoas com profissão de desenvolvedoras acima de 18 anos;
	- O algoritmo deve retornar "Você ainda não pode vacinar, mas fique atento você está 
	no próximo grupo!": 
		1- Pessoas com mais de 30 anos;
		  2- Pessoas com profissão de QA, DBA,...;
	- O algoritmo deve retornar "Você ainda não pode vacinar!": OK
		1- Pessoas que não se encaixam no grupos citados acima. 
	*/

	//- O algoritmo deve retornar "Você pode vacinar!
	if (pessoa.idade > 40) {
		return "Voce pode vacinar"
	}
	if (pessoa.idade >= 18 && pessoa.comorbidades != null) {
		return "Voce pode vacinar"
	}
	if (pessoa.idade >= 18 && pessoa.desenvolvedora == true) {
		return "Voce pode vacinar"
	}
	// //- O algoritmo deve retornar "Você ainda não pode vacinar, mas fique atento você está 
	// 	no próximo grupo!"


	if (pessoa.idade > 30) {
		return "Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!"
	}
	if (pessoa.profissao === "QA" ) {
		return "Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!"
	}
	if (pessoa.profissao === "DBA" ) {
		return "Você ainda não pode vacinar, mas fique atento você está	no próximo grupo!"
	}




	// 	- O algoritmo deve retornar "Você ainda não pode vacinar!": OK
	// 	1- Pessoas que não se encaixam no grupos citados acima. 
	// */

		
	return "Você não pode se vacinar"
};




module.exports = possoVacinar;

