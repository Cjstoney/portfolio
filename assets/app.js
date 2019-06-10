
console.log("working");
$(document).ready(function () {

    

    function openSlideMenu() {

        document.getElementById('slide-open').style.width = '250px';
        document.getElementById('side-menu').style.width = '250px'
        document.getElementById('content-section').style.marginLeft = '250px';
        console.log("open")
    }
    openSlideMenu();

    function closeSlideMenu() {

        document.getElementById('side-menu').style.width = '0';
        document.getElementById('content-section').style.marginLeft = '0';

    }

    closeSlideMenu();
});