contabilizar(50, 20);


function contabilizar(qtdVitorias, qtdDerrotas) {
    let heroi = "";

    if (qtdVitorias < 10) {
        heroi = "ferro";
    } else if (qtdVitorias > 11 && qtdVitorias < 20) {
        heroi = "bronze";
    } else if (qtdVitorias > 21 && qtdVitorias < 50) {
        heroi = "prata";
    } else if (qtdVitorias > 51 && qtdVitorias < 80) {
        heroi = "ouro";
    } else if (qtdVitorias > 81 && qtdVitorias < 90) {
        heroi = "diamante";
    } else if (qtdVitorias > 91 && qtdVitorias < 100) {
        heroi = "lendário";
    } else {
        heroi = "imortal";
    }

    let saldoVitorias = qtdVitorias - qtdDerrotas;

    console.log(" O Herói tem de saldo " + saldoVitorias + " está no nível de " + heroi);
}

