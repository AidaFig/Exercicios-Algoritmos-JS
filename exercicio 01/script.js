// tarefa 01
// Ler a idade da pessoa em anos, meses e dias que ela possui ====>
// Expressar o tempo de  vida dessa pessoa (a idade dela) em dias.

function idadePessoa(ano, mes, dias) {
    //return ano + " " + mes
    const diasAno = 365;
    const diasMes = 30;

    const idadeEmAnos = ano * diasAno
    //console.log(idadeEmAnos)

    const idadeEmMeses = mes * diasMes
    //console.log (idadeEmMeses)

    const idadeEmDias = idadeEmAnos + idadeEmMeses + dias;
    
    return `Você possui ${idadeEmDias} dias de vida`
    //return idadeEmDias;

}
console.log(idadePessoa(25, 8, 19))