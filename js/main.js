document.getElementById("create").addEventListener('click', function(){
  const fullName= document.getElementById("name").value;
  const numberOfKm= parseInt( document.getElementById("km").value);
  const eta = document.getElementById("eta").value;
  console.log(fullName);
  console.log(numberOfKm);
  console.log(eta);

  let priceTicket = numberOfKm * 0.27;
  let discount;
  let offering="Biglietto standard";
  document.getElementById("name-passenger").innerHTML=fullName;

  if ( isNaN(numberOfKm))
  {
    console.warn("devi inserire solo i numeri");
    document.getElementById("price").innerHTML= "Hai inserito dei caratteri non validi, ricarica la pagina";
  }
  else
  {
    if (eta == "underage")
    {
      discount = ((priceTicket/100)*17);
      priceTicket-= discount ;
      offering="Biglietto per minorenni"
    }
    else if (eta == "elderly")
    {
      discount = ((priceTicket/100)*33);
      priceTicket -= discount;
      offering="Biglietto per gli over 65"
    }
    document.getElementById("cost").innerHTML=priceTicket.toFixed(2) + "€";
    document.getElementById("offering").innerHTML=offering;
  
  } 
  console.log(priceTicket);
  fullName.value="";
  eta.value="";

})



