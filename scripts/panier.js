let titre = localStorage.getItem("Nom du produit:");
let prix = localStorage.getItem("Prix du produit:");
let quantite = localStorage.getItem("Nombre de produits dans le panier:");
let sourceimage = localStorage.getItem("Image du produit:");

console.log("Nom du produit:", titre);
console.log("Prix du produit:", prix);
console.log("Nombre de produits dans le panier:", quantite);
console.log("Image du produit:", sourceimage);

document.getElementById("titre").textContent = titre;
document.getElementById("prix").textContent = prix;
document.getElementById("quantite").value = quantite;
document.getElementById("prix-total").textContent = prix;
document.getElementById("image-produit").src = sourceimage;


