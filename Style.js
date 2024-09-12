$(document).ready(function(){
    // $("button").click(function(){
    //     $("p").hide()
    // })

    // $("button").dblclick(function(){
    //     $("#test").hide()
    // })

    // $("button").dblclick(function(){
    //     $("p.new").hide()
    // })

    // $("#test").click(function(){
    //     $(this).hide()
    // })

    // $("#mypara").mouseenter(function(){
    //     alert("mouseenter")
    // })

    // $("#mypara").mouseleave(function(){
    //     alert("mouse leave")
    // })
// $("#mypara").hover(
//     function(){
//         alert("hover on")
//     },
//     function(){
//         alert("hover out")
//     }
// )
 $("input").focus(function(){
    $(this).css("background-color", "pink")
 })
 $("input").blur(function(){
    $(this).css("background-color", "green")
 })

})