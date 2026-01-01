const colors = {
  Blue: "#2e6cff",
  Red: "#ff3b3b",
  Yellow: "#ffd93b",
  Orange: "#ff8c1a",
  Green: "#4cff4c",
  Purple: "#a24cff"
};

const colorSelects = ["primaryColor", "secondaryColor"];

colorSelects.forEach(id => {
  const sel = document.getElementById(id);
  for (const c in colors) {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    sel.appendChild(o);
  }
});

function stripedBackground(primary, secondary) {
  return `repeating-linear-gradient(
    45deg,
    ${primary},
    ${primary} 12px,
    ${secondary} 12px,
    ${secondary} 16px
  )`;
}

function createCard() {
  const name = fishName.value || "Unnamed Fish";
  const p = colors[primaryColor.value];
  const s = colors[secondaryColor.value];

  const card = document.createElement("div");
  card.className = "card";

  const fish = document.createElement("div");
  fish.className = "fish";
  fish.style.background = stripedBackground(p, s);

  card.innerHTML = `<h3>${name}</h3>`;
  card.appendChild(fish);

  card.innerHTML += `
    <div class="stats">
      <div>Attack<br>#</div>
      <div>Defense<br>#</div>
      <div>Speed<br>#</div>
    </div>
  `;

  document.getElementById("cards").appendChild(card);
}
