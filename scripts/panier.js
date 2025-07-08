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

function majprix() {
  //déclaration fonction pour calculer (et afficher) dynamiquement le prix total
  let qte = parseInt(document.getElementById("quantite").value); //recup valeur de "quantité" et la transorme en nb entier
  let prixItem = parseFloat(prix.replace(",", ".")); //recup valeur de "prix" et le convertit en nb décimal (+ change les virgules en points)
  let total = (prixItem* qte).toFixed(2); //multiplie la valeur de "prix" par la valeur de "quantité" en gardant 2 chiffres après la virgule

  document.getElementById("prix").textContent = total + " €";
  document.getElementById("prix-total").textContent = total + " €";
}

majprix();
document.getElementById("quantite").addEventListener("input", majprix);






