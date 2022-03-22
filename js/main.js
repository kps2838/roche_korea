$(function(){

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



    //제품소개

    var sliderNum = 0;
    var slide_width = 1211;

    $('#products .arrow.right').click(function(){
        sliderNum++;
        if(sliderNum>2) sliderNum=2;
        $('.product-list').css({
        marginLeft : -(slide_width*sliderNum)
        })
    });

    var sliderNum2 = 2;
    var slide_width = 1211;
    $('#products .arrow.left').click(function(){
        sliderNum2--;
        if(sliderNum2<0) sliderNum2=0;
        $('.product-list').css({
        marginLeft : -(slide_width*sliderNum) + slide_width
        })
    });


    //게시판 탭

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


    // familysite
    $('#family-site').click(function(){
        $('#main-footer .ft-top .family-site-list').toggleClass('on');
    })


});