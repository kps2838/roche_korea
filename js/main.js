$(function(){
    $('#gnb > ul > li').hover(function(){
        $(this).find('.depth2').addClass('on')
        $(this).find('> a').css('color','#1269CD')
        $('#gnb .depth2-box').addClass('on')
    },function(){
        $(this).find('> a').css('color','#000')
        $(this).find('.depth2').removeClass('on')
        $('#gnb .depth2-box').removeClass('on')
    });

    $('#gnb .depth2-box').mouseleave(function(){
    });

    $('#site-map').click(function(){
        $('#sitemap-modal').addClass('on');
    });

    $('#sitemap-modal .close').click(function(){
        $('#sitemap-modal').removeClass('on');
    });
});