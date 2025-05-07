const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 1,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 1,
    naam: "erwten",
    prijs: 0.7,
  },
];

const lijstDiv = document.getElementById("lijst");

groenten.forEach((groente) => {
  const p = document.createElement("p");
  p.textContent = `${groente.naam} - €${groente.prijs.toFixed(2)}`;
  lijstDiv.appendChild(p);
});
