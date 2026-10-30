var WA="5588999999999"; // troque pelo número real
var TABS=[
 {k:"hosp",n:"Hospedagem",e:"🏨",d:"Pousadas e chalés",range:true},
 {k:"casa",n:"Casas de temporada",e:"🏡",d:"Casas inteiras",range:true},
 {k:"passeio",n:"Passeios",e:"🏄",d:"Buggy, kite e mais",range:false},
 {k:"transfer",n:"Transfer",e:"🚐",d:"Aeroporto de Fortaleza",range:false},
 {k:"alug",n:"Aluguéis",e:"🛵",d:"Quadriciclo e bike",range:false}
];
var ITEMS=[
 {t:"hosp",tag:"Pousada",n:"Pousada Brisa do Kite",r:"9,2",v:128,p:290,u:"noite",g:["#FF9A4D","#C2410C"],e:"🏨"},
 {t:"hosp",tag:"Chalé",n:"Chalé Pôr do Sol",r:"9,4",v:86,p:340,u:"noite",g:["#FDBA74","#EA580C"],e:"🛖"},
 {t:"hosp",tag:"Pousada",n:"Pousada Vento Leste",r:"8,9",v:203,p:260,u:"noite",g:["#FB923C","#9A3412"],e:"🌴"},
 {t:"casa",tag:"Casa inteira",n:"Casa Duna Dourada · 6 pessoas",r:"9,5",v:41,p:780,u:"noite",g:["#FDBA74","#B45309"],e:"🏡"},
 {t:"casa",tag:"Casa inteira",n:"Casa Coqueiral · 8 pessoas",r:"9,1",v:57,p:980,u:"noite",g:["#FB923C","#C2410C"],e:"🌴"},
 {t:"casa",tag:"Casa inteira",n:"Casa Maré Alta · 4 pessoas",r:"9,3",v:34,p:520,u:"noite",g:["#FFB26B","#9A3412"],e:"🌊"},
 {t:"passeio",tag:"Passeio",n:"Buggy pelas dunas e lagoas",r:"9,7",v:312,p:120,u:"pessoa",g:["#FDBA74","#C2410C"],e:"🚙"},
 {t:"passeio",tag:"Aula",n:"Aula de kitesurf · 2 h",r:"9,6",v:148,p:350,u:"pessoa",g:["#FB923C","#7C2D12"],e:"🪁"},
 {t:"passeio",tag:"Passeio",n:"Pôr do sol na duna",r:"9,8",v:205,p:60,u:"pessoa",g:["#FFB26B","#B91C1C"],e:"🌅"},
 {t:"transfer",tag:"Transfer",n:"Aeroporto de Fortaleza → Icaraizinho",r:"9,4",v:97,p:90,u:"pessoa",g:["#FDBA74","#9A3412"],e:"🚐"},
 {t:"transfer",tag:"Privativo",n:"Transfer privativo · até 4 pessoas",r:"9,6",v:63,p:520,u:"trajeto",g:["#FB923C","#C2410C"],e:"🚗"},
 {t:"alug",tag:"Aluguel",n:"Quadriciclo · 1 hora",r:"9,2",v:88,p:180,u:"hora",g:["#FF9A4D","#7C2D12"],e:"🛵"},
 {t:"alug",tag:"Aluguel",n:"Bicicleta · diária",r:"9,0",v:44,p:40,u:"dia",g:["#FFB26B","#C2410C"],e:"🚲"}
];
var cur="hosp";
var $=function(i){return document.getElementById(i)};
var money=function(n){return "R$ "+n.toLocaleString("pt-BR")};
function fmt(d){return d?d.split("-").reverse().join("/"):""}
function msg(it){
  var t=TABS.filter(function(x){return x.k===cur})[0],a=$("d-in").value,b=$("d-out").value,w;
  if(!a){w="datas a combinar"}else if(t.range&&b){w="de "+fmt(a)+" a "+fmt(b)}else{w="data: "+fmt(a)}
  return "Olá! Quero reservar: "+it+". "+w+". "+$("pax").value+".";
}
function link(it){return "https://wa.me/"+WA+"?text="+encodeURIComponent(msg(it))}
function render(){
  var t=TABS.filter(function(x){return x.k===cur})[0];
  $("tabs").innerHTML=TABS.map(function(x){return '<button class="tab" role="tab" aria-selected="'+(x.k===cur)+'" data-k="'+x.k+'">'+x.n+'</button>'}).join("");
  $("f-out").hidden=!t.range;
  $("l-in").textContent=t.range?"Check-in":"Data";
  $("t-dest").textContent="Mais reservados: "+t.n.toLowerCase();
  $("s-dest").textContent=t.d+" em Icaraizinho de Amontada";
  $("grid").innerHTML=ITEMS.filter(function(i){return i.t===cur}).map(function(i,x){
    return '<article class="card"><div class="ph" style="background:linear-gradient(135deg,'+i.g[0]+','+i.g[1]+')"><span class="tag">'+i.tag+'</span><span>'+i.e+'</span></div>'+
    '<div class="cb"><h3>'+i.n+'</h3><div class="rt"><b>'+i.r+'</b>'+i.v+' avaliações</div>'+
    '<div class="pr"><small>a partir de</small><strong>'+money(i.p)+'</strong><small>/ '+i.u+'</small></div>'+
    '<a class="btn" target="_blank" rel="noopener" data-it="'+i.n+'" href="'+link(i.n)+'">Reservar pelo WhatsApp</a></div></article>';
  }).join("");
  links();
}
function links(){
  var a=document.querySelectorAll("a[data-it]");
  for(var i=0;i<a.length;i++){a[i].href=link(a[i].getAttribute("data-it"))}
  $("pk").href=link("Pacote casa + transfer + passeio");
}
$("tabs").addEventListener("click",function(e){var k=e.target.getAttribute("data-k");if(k){cur=k;render()}});
$("cats").innerHTML=TABS.map(function(x){return '<button class="cat" data-k="'+x.k+'"><span>'+x.e+'</span><b>'+x.n+'</b><i>'+x.d+'</i></button>'}).join("");
$("cats").addEventListener("click",function(e){var b=e.target.closest(".cat");if(b){cur=b.getAttribute("data-k");render();$("destaques").scrollIntoView()}});
["d-in","d-out","pax"].forEach(function(id){$(id).addEventListener("change",function(){
  if(id==="d-in"){$("d-out").min=$("d-in").value}
  links()})});
var t0=new Date().toISOString().slice(0,10);$("d-in").min=t0;$("d-out").min=t0;
render();
