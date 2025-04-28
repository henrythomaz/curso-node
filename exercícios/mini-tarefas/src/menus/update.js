import chalk from "chalk";
import { taskManager } from "../manager/tasks.js"

export async function updateTaskMenu(taskName) {
    const talk = talkManager.tasks.get(taskName)

    const formatedDate = new Date(taskManager.createdAt).toLocaleString();
    const status = taskManager.colorStatus(task.status);

    log.info([
        `Tarefa ${task.name}`,
        `Status ${status}`,
        `Criada em ${chalk.bgGray(formatedDate)}`
    ].join("\n"))
}