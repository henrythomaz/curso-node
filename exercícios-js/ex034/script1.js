// Fuções recursivas

// São funções que se chamam
function main() {
    console.log("OI")
    setTimeout(() => {main()}, 150)
};
main()