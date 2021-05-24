//se a quantidade de maças for menor que uma duzia (12) o valor da unidade é 1,30
//se a quantidade de maças for maior ou igual que 12 o valor da unidade é 1,00
//o objetivo é calcular o valor da quantidade de macas compradas.

function valorMacas (total) {
    if (total < 12) {
        let resultado = total * 1.30;
        return `custo total da compra: R$${resultado}`
    } else if (total >= 12) {
        let resultado2 = total * 1
        return `custo total da compra: R$${resultado2}`
    }
}
console.log(valorMacas(9));