$(function(){

    let w = window.innerWidth;
    console.log(w);
    $(window).resize(function(){
        if(w=768) {
            location.reload()}
        else if(w=767) {
            location.reload()}
    })

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

        $('.family-site-list').mouseleave(function(){
            $(this).removeClass('on');
        })

        $('.family-site-list > li').hover(function(){
            $(this).css({
                'background-color':'rgb(200, 215, 232)',
                'font-weight':'500'
            });
        }, function(){
            $(this).css({
            'background-color':'rgba(200, 215, 232, 0.8)',
            'font-weight':'400'
            })

        })

        // 브래드 크럼
        $('#breadcrumb .sub-menu > ul > li > ul > li').hover(function(){
            $(this).find('a').css('color','#FFE816')
        }, function(){
            $(this).find('a').css('color','#ffffff')
        })

        $('#breadcrumb .sub-menu > ul > li > ul').mouseleave(function(){
            $(this).removeClass('on') 
        });


    } else{
        //모바일 menu
        $('#mobile-menu').click(function(){
            $('#gnb').toggleClass('on')
        })

        $('#gnb > ul > li').click(function(){
            $('.depth2').removeClass('on');
            $(this).find('.depth2').addClass('on');

            $('#gnb > ul > li').children('a').css({
                'background-color':'#fff',
                'color':'#000'
            });

            $(this).children('a').css({
                'background-color':'#1269CD',
                'color':'#fff'
            });

        })
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


    // 브레드크럼
    $('#breadcrumb .sub-menu > ul > li').click(function(){
        $(this).find('ul').toggleClass('on') 
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