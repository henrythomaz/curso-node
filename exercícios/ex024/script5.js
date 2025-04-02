// Funções

// Parâmetros

    // Parâmetros opcionais
    // São parãmetros que podemos ou não passar valores a eles:
    function createTag(name, prefix, suffix) {
        if (name && prefix && suffix) {
            return `${prefix} ${name} ${suffix}`
        }
        if (prefix) {
            return `${prefix} ${name}`
        }
        return `${name}`
    }

    const tag = createTag("Henry", "Desenvolvedor")
    console.log(tag)

    // Parâmetros padrões
    // São parâmetros que tem um valor predefinidado caso não passemos valores a eles:
    function pow(number, exponent = 2) {
        return number ** exponent;
    }

    console.log(pow(2, 4))
    console.log(pow(7, 5))
    console.log(pow(2))

    // Parâmetros Opcionais podem ser usados para modificar o comportamento da função

    function greet(name, log = false) {
        const text = `Seja bem vindo(a) ${name}`
        if (log) {
            console.log(text)
            return;
        }
        return text;
    }

    const text = greet("Henry")
    console.log(text.toUpperCase()) /* Se eu passar como segundo parãmetro true também o código da erro! */