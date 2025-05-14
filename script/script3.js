const lijstDiv = document.getElementById("lijst");
const kostprijsDiv = document.getElementById("kostprijs");

// Functie om de kostprijs te herberekenen
function berekenTotaal() {
  let totaal = 0;
  const checkboxes = document.querySelectorAll("#lijst input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const prijs = parseFloat(checkbox.getAttribute("data-prijs"));
      totaal += prijs;
    }
  });
  kostprijsDiv.textContent = `Totale kostprijs: €${totaal.toFixed(2)}`;
}

// Groenten en checkboxes aanmaken
groenten.forEach((groente) => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("data-prijs", groente.prijs);
  checkbox.addEventListener("change", berekenTotaal);

  label.appendChild(checkbox);
  label.append(` ${groente.naam} (€${groente.prijs})`);
  lijstDiv.appendChild(label);
  lijstDiv.appendChild(document.createElement("br"));
});
