$(function(){

    let w = window.innerWidth;
    console.log(w);
    if(w >= 768){
        //gnb 메뉴바
        $('#gnb > ul > li').hover(function(){
            $(this).find('.depth2').addClass('on')
            $(this).find('> a').css('color','#1269CD')
            $('#main-header .depth2-box').addClass('on')
            setTimeout
        },function(){
            $(this).find('> a').css('color','#000')
            $(this).find('.depth2').removeClass('on')
            $('#main-header .depth2-box').removeClass('on')
        });

        $('#main-header .depth2-box').mouseleave(function(){
        });


        //gnb 사이트맵 모달창
        $('#site-map').click(function(){
            $('#sitemap-modal').addClass('on');
        });

        $('#sitemap-modal .close').click(function(){
            $('#sitemap-modal').removeClass('on');
        });

        // familysite
        $('#family-site').click(function(){
            $('#main-footer .ft-top .family-site-list').toggleClass('on');
        })


        // 브래드크럼 hover

        $('#breadcrumb .sub-menu > ul > li').hover(function(){
            $(this).find('ul').addClass('on')
 
        },  function(){
            $(this).find('ul').removeClass('on')
        });


    } else{
        // 모바일 menu
        $('#mobile-menu').click(function(){
            $('#gnb').toggleClass('on')
        })

         // 브래드크럼 hover

        $('#breadcrumb .sub-menu > ul > li').click(function(){
            $(this).find('ul').toggleClass('on')
            });
            

    }



    //메인 페이지 게시판 탭

    $('#news .info-box .tab button').click(function(){
        $('#news .info-box .tab button').removeClass('on')
        $(this).addClass('on')
    })

    $('#news .info-box .tab button').eq(0).click(function(){
        $('#news .info').removeClass('on');
        $('#news .info').eq(0).addClass('on');        
    });

    $('#news .info-box .tab button').eq(1).click(function(){
        $('#news .info').removeClass('on');
        $('#news .info').eq(1).addClass('on');        
    });

    $('#news .info-box .tab button').eq(2).click(function(){
        $('#news .info').removeClass('on');
        $('#news .info').eq(2).addClass('on');        
    });




    //오시는 길 지도
    
    $('#location > section .btn .map-btn').eq(0).click(function(){
        $('#location > section .btn .map-btn').removeClass('on')
        $(this).addClass('on')
        $('#location > section .map-box').removeClass('on')
        $('#location > section .map-box').eq(0).addClass('on')
    })
    
    $('#location > section .btn .map-btn').eq(1).click(function(){
        $('#location > section .btn .map-btn').removeClass('on')
        $(this).addClass('on')
        $('#location > section .map-box').removeClass('on')
        $('#location > section .map-box').eq(1).addClass('on')
    })

});