// Classes
    class Game
    {
        static games = [];
        title;
        time;
        status = "idle"

        constructor(title, time) {
            this.title = title;
            this.time = time;
            Game.games.push(this);
        }
        start() {
            this.status = "progress";
        }
        stop() {
            this.status = "ended";
        }
        delete() {
            Game.games = Game.games.filter(game => game.title !== this.title);
        }
    }

    const parkour = new Game("Parkour", Infinity);
    const puzzle = new Game("Puzzle", 160);

    // parkour.games (não pode)
    console.log(Game.games)
    parkour.delete()
    console.log(Game.games)