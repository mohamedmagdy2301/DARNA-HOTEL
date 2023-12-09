console.log("Nour");

/*  #navbar  */
const togglebtn=document.querySelector('.toggle-btn')
const togglebtnimg=document.querySelector('.toggle-btn i')
const dropdown=document.querySelector('.dropdown_menu')
togglebtn.onclick=function (){
    dropdown.classList.toggle('open')
    const isopen=dropdown.classList.contains('open')
    togglebtnimg.classList=isopen
    ?'fa-solid fa-xmark': 'fa-solid fa-bars'
}

