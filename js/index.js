$("document").ready(function(){
    $(".profile-mind li.q").click(function(){
        $(this).next().slideToggle().siblings("li.a").slideUp()
        })
        $(".m-btn").click(function(){
            $(".m-btn").toggleClass("on")
            $(".m-nav").toggleClass("on")
        })
        $("html").attr("data-dark", false)
        $(".header .etc ul li").eq(0).click(function(){
            if($("html").attr("data-dark")=="true"){
                $("html").attr("data-dark", "flase")
                const dark_mode = localStorage.getItem("dark_mode")
                if(dark_mode == "fa-sun"){
                    $("html").attr("data-dark", "true")
                    $(".contact-content .sns ul li img").attr("src","img/talk-dark.png")
                    $(".dark-btn i").removeClass("fa-moon").addClass("fa-sun")
                    $(".header .etc ul li i").eq(0).removeClass("fa-moon").addClass("fa-sun")
                }else{
                    $("html").attr("data-dark", "flase")
                    $(".contact-content .sns ul li img").attr("src", "img/talk.png")
                    $(".dark-btn i").removeClass("fa-sun").addClass("fa-moon")
                    $(".header .etc ul li i").eq(0).removeClass("fa-sun").addClass("fa-moon")
                }
                
                $(".contact-content .sns ul li img").attr("src", "img/talk.png")
                localStorage.removeItem("dark_mode")
            }else{
                $("html").attr("data-dark", "true")
                $(".contact-content .sns ul li img").attr("src","img/talk-dark.png")
                localStorage.setItem("dark_mode", "fa-sun")
            }
    
            $(".header .etc ul li i").eq(0)
            .toggleClass("fa-moon fa-sun")
        })
        $(".dark-btn").eq(0).click(function(e){
            if($("html").attr("data-dark")=="true"){
                $("html").attr("data-dark", "flase")
                $(".contact-content .sns ul li img").attr("src", "img/talk.png")
                localStorage.removeItem("dark_mode")
            }else{
                $("html").attr("data-dark", "true")
                $(".contact-content .sns ul li img").attr("src","img/talk-dark.png")
                localStorage.setItem("dark_mode", "fa-sun")
            }
    
    
    
            $(".header .etc ul li i").eq(0)
            .toggleClass("fa-moon fa-sun")
            $(".dark-btn i").eq(0)
            .toggleClass("fa-moon fa-sun")
            
        })
        $(".font-box ul li").click(function(){
            let i = $(this).index();
            if(i == 0){
                $(html).removeClass()
    
            }else{
                $(html).removeClass().addClass("font"+(i));
            }
            
        })
        $(".font-box .icon").click(function(){
            $(this).toggleClass("on");
            $(".font-box ul").toggleClass("on");
        })
    
        let font =["'Noto Sans KR'","'RixInooAriDuriR'","'PyeongChangPeace-Bold'"]
    
        $(".font-box ul li").mouseover(function(){
            let i = $(this).index();
            $("html").css("font-family", font[i])
        })
        .mouseout(function(){
            $("html").css("font-family", "")
    
        })
        
        let type = new Typed("#typed1", {
            stringsElement: "#typed",
            typeSpeed:100
        })


    const swiper = new Swiper(".swiper.web-swiper", {
    autoplay:{
        delay:2000
    },
    slidesPerView:1,
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true
    }

})
// design-work 시작
const swiper2 = new Swiper(".swiper.design-swiper", {
    
    breakpoints:{
        360:{spaceBetween:20,
            slidesPerView:1,
        },
        1024:{spaceBetween:30,
            slidesPerView:2,
        },
        1200:{spaceBetween:40,
            slidesPerView:3,
        }
    },
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  
})

let design_img = [
    "img/kyes.png",
    "img/han.png",
    "img/kyochon.png",
    "img/xian.png",
    "img/alfo.png",
    "img/damun.png",
    "img/asia.png"
]
$("design-swiper .btn-wrap a").click(function(e){
    e.perventDefault()
    let i =$(this).parents(".design-work-content").attr("data-swiper-slide-indec");
    $(".window").show();
    $("window-content").fadeIn();
    $("window-content img").fadeOut()


})


$("design-swiper .btn-wrap a").click(function(){
    let i = $("design-swiper .btn-wrap a").index(this)-4;
    $(".window").show();
    $(".window-content").fadeIn()
})

$(".window,.window-content a").click(function(){
    $(".window").$(selector).hide();
    $(".window-content").fadeOut()
})
//  design-work 끝


        let pro_chk = false
        
        let Fullpage = new fullpage(".fullpage", {
            sectionsColor:["#140a42","#f7f8f9", "#f7f8f9", "#f7f8f9"],
            anchors:["home", "profile","web","design","contact"],
            navigation:true,
            navigationTooltips:["홈","JOB&EDU","WEBDESIGN","CREATOR", "CONTACT",],
            normalScrollElements:"window, .window-content",
            responsiveWidth:1200,

            licenseKey:"603D3EBB-D1B84561-B40D98B6-7A87C3D7",
            afterLoad: function(origin, destination){
            if(destination.index == 0){
                $("fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }
           
            },
            onLeave: function(origin, destination){
                if(destination.index >0){
                    $(".header").fadeIn()
                }else{
                    $(".header").fadeOut()
                }
                $("fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.idex)
                .addClass("on")
                $(".header .nav ul li").removeClass("on").eq(destination.idex-1)
                .addClass("on")
            }
        })


        // profile-mind

    
    })