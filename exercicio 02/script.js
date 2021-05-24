//Pegar o numero de votos brancos, nulos e validos e calcular a porcentagem a partir do numero de eleitores.
const votosEleitores = [
    {
    eleitores: 200000,
    votosBrancos: 32000,
    votosNulos: 22000,
    votosValidos: 146000,
    },
]

votosEleitores.map((votos) => {
    //console.log(votos)

    let brancos = votos.votosBrancos * 100;
    let nulos = votos.votosNulos * 100;
    let validos = votos.votosValidos * 100;

    let totalBrancos = brancos / votos.eleitores;
    let totalNulos = nulos / votos.eleitores;
    let totalValidos = validos / votos.eleitores;

    console.log(`O percentual de votos brancos é: ${totalBrancos}%`);
    console.log(`O percentual de votos nulos é: ${totalNulos}%`);
    console.log(`O percentual de votos válidos é: ${totalValidos}%`);
   
}
)