//ophalen van de html elementen

const divLijstGroenten = document.querySelector("#lijst");
const divPrijs = document.querySelector("#kostprijs");

//opmaken van de titel
const titel = document.createElement("h1");
titel.innerText = "soorten groenten";
divLijstGroenten.appendChild(titel);

//groenten in een lijst plaatsen
const SelGroenten = document.createElement("select");
let newOptieGroente = document.createElement("option");
newOptieGroente.innerText = "maak uw keuze ...";
SelGroenten.appendChild(newOptieGroente);

groenten.forEach((groente) => {
  newOptieGroente = document.createElement("option");
  newOptieGroente.value = groente.id;
  newOptieGroente.innerText = groente.naam;
  SelGroenten.appendChild(newOptieGroente);
});

divLijstGroenten.appendChild(SelGroenten);

//actie toevoegen aan de dropdown

SelGroenten.addEventListener("change", (args) => {
  divPrijs.innerHTML = "";
  const newPPrijs = document.createElement("p");
  newPPrijs.innerText = groenten.find(
    (groente) => groente.id == args.target.value
  ).prijs;
  divPrijs.appendChild(newPPrijs);
});
