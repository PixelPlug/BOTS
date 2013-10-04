var minimo=1;
var maximo=240;
var co=-250;
var vel1=1;
var abri=0;
var menus_do_ianez = document.createElement("div");
menus_do_ianez.setAttribute("id", "divs");
menus_do_ianez.setAttribute("class", "");
document.body.appendChild(menus_do_ianez);
document.getElementById("divs").className="menutodos";
function criar_menu(){//Este script cria o menu feito dentro do textarea.
menu.value=menu.value.replace(/§0 /g , "<div class='menos'>");
menu.value=menu.value.replace(/§1 /g , "<div class='off' onmouseover=this.className='on' onmouseout=this.className='off' onclick=document.location.href='");
menu.value=menu.value.replace(/ §2 /g , "'>");
menu.value=menu.value.replace(/ §3/g , "</div>");
menu.value=menu.value.replace(/§5 /g , "<div class='off' onmouseover=this.className='on' onmouseout=this.className='off' onclick='");
divs.innerHTML=""+menu.value+"";
}
function mover(){//Este script diz se o mouse esta perto para abrir ou longe para fechar.
var rato=event.clientX;
if(rato<=minimo){abri=1;vel1=1;movimento();}
if(rato>=maximo){abri=0;vel1=1;movimento();}
}
function movimento(){//Este script faz o menu abrir e fechar.
if(co>=minimo){co=minimo;}
else
if(abri==1){co+=1;}
if(abri==0){co-=1;}
if(co>=minimo){vel1=9999999999999;co=minimo;}
if(co<=-250){vel1=99999999999;co=-250;}
divs.style.left=co;
setTimeout("movimento()",vel1);
}
criar_menu();
