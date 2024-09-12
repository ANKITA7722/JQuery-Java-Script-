$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("p").hide(2000);
    // });
    // $("#show").click(function(){
    //     $("p").show(2000);
    // });
    $("#btn").click(function(){
        $("p").toggle()
        
    });


//  $("#fadein").click(function(){
//         $(".box1").fadeIn();
//         $(".box2").fadeIn(1000);
//         $(".box3").fadeIn(3000);
//     });
// });
// $("#fadeOut").click(function(){
//     $(".box1").fadeOut();
//     $(".box2").fadeOut(1000);
//     $(".box3").fadeOUT(3000);

 
 $("#togglefade").click(function(){
            $(".box1").fadeToggle();
            $(".box2").fadeToggle(1000);
            $(".box3").fadeToggle(3000);
        });
    });

    $("#container").click(function(){
        $("#content").slideDown()
    })


