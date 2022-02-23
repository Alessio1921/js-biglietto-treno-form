document.getElementById("create").addEventListener('click', function(){
  const fullName= document.getElementById("name");
  const numberOfKm= document.getElementById("km");
  const eta = document.getElementById("eta");
  console.log(fullName.value);
  console.log(numberOfKm.value);
  console.log(eta.value);

  let priceTicket = numberOfKm * 0.27;
  let discount;

})


// document.getElementById("km").innerHTML= numberOfKm + "km";
// document.getElementById("eta").innerHTML=eta;

// if ( isNaN(numberOfKm))
// {
//   console.warn("devi inserire solo i numeri");
//   document.getElementById("price").innerHTML= "Hai inserito dei caratteri non validi, ricarica la pagina";
// }
// else
// {
//   if (eta < 18)
//   {
//     discount = ((priceTicket/100)*17);
//     priceTicket-= discount ;
//   }
//   else if (eta >= 65)
//   {
//     discount = ((priceTicket/100)*33);
//     priceTicket -= discount;
//   }
//   document.getElementById("price").innerHTML=priceTicket.toFixed(2) + "€";
// }
