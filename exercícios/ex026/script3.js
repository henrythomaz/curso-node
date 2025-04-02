// Renomeando a propriedade extraída na desestruturação

function Main() {
    const nickname = "Henry Dev"
    const player = {
        nickname: "Henry",
        health: 20,
        inventory: {
            items: ["sword", "shield", "bow"],
            potions: [
                { type: "Regeneration", duration: 8 },
                { type: "defense", duration: 8 },
            ]
        },
    }

    // const { nickname, health } = player X n pode pois ja existe na linha 4
    const {nickname: nick, health } = player
    
    console.log(nickname, nick)
}

Main()