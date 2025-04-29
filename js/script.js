// TODO: Fare il reset del Form



const nomeInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const anniInput = document.getElementById("age");
const inviaInput = document.getElementById("submit");
const annullaInput = document.getElementById("reset");


const nomePasseggeroElem = document.getElementById("passengerName");
const carrozzaElem = document.getElementById("couch");
const codiceCPElem = document.getElementById("CpCode");
const costoBigliettoElem = document.getElementById("ticketPrice");



inviaInput.addEventListener("click", function formSender(event){
    event.preventDefault();

    const nome = nomeInput.value;
    const km = parseFloat(kmInput.value);
    const anni = parseInt(anniInput.value);
    let sconto = 0;
    let prezzo = 0;
    const randomCarrozza = Math.floor(Math.random() * 9) + 1;
    const randomCP = Math.floor(Math.random() * 10000) +1;


    if(isNaN(anni) || isNaN(km) || anni <= 0 || km <= 0){
        console.log("Inserire un imput valido")
    }else{
        prezzo = km * 0.21;
        
        if(anni == 1){
            sconto = 0.2;
        }else if(anni == 3){
            sconto = 0.4;
        }
    }
    prezzo = (prezzo * (1 - sconto)).toFixed(2);
    
    nomePasseggeroElem.innerHTML = nome;
    carrozzaElem.innerHTML = randomCarrozza;
    codiceCPElem.innerHTML = randomCP;
    costoBigliettoElem.innerHTML = `${prezzo} €`; 

});
