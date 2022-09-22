async function iegutDarglietasNoApi(){ //darbiba nenotiek veina pec otras un var notikt cita laika
let datiNoApi=await fetch ("https://fakestoreapi.com/products/category/electronics")//dati bus jagaida
let datiJson=datiNoApi.json;
console.log(datiJson);
}