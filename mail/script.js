const emailArray = ["marco@gmail.com", "luca@gmail.com", "matteo@gmail.com"];

const div = document.getElementById('result');

const inputField = document.querySelector('input');

const button = document.querySelector('button');

button.addEventListener('click',
    function (event) {
        event.preventDefault();

        // questo validRegex l'ho trovato sul web ed'era dichiarato con "var" quindi credo l'articolo fosse vecchiotto, ho tentato di fare un po' di mail validation e sembra funzionare
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (inputField.value.match(validRegex)) {
            let result = "Non sei nella lista";
        
            for (let i = 0; i < emailArray.length; i++) {

                if (emailArray[i] == inputField.value) {

                    result = "Complimenti sei nella lista";
                }
            }
        
            div.innerHTML = result;
            
        } else {
            alert("Indirizzo mail invalido")
            div.innerHTML = "";
        }    

        if (inputField !== "") {
            inputField.value = "";
        }
    }
)  