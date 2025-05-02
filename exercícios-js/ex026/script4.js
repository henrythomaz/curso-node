// Desestruturação aninhada

function Main() {
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

    const { inventory: {potions} } = player
    // const { type, duration } = Defense X
    const [ {type, duration}, {type: secondType, duration: secondDuration} ] = potions

    console.log(potions);
    console.log(type);
    console.log(duration);
    console.log(secondType);
    console.log(secondDuration);

}

Main()