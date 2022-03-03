////////////////////////////////////////////////////////////////
//MENU CLICKED
const clickedImage= document.querySelector(  '.clicked');
const visibleMenu=document.querySelector('.menu_sub-list');
const id=document.getElementById("menu_click")
const cross=document.querySelector('.cross');
console.log(visibleMenu);
console.log(clickedImage); 
console.log(id); 



function clickedFunction(){
    

    return visibleMenu.classList.add('menu_sub-list-1');


    

    

}
function clickedFunction2(){
    

    

    

    return visibleMenu.classList.remove('menu_sub-list') 

}
function clickedFunctioncross(){
    return visibleMenu.classList.remove('menu_sub-list-1');
}
function clickedFunctioncross2(){
    return visibleMenu.classList.add('menu_sub-list') 

}




clickedImage.addEventListener('click', clickedFunction);
clickedImage.addEventListener('click', clickedFunction2);
cross.addEventListener('click', clickedFunctioncross);
cross.addEventListener('click', clickedFunctioncross2);
//////////////////////////////////////////////////////////////



///Заголовок
const animItems =document.querySelectorAll('._anim-items');

if(animItems.length>0){
    window.addEventListener('scroll',animOnScroll);


    function animOnScroll(){
        for(let index=0;index<animItems.length;index++){
            const animItem=animItems[index];
            const animItemHeight=animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart=4;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight>window.innerHeight){
                animItemPoint =window.innerHeight -window.innerHeight/animStart;
            }

            if((pageYOffset>animItemOffset-animItemPoint ) && pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add('_active');
            }else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');

                }
               
            }
        }
    }
}

function offset(el){
    const rect =el.getBoundingClientRect(),
    scrollLeft=window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    return{
        top:rect.top+scrollTop, left: rect.left+scrollLeft
    }

}
setTimeout(()=>{
    animOnScroll();
},500);







