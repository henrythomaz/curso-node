// Fuções recursivas

function countDown(number = 1) {
    if (number < 1) return;
    setTimeout(() => {
        console.log(number);
        countDown(number - 1);
    }, 500)

    // for(let i = number; i > 0; i--) {
    //     console.log(i)
    // }
}

countDown(5);