async function iegutDarglietasNoApi(){ //darbiba nenotiek veina pec otras un var notikt cita laika
let datiNoApi=await fetch ("adrese")//dati bus jagaida
let datiJson=datiNoApi.json;
    console.log(datiJson);

}