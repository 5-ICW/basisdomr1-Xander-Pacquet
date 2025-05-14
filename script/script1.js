//ophalen van de html elementen

const divLijstGroenten = document.querySelector("#lijst");

//opmaken van de titel
const titel = document.createElement("h1");
titel.innerText = "soorten groenten";
divLijstGroenten.appendChild(titel);

//groenten in een lijst plaatsen
groenten.forEach((groente) => {
  let newPGroente = document.createElement("p");
  newPGroente.innerText = groente.naam;
  divLijstGroenten.appendChild(newPGroente);
});
