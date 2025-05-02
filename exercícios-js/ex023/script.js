const player = {
    nickname: "Henry",
    health: 20,
    isDead: false,
    present() {
        console.log(`Meu nome é ${this.nickname}`)
    }
}

console.log(player.present())

for (prop in player) {
    console.log(prop)
}