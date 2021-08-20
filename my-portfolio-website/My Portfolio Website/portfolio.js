$(function(){
    let lis = $(".work li")
    console.log($(".work li"));
    console.log($(".work li").length)
    $.fn.inView = function(){
        let win = $(window);
        let viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()+500
        };
        viewport.right = viewport.left + win.width()-500;
        viewport.bottom = viewport.top + win.height();
     
       obj = $(this);
       let objEndPos = (obj.offset().left + obj.outerWidth());

       
     
        return (viewport.right >= objEndPos && viewport.left <= objEndPos? true:false);
    }
    
    $(".navigation div").each(function(){
        $(this).click(function(){
            if($(this).is("#about")){
                $(".navigation div").css("color","white");
                $(this).css("color","#003F5E");
                $(".about-content img").animate({height:"50vh"},500);
                $(".route").hide();
                $(".about").show();

            }
            else if($(this).is("#work")){
                $(".navigation div").css("color","white");
                $(this).css("color","#003F5E");
                $(".about-content img").animate({height:0},500);
                $(".route").hide();
                $(".works").show();

            }
            
            else{
                $(".navigation div").css("color","white");
                $(this).css("color","#003F5E");
                $(".about-content img").animate({height:0},500);
                $(".route").hide();
                $(".content").show();

            }
           
        })

    })
    $(".more").click(function (){
        $(".navigation div").css("color","white");
        $("#work").css("color","#003F5E");
        $(".about-content img").animate({height:0},500);
        $(".route").hide();
        $(".works").show();
        
        

    })
    // $("#about").hover(function(){
    //     $(".content").hide();
    //     $(".content").css("transition" ,"0 0 15px 10px rgba(0, 0, 0, 0.3)")
    //     $(".about").show();
    // })
//    $(".list").each(function(){
//     $(this).mouseover(function(){
//         $(this).css({"opacity" : "1"});
//         $(this).find("img").css("box-shadow" ,"0 0 15px 10px rgba(0, 0, 0, 0.3)")
//         $(this).find("div").css({"margin-top": "15px", "opacity":"1"});
//       });
//     $(this).mouseout(function(){
//         $(this).css({"opacity" : "0.3"});
//         $(this).find("img").css("box-shadow" ,"none")
//         $(this).find("div").css({"margin-top": "40px", "opacity":"0"});
       
//     });
// })
if ($(window).width() > 950){
    $(window).on('scroll', function() {
        $(".work").css("left", -($(window).scrollTop()-1200));
        if($(window).scrollTop() > 500){
            $('.intro,.direction').css('opacity',1-$(window).scrollTop()/100);
          
        }
        else{
            $('.intro, .direction').css('opacity', 1);
        }
        if($(window).scrollTop() > 1900){
            $('.more , .social').css('opacity', 1)

        }
        else{
            $('.more , .social').css('opacity', 0)
        }
        $(".list").each(function(){
            if($(this).inView()){
                $(this).css({"opacity" : "1"});
                $(this).find("img").css("box-shadow" ,"0 0 15px 10px rgba(0, 0, 0, 0.3)")
                $(this).find("div").css({"margin-top": "20px", "opacity":"1"});
            }
            else{
                $(this).css({"opacity" : "0.3"});
                $(this).find("img").css("box-shadow" ,"none")
                $(this).find("div").css({"margin-top": "30px", "opacity":"0"});

            }
           
          });
       
      });
    
    }

  
})