// Pour effectuer la somme
function addition(a, b) {
  return a + b;
}

// Pour effectuer la soustraction
function soustraction(a, b) {
  return a - b;
}

// Pour effectuer le produit
function multiplication(a, b) {
  return a * b;
}

// Pour effectuer la division
function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Division par zéro impossible";
  }
}

// Fonction principale
function calculatrice() {
  let choix = 0;

  while (choix !== 5) {
    alert(
      "Options disponibles :\n" +
        "1. Faire la somme de deux valeurs\n" +
        "2. Faire la soustraction de deux valeurs\n" +
        "3. Faire le produit de deux valeurs\n" +
        "4. Faire la division de deux valeurs\n" +
        "5. Quitter"
    );

    choix = parseInt(prompt("Faites un choix :"));

    if (choix >= 1 && choix <= 4) {
      const valeur1 = parseFloat(prompt("Entrez la première valeur :"));
      const valeur2 = parseFloat(prompt("Entrez la deuxième valeur :"));

      switch (choix) {
        case 1:
          alert("Résultat : " + addition(valeur1, valeur2));
          break;
        case 2:
          alert("Résultat : " + soustraction(valeur1, valeur2));
          break;
        case 3:
          alert("Résultat : " + multiplication(valeur1, valeur2));
          break;
        case 4:
          alert("Résultat : " + division(valeur1, valeur2));
          break;
      }
    } else if (choix !== 5) {
      alert("Choix invalide. Veuillez réessayer.");
    }
  }

  alert("Calculatrice fermée.");
}

// Fonction principale
calculatrice();
