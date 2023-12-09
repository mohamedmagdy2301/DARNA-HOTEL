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

/********************** */
/**hotel sections */

function openCity(evt,hobby) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(hobby).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();