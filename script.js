$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
       $('.navigation').addClass('sticky');
        }
       else{
           $('.navigation').removeClass("sticky");
       }
       if(this.scrollY>100){
           $('.scroll-up-btn').addClass("show");}
      else{
           $('.scroll-up-btn').removeClass("show");
        }


    });
   
 


    $(".scroll-up-btn").click(function() {
        $('html').animate({scrollTop:0})
    })

    // toggle
    $('.menu-btn').click(function(){
        $('.second ul').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    
    $('.second li a').click(function(){
        $('.second ul').removeClass("active");
        $('.menu-btn i').removeClass("active");


    });



    // typing animation script

    var typed = new Typed(".typing",{
        strings: ["Student [XII] ","PartTime-CoDer...","(-_-) OtaKu!!","Music-Lover (^ _ ^)"],
        typeSpeed: 100 ,
        backSpeed: 60,
        loop: true

    })
    var typed = new Typed(".typing-2",{
        strings: ["Student [XII] ","PartTime-CoDer...","(^ _ ^) OtaKu!!","(-_-) Music-Lover"],
        typeSpeed: 100 ,
        backSpeed: 60,
        loop: true

    })
});


