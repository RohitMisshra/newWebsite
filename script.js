$(document).ready(function(){
    
    /* Black Film */

    $(".aboutContent").hide();
    
    $(".film").mouseenter(function(){
    },
    function(){
        $(".aboutContent").fadeIn(2000);
    })
    
    $(".film").mouseenter(function(){
    },
    function(){
        $(".film").animate({opacity:0.8}, 1500);
    })
    
    /* slide facebook and twitter */

    $(".slider1").click(function(){
        $(".slider1").slideUp();
    });

    $(".slider2").click(function(){
        $(".slider2").slideUp();
    });

    /*media coverage*/

    $(".newsHead").hide();
    
    $(".newsImg1").mouseenter(function(){
    },
    function(){
        $(".newsHead").fadeIn(1000);
    })

    /*above footer carousel*/

    /*Nav*/
    $(".nav li").on("click", function(){
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

})


