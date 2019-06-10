console.log("working");


    $('#slide-open').on('click', function(){
        document.getElementById('slide-open').style.width = '250px';
        document.getElementById('side-menu').style.width = '250px'
        document.getElementById('content-section').style.marginLeft = '250px';
    });

    $('#slide-close').on('click',function(){
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('content-section').style.marginLeft = '0';
    });
