import { writeFileSync, readFileSync } from "node:fs";

async function main() {
    setInterval(async () => {  // Tornamos a função dentro do setInterval assíncrona
        const postRandom = Math.floor(Math.random() * 50) + 1;  
        const url = `https://jsonplaceholder.typicode.com/posts/${postRandom}`;  
        const response = await fetch(url);  
        const data = await response.json();
        
        console.log(data);
    }, 1000);
}

main();

