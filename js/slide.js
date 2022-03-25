$(function(){
    let w = window.innerWidth;
    console.log(w);
    if(w >= 768){
        let slideNum = 0;
        let position = 0;
    
        $('.arrow.left').click(function(){
            if(slideNum > 0){
                position += 1211;
                $('.product-list').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
                $(this).find('img').attr('src', './images/left-arrow.svg')
                $('.arrow.right').find('img').attr('src', './images/right-arrow.svg')
            }
            if(slideNum == 0){
                $('.product-list').css('transform', `0`);
                $(this).find('img').attr('src', './images/left-arrow-done.svg')

            }
        })
    
        $('.arrow.right').click(function(){
            if(slideNum < 2){
                position-= 1211;
                $('.product-list').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
                $('.arrow.left').find('img').attr('src', './images/left-arrow.svg')
                $(this).find('img').attr('src', './images/right-arrow.svg')
            }
            if(slideNum == 2){
                $('.product-list').css('transform', `2422px`);
                $(this).find('img').attr('src', './images/right-arrow-done.svg')
            }
        })

    } else{
        let slideNum = 0;
        let position = 0;
    
        $('.arrow.left').click(function(){
            if(slideNum > 0){
                position += w;
                $('.product-list').css('transform', `translateX(${position}px)`);
                slideNum = slideNum-1;
                $(this).find('img').attr('src', './images/left-arrow.svg')
                $('.arrow.right').find('img').attr('src', './images/right-arrow.svg')
            }
            if(slideNum == 0){
                $('.product-list').css('transform', `0`);
                $(this).find('img').attr('src', './images/left-arrow-done.svg')
            }
        })
    
        $('.arrow.right').click(function(){
            if(slideNum < 8){
                position-= w;
                $('.product-list').css('transform', `translateX(${position}px)`);
                slideNum = slideNum+1;
                $('.arrow.left').find('img').attr('src', './images/left-arrow.svg')
                $(this).find('img').attr('src', './images/right-arrow.svg')
            }
            if(slideNum == 8){
                $('.product-list').css('transform', w*9);
                $(this).find('img').attr('src', './images/right-arrow-done.svg')

            }
        })
    }
});