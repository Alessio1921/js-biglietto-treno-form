let fullName=document.getElementById("name");
let numberOfKm=document.getElementById("km");
let eta= document.getElementById("eta");
let ticket=document.getElementById("ticket");
document.getElementById("create").addEventListener('click', function(){
  let newNumberOfKm= parseInt(numberOfKm.value);
  let priceTicket = newNumberOfKm * 0.27;
  let discount;
  let offering="Biglietto standard";
  document.getElementById("name-passenger").innerHTML=fullName.value;
  ticket.classList.remove("d-none");
  if ( isNaN(newNumberOfKm))
  {
    console.warn("devi inserire solo i numeri");
    document.getElementById("offering").innerHTML= "inserisci solo caratteri numerici nei kilometri";
  }
  else
  {
    if (eta.value == "underage")
    {
      discount = ((priceTicket/100)*17);
      priceTicket-= discount ;
      offering="Biglietto per minorenni"
    }
    else if (eta.value == "elderly")
    {
      discount = ((priceTicket/100)*33);
      priceTicket -= discount;
      offering="Biglietto per gli over 65"
    }
    document.getElementById("cost").innerHTML=priceTicket.toFixed(2) + "€";
    document.getElementById("offering").innerHTML=offering;
    document.getElementById("carriage").innerHTML=Math.floor((Math.random()*10)+1)
    document.getElementById("code").innerHTML=Math.floor(Math.random()*100000)
    } 
})
document.getElementById("cancel").addEventListener('click', function(){
  fullName.value="";
  numberOfKm.value="";
  eta.value="";
  ticket.classList.add("d-none")
  document.getElementById("name-passenger").innerHTML="";
  document.getElementById("cost").innerHTML="";
  document.getElementById("offering").innerHTML="";
  document.getElementById("carriage").innerHTML="";
  document.getElementById("code").innerHTML="";
})