document.addEventListener("DOMContentLoaded", function() {
    const pixelContainer = document.getElementById("pixel-container");

    for (let i = 0; i < 1000000; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("id", `pixel-${i}`);
        pixelContainer.appendChild(pixel);

        // Ajoutez un gestionnaire d'événements pour chaque pixel
        pixel.addEventListener("click", function() {
            modifierCouleurPixel(i);
        });
    }

    function modifierCouleurPixel(id) {
        const pixelClique = document.getElementById(`pixel-${id}`);
        
        // Générez une couleur aléatoire (vous pouvez utiliser votre propre logique ici)
        const couleurAleatoire = getRandomColor();

        // Modifiez la couleur du pixel
        pixelClique.style.backgroundColor = couleurAleatoire;
    }

    function getRandomColor() {
        // Générez une couleur hexadécimale aléatoire
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});

