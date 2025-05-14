const maxPrijsInput = document.getElementById("maxPrijs");
const groentenDiv = document.getElementById("groenten");
const gekozenDiv = document.getElementById("gekozenGroenteEnPrijs");

// Stap 1: Luister naar veranderingen in het tekstvak
maxPrijsInput.addEventListener("input", function () {
  const maxPrijs = parseFloat(maxPrijsInput.value);
  groentenDiv.innerHTML = ""; // Leegmaken bij elke verandering
  gekozenDiv.innerHTML = ""; // Leegmaken vorige keuze

  if (isNaN(maxPrijs)) return;

  // Maak dropdown
  const select = document.createElement("select");

  // Filter groenten die onder de max prijs zitten
  const gefilterdeGroenten = groenten.filter((g) => g.prijs <= maxPrijs);

  // Voeg groenten toe aan dropdown
  gefilterdeGroenten.forEach((groente) => {
    const option = document.createElement("option");
    option.value = groente.id;
    option.textContent = `${groente.naam} (€${groente.prijs})`;
    select.appendChild(option);
  });

  // Als er opties zijn, voeg dropdown toe
  if (gefilterdeGroenten.length > 0) {
    groentenDiv.appendChild(select);

    // Toon gekozen groente + prijs als er iets geselecteerd wordt
    select.addEventListener("change", function () {
      const gekozen = groenten.find((g) => g.id == select.value);
      gekozenDiv.textContent = `Je koos: ${
        gekozen.naam
      } - €${gekozen.prijs.toFixed(2)}`;
    });
  }
});
