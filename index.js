const distribucionNumeros = () => {

}

const play = () => {
    
    const div = document.getElementById("main-container");
    console.log(div.children.length)
    for (var i = 0 ; i < div.children.length; i++) {
        let numeroRandomCasilla = [Math.floor((Math.random() * 50) + 1)];

        if (!numeroRandomCasilla.includes(numeroRandomCasilla)) {
            var printCasilla = div.children[i];
            printCasilla.textContent = numeroRandomCasilla;
        };
    };
};

play();

const stamp = () => {

    for (var i = 0 ; i < div.children.length; i++) {
        let printCasilla = div.children[i];
        const div = document.getElementById("main-container");
        printCasilla.style.color = "red";
        i++
    }
}


