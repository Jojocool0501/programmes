async function chargerProgramme() {
    let response = await fetch("points_programme.json");
    let programme = await response.json();

    let pointsListe = document.getElementById("points-programme");
    let personnalite = "beru"; // À changer dynamiquement

    Object.values(programme).forEach(point => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${point.titre}</strong><br><em>« ${point["citation_" + personnalite]} »</em>`;
        pointsListe.appendChild(li);
    });
}

document.querySelectorAll(".vote").forEach(button => {
    button.addEventListener("click", function () {
        alert(`Vote enregistré pour ${this.dataset.choix}`);
    });
});

chargerProgramme();
