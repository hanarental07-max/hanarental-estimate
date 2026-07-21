
let products=[];



async function loadProducts(){

const response =
await fetch(
"data/products.json"
);


products =
await response.json();


}



loadProducts();
