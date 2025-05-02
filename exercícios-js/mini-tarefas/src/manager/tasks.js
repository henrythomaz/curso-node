import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import chalk from "chalk";

const filePath = path.join("./tasks.json");

// Inicializa o arquivo se não existir
if (!existsSync(filePath)) {
    writeFileSync(filePath, JSON.stringify([]), "utf-8");
}

// Carrega os dados com tratamento de erro
let parsed = [];
try {
    const data = readFileSync(filePath, { encoding: "utf-8" });
    parsed = JSON.parse(data);
} catch (error) {
    console.error("Erro ao ler tasks.json:", error);
    parsed = [];
}

const tasks = new Map(parsed.map(task => [task.name, task]));

export const taskManager = {
    tasks,
    save() {
        const data = this.toArray();
        writeFileSync(filePath, JSON.stringify(data, null, 2));
    },
    create(task) {
        tasks.set(task.name, task);  // ✅ Corrigido aqui
        this.save();
    },
    toArray() {
        return Array.from(tasks.values());
    },
    colorStatus(status) {
        switch(status) {
            case "em andamento":
                return chalk.bgHex("#ffb449")(`${status}`);
            case "concluída":
                return chalk.bgGreen(`${status}`);
            case "cancelada":
                return chalk.bgHex("#ff003f")(`${status}`);
            default:
                return chalk.bgWhite(`${status}`);
        }
    }
};