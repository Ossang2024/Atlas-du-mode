

// function filterCountries() {
//     const searchInput = document.getElementById('searchBar').value.toLowerCase();
//     console.log("Recherche :", searchInput);
  
//     const countryCards = document.querySelectorAll('.col14');
//     countryCards.forEach((card) => {
//       const countryName = card.getAttribute('data-name');
//       console.log("Pays trouvé :", countryName); // Debug : Afficher chaque data-name
  
//       if (countryName) { // Vérifie si le data-name existe
//         if (!searchInput) {
//             // Si la barre de recherche est vide, réaffiche toutes les cartes
//             card.classList.remove('hidden');
//           } else if (countryName && typeof countryName === "string") {
//             if (countryName.toLowerCase().includes(searchInput)) {
//               card.classList.remove('hidden');
//             } else {
//               card.classList.add('hidden');
//             }
//           }      } else {
//         console.warn("Une carte n'a pas d'attribut 'data-name' :", card); // Debug pour les erreurs
//       }
//     });
// }




function filterCountries() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const countryCards = document.querySelectorAll('.col14');
  
    countryCards.forEach((card) => {
      const countryName = card.getAttribute('data-name');
      if (!searchInput) {
        // Si la barre de recherche est vide, réaffiche toutes les cartes
        card.classList.remove('hidden');
      } else if (countryName && typeof countryName === "string") {
        if (countryName.toLowerCase().includes(searchInput)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
}


// Ajout de l'événement pour le champ de recherche
document.getElementById('searchBar').addEventListener('keyup', filterCountries);
  
  
