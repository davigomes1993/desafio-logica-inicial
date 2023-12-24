var levelPlayer

function rakingPlayers(a,b){
    let saldoVitorias = a-b
    if (a-b<=10){
        levelPlayer = "Ferro";
            }else if (a-b<=20){
                levelPlayer = "Bronze";
                }else if (a-b<=50){
                    levelPlayer = "Prata";
                    }else if (a-b<=80){
                        levelPlayer = "Ouro";
                        }else if (a-b<=90){
                            levelPlayer = "Diamanete";
                            }else if (a-b<=100){
                                levelPlayer = "Lendário";
                                }else 
                                    levelPlayer = "Imortal";
        return saldoVitorias
    }
    
    console.log("O Herói tem saldo de "+ rakingPlayers(2250, 200) + " está no nível de " + levelPlayer)
