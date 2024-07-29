const myNavBar = document.getElementById("navBar");
const open = document.getElementById("menu-btn");
const close = document.getElementById("close");

function openAndClose(){
    if(myNavBar.style.display==="none"){
        myNavBar.style.display="flex"
    }

    else{
        myNavBar.style.display="none"
    }
}

open.addEventListener('click', openAndClose);
close.addEventListener('click', openAndClose);