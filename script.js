const productFormSelect = document.getElementById("product");
const numberFormSelect = document.getElementById("number");
let userProductId;
let userProductNumber;
let totalPrice = 0;

const userChoices = [];

const products = [
  {
    id: 500,
    nom: "Mélange original 200g",
    prix: 500,
  },
  {
    id: 900,
    nom: "Mélange original 500g",
    prix: 900,
  },
  {
    id: 700,
    nom: "Mélange original 200g",
    prix: 700,
  },
  {
    id: 1200,
    nom: "Mélange original 500g",
    prix: 1200,
  },
];

function add() {
  userProductId = +productFormSelect.value;
  if (userProductId !== 0) {
    const product = products.filter(
      (product) => product.id === +userProductId
    )[0];
    userProductNumber = numberFormSelect.value;

    totalPrice += userProductNumber * product.prix;
    const obj = new Object();
    obj["id"] = +userProductId;
    obj["nom"] = product.nom;
    obj["prix"] = product.prix;
    obj["qte"] = userProductNumber;
    obj["subTotalPrice"] = obj["qte"] * obj["prix"];
    obj["suff"] = "item";

    const product2 = userChoices.filter(
      (product) => product.id === +userProductId
    );
    if (product2.length == 0) {
      userChoices.push(obj);
    } else {
      product2[0].qte += userProductNumber;
      obj["subTotalPrice"] = obj["qte"] * obj["prix"];
      obj["suff"] = "items";
    }

    let str = "";

    for (let i = 0; i < userChoices.length; i++) {
      let currentProduct = userChoices[i];
      str += `${currentProduct.nom} ${currentProduct.prix} yens : ${currentProduct.qte} ${currentProduct.suff}\n`;
    }

    str += `\n Subtotal = ${totalPrice}`;

    // alert(`${product.nom} ${product.prix} yens : ${userProductNumber} items`);
    alert(str);
    // console.log(userChoices);
  }
}
