Go=_=>{
  if(i.value){
    [...document.getElementsByTagName('ARTICLE')].forEach(e=>e.style.display='none');
    (e=>[e,o][+!e].style.display='unset')(document.getElementById(i.value.toUpperCase()));
    Sel()
  }
}
Sel=_=>{i.selectionStart=0;i.selectionEnd=i.value.length}
window.addEventListener('load',_=>Go(i.value=(new URLSearchParams(location.search)).get("id")))
