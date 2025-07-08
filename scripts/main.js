let titre = document.getElementById("titre");
let prix = document.getElementById("prix");
let quantite = document.getElementById("quantite");
let sourceimage = document.getElementById("image").src;

document.getElementById("ajout-panier").addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.setItem("Nom du produit:", titre.textContent);
  console.log("Nom du produit:", titre.textContent);

  localStorage.setItem("Prix du produit:", prix.textContent);
  console.log("Prix du produit:", prix.textContent);

  localStorage.setItem("Nombre de produits dans le panier:", quantite.value);
  console.log("Nombre de produits dans le panier:", quantite.value);

  localStorage.setItem("Image du produit:", sourceimage);
  console.log("Image du produit:", sourceimage);
});

