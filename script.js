var navToggle=document.getElementById('btn-nav-toggle');
let toggleCount=0;
navToggle.addEventListener("click", function(){
    var logo=document.getElementById('logo_web');
    if(toggleCount%2==0){
        logo.style.top="40%";
    }
    else{
        logo.style.top="25%";
    }
    toggleCount++;
});