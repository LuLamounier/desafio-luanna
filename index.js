// Desafio Classificador de nível de herói

let nomeHeroi = "";
let quantidadeXp = 100040;

switch (true) {
    
    case (quantidadeXp < 1000):
        nomeHeroi = 'Ferro';
        console.log("Ferro");
        break;

    case (quantidadeXp > 1001 && quantidadeXp < 2000):
        nomeHeroi = 'Bronze';
        console.log("Bronze");
        break;

    case (quantidadeXp > 2001 && quantidadeXp < 5000):
        nomeHeroi = 'Prata';
        console.log("Prata")
        break;

    case (quantidadeXp > 5001 && quantidadeXp < 7000):
        nomeHeroi = 'Ouro';
        console.log("Ouro")
        break;

    case (quantidadeXp > 7001 && quantidadeXp < 8000):
        nomeHeroi = 'Platina';
        console.log("Platina")
        break;

    case (quantidadeXp > 8001 && quantidadeXp < 9000):
        nomeHeroi = 'Ascendente';
        console.log("Ascendente");
        break;

    case (quantidadeXp > 9001 && quantidadeXp < 10000):
        nomeHeroi = 'Imortal';
        console.log("Imortal")
        break;

    case (quantidadeXp > 10001):
        nomeHeroi = 'Radiante';
        console.log("Radiante")
        break;
    default:
        console.log("Não encontrado");
}

console.log(`O nome do Héroi: ${nomeHeroi} está no nível de ${quantidadeXp}`);