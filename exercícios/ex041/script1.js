// Spread e Rest

const player = {
    nickname: "Henry",
    health: 15,
    inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
            { type: "regeneration", duration: 8 },
            { type: "defense", duration: 8 }
        ]
    }
};

// const { nickname } = player;
// console.log(nickname)

// O spread (espalha) joga todas as propriedades do objeto selecionado o rest pega o resto que não foi extraído
function updatePlayer(player, newProps) {
    return { ...player, ...newProps }
};

const updatedPlayer = updatePlayer(player, {
    nickname: "Alyson",
    coins: 100
});

const { inventory, ...playerInfo } = player;

console.log(playerInfo);
console.log(updatedPlayer);