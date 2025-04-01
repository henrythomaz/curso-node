// Strings
    // Comportamento

        // "" '' ``
            // Strings Simples '' ""
                /*  Não pega outros valores
                    Não têm quebra de linha
                    Usa concatenação

                    caracteres especiais: 
                        \n   - quebra de linha
                        \t   - parágrafo
                        \r   - apaga o conteúdo antes dele
                        \"\" - cria aspas dentro da string (nota-se que se você colocar uma aspa diferente da que esta na string ja funciona sem isto)
                */
                const prefix = "Desenvolvedor"
                const intro = '             Olá, \n Bem vindo ' + prefix;

            // Template String ``
                /*  Consegue pegar o valor transforma em string usando ${} 
                    Têm quebra de linha
                */

                const myName = `${intro} Henry!
        Dia lindo Não?`

        console.log(myName);