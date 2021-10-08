
function reajuste(salario) {
  if (salario > 0 && salario < 1000) {
    return salario + salario * 0.20;
  } else if (salario <= 2000) { //refatorei para menor igual á
    return salario + salario * 0.15;
  } else {
    if (salario > 2000)
      return salario + salario * 0.04; //voltei a colocoar os 4%
  }


  return salario

}



module.exports = reajuste;


