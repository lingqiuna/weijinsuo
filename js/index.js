/**
 * Created by ling on 2017/10/8.
 */
$(function(){
    $(".box").fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation:true,
        scrollingSpeed:1500,
        //页面加载完毕后执行
        afterLoad:function(link,index){
            $(".next").fadeIn();
            $(this).addClass("selected");
        },
        //离开该页面进入下一页面执行
        onLeave:function(index,nextindex,direction){
            $(".next").fadeOut();
            if(index==2 && nextindex==3){
                $(".screen02").find(".sofa").addClass("animated");
            }else if(index==3 && nextindex==4){
                $(".screen03").find(".sofa").hide().siblings(".skewsofa").show().addClass("animated").on("animationend",function(){
                    $(".screen04").find(".sofaImg").show();
                    $(".screen04").find(".cart").addClass("animated").on("animationend",function(){
                     $(".screen04").find(".text .text2").show().siblings().hide();
                        $(".screen04").find(".address").fadeIn(1000,function(){
                            $(".screen04").find(".address .address2").fadeIn(800);
                        });
                    });
                });
            }else if(index==5 && nextindex==6){
                $(".screen05").find(".sofa").addClass("animated");
                $(".screen06").parent().addClass("selected");
            }else if(index==6 && nextindex==7){
                $(".screen07").find(".start img").each(function(i,item){
                    $(item).delay(500*i).fadeIn();
                });
                $(".screen07").find(".good").addClass("animated");
            }
        },
        //进入下一页面，页面内容加载完毕再显示
        afterRender:function(){
            $(".next").on("click",function(){
                $.fn.fullpage.moveSectionDown();
            });
            $(".screen05").find(".hand").on("transitionend",function (){
                $(".screen05").find(".mouse .mouse2").show();
            });

            $(".screen08").on("mousemove",function(e){
                $(".screen08 .hand").css({
                    left: e.clientX+150,
                    top: e.clientY+20
                });
            }).find(".btn").on("mouseenter",function(){
                $(this).children().eq(0).hide().siblings().show();
            }).on("mouseleave",function(){
                $(this).children().eq(0).show().siblings().hide();
            }).siblings(".again").on("click",function(){
                $.fn.fullpage.moveTo(1);
                $(".animated").removeClass("animated");
                $(".selected").removeClass("selected");
                $(".section [style]").removeAttr("style");
            });

        }





    });

});