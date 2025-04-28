import { isCancel, outro, select } from "@clack/prompts";
import { createTaskMenu } from "./create.js";
import { listTasksMenu } from "./list.js";

export async function mainMenu() {
    const option = await select({
        message: "Escolha o que deseja fazer",
        options: [
            { label: "Criar nova tarefa", value: "create" },
            { label: "Listar tarefas", value: "list" },
            { label: "Sair", value: "end" }
        ]
    });

    if(isCancel(option)) return;

    switch(option) {
        case "create":
            return createTaskMenu();
        case "list":
            return listTasksMenu();
        case "end":
            return outro("Fim do programa");
    }
}