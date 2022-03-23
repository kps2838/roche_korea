$(function(){

    let w = window.innerWidth;
    console.log(w);
    if(w >= 768){
        // //제품소개
        let curPos = 0;
        let postion = 0;
        const IMAGE_WIDTH = 1211;
        const prevBtn = document.querySelector(".arrow.left")
        const nextBtn = document.querySelector(".arrow.right")
        const images = document.querySelector(".product-list")
        
        function prev(){
        if(curPos > 0){
            nextBtn.removeAttribute("disabled")
            postion += IMAGE_WIDTH;
            images.style.transform = `translateX(${postion}px)`;
            curPos = curPos - 1;
        }
        if(curPos == 0){
            prevBtn.setAttribute('disabled', 'true')
        }
        }
        function next(){
        if(curPos < 2){
            prevBtn.removeAttribute("disabled")
            postion -= IMAGE_WIDTH;
            images.style.transform = `translateX(${postion}px)`;
            curPos = curPos + 1;
        }
        if(curPos == 2){
            nextBtn.setAttribute('disabled', 'true')
        }
        }
        
        function init(){
        prevBtn.setAttribute('disabled', 'true')
        prevBtn.addEventListener("click", prev)
        nextBtn.addEventListener("click", next)
        }
        
        init();

    } else{

        // //제품소개
        let curPos = 0;
        let postion = 0;
        let w = window.innerWidth;
        const IMAGE_WIDTH = w;
        const prevBtn = document.querySelector(".arrow.left")
        const nextBtn = document.querySelector(".arrow.right")
        const images = document.querySelector(".product-list")
        
        function prev(){
        if(curPos > 0){
            nextBtn.removeAttribute("disabled")
            postion += IMAGE_WIDTH;
            images.style.transform = `translateX(${postion}px)`;
            curPos = curPos - 1;
        }
        if(curPos == 0){
            prevBtn.setAttribute('disabled', 'true')
        }
        }
        function next(){
        if(curPos < 8){
            prevBtn.removeAttribute("disabled")
            postion -= IMAGE_WIDTH;
            images.style.transform = `translateX(${postion}px)`;
            curPos = curPos + 1;
        }
        if(curPos == 8){
            nextBtn.setAttribute('disabled', 'true')
        }
        }
        
        function init(){
        prevBtn.setAttribute('disabled', 'true')
        prevBtn.addEventListener("click", prev)
        nextBtn.addEventListener("click", next)
        }
        
        init();

         // 브래드크럼 hover
    }
});