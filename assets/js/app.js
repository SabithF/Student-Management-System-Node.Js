
function myFunction() {
    var x = document.getElementById("myLinks");

    if(x.classList.contains('minilinks')){
        x.classList.remove('minilinks')
        x.classList.add('maxlinks')
    }
    else {
        x.classList.remove('maxlinks')
        x.classList.add('minilinks')
    }

    var x = document.getElementById("menuicon");

    if(x.classList.contains('icon-rot')){
        x.classList.remove('icon-rot')
    }
    else {
        x.classList.add('icon-rot')
    }

    var x = document.getElementById("menubar");

    if(x.classList.contains('fa-bars')){
        x.classList.remove('fa-bars')
        x.classList.add('fa-x')
    }
    else {
        x.classList.remove('fa-x')
        x.classList.add('fa-bars')
    }

}

// Table

$(document).ready(function () {
    $('#example').DataTable();
});