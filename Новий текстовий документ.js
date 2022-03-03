/////Клік дж с
var x = document.querySelector("#menu_list");





function myFunction(){
    
    x.classList.add(".menu_click");
}

x.addEventListener("click", myFunction);






////выдео фон
<video autoplay muted loop preload="auto"  class="full-screen_video">
                <source type="video/webm" src="videos/кафе.webm">
                <source type="video/mp4" src="videos/кафе.mp4"> 
            </video>


.full-screen_video{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}


background-image: url(img/шапочка.png);
//////Визначення тач або клік
const isMobile={
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
    
};

if(isMobile.any()){
    document.body.classList.add("_touch");
}else{
    document.body.classList.add("_pc");
}










@media (min-width:767px){
    .menu_list{
        display: flex;
        align-items: center;
    }
    .menu_list>li{
        padding: 10px 0;
    }
    .menu_sub-list{
        transform: translate(0px,10%);
        opacity: 0;
        visibility: hidden;
        pointer-events:none;
        transition: all 0.3s ease 0s;
    }
}














<div class="header_menu menu">
                    <div class="menu_icon">
                        <span></span>
                    </div>
                    <nav class="menu_body">
                        <ul class="menu_list">
                            <li><a href="" class="menu_link"></a>Місія кафе</li>
                            <li><a href="" class="menu_link"></a>Замовлення</li>
                            <li><a href="" class="menu_link"></a>Афіша</li>
                            <li><a href="" class="menu_link">Кофеїн</a>
                                
                                <ul class="menu_sub-list">
                                    <li><a href="" class="menu_sub-link"></a></li>
                                    <li><a href="" class="menu_sub-link"></a></li>
                                    <li><a href="" class="menu_sub-link"></a></li>
                                </ul>
                            
                            
                            </li>
                        </ul>
                    </nav>
                </div>
//laizyload

const images=document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    const src=img.getAttribute("data-src");
    if(!src){
        return;
    }

    img.src = src;
}

const imgOptions={
threshold:0,
rootMargine: "0px 0px 300px 0px"
};

const imgObserver= new IntersectionObserver((entries,
    imgObserver) =>{
    entries.forEach(entry => {
    if(!entry.isIntersecting){
        return;
    }
    else{
        preloadImage(entry.target);
        imgObserver.unobserver(entry.target);
    }
    })  ; 
},imgOptions);

images.forEach(image =>{
    imgObserver.observe(image);
});