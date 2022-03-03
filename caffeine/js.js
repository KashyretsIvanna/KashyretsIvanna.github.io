

////////////////////////////////////////////////////////////////////
//Модальне вікно js

var modal=document.getElementById('myModal');
var btn=document.getElementById('myBtn');
var span=document.getElementsByClassName("close")[0];



btn.onclick=function(){
    modal.style.display="flex";
    modal.style.alignItems="center";
    modal.style.justifyContent="center";
}




span.onclick=function(){
    modal.style.display="none";
}



window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}



