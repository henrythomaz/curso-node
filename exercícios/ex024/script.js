// Escopo de Bloco

//  var
/* 
    - [1] pode ser redeclarado 
    - [1] pode ser chamado fora do bloco
    - [1] pode ser reatribuído
*/
//  let
/* 
    - [0] pode ser redeclarado 
    - [0] pode ser chamado fora do bloco
    - [1] pode ser reatribuído
*/
//  const
/* 
    - [0] pode ser redeclarado 
    - [0] pode ser chamado fora do bloco
    - [0] pode ser reatribuído
*/

// Escopo de função

/*
    Toda variável declarada dentro de uma função não importa o tipo não pode ser chamada fora da função.
*/

// Escopo Léxico


//  O escopo léxico é quando a variável se lembra da onde veio se você não acha a variável dentro do bloco em que foi chamada você procura no bloco anterior:

    let number = 2
    function main() {
        let number = 1
        function secundary() {
            console.log(number)
        }
        secundary()
    };
    main();