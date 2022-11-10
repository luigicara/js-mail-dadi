const button = document.querySelector("button");

const div = document.querySelector(".risultato");

button.addEventListener('click',
    function() {
        let myNumber = Math.floor(Math.random()* 6) + 1;

        console.log(myNumber);

        let pcNumber = Math.floor(Math.random()* 6) + 1;

        console.log(pcNumber);

        let risultato;

        if (pcNumber > myNumber) {
            risultato = "Mi dispiace hai perso! Ritenta.";
        } else if (pcNumber < myNumber) {
            risultato = "Complimenti, hai vinto!";
        } else {
            risultato = "Pareggio, ritenta!";
        }

        div.innerHTML = `${risultato} Hai fatto ${myNumber} e il PC ha fatto ${pcNumber}.`
    }
)