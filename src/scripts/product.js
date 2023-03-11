//make product-slider image always squared
const imageContainer = document.querySelector('.pp--slider-wrapper .main-img');

function squareImage(divToSquare){
    const imgWidth = divToSquare.clientWidth;
    divToSquare.style.height = `${imgWidth}px`;
}
squareImage(imageContainer);
setInterval(squareImage(imageContainer), 1000);
window.addEventListener('resize' , () => squareImage(imageContainer));


const sliderImages = document.querySelectorAll('.product-data-page .pp--slider-wrapper .slider-imgs .imgs .img img');
const mainImage = document.querySelector('.product-data-page .pp--slider-wrapper .main-img img');

//set the main image src at the first image in the slider   
const sliderFirstImgSrc = sliderImages[0].getAttribute('src');
mainImage.setAttribute('src' , `${sliderFirstImgSrc}`);

sliderImages.forEach(img => {
    img.addEventListener('click' , ()=>{
        const clickedImageSrc = img.getAttribute('src');
        mainImage.setAttribute('src' , `${clickedImageSrc}`);
    })
});



const mainImgSlideBtnLeft = document.querySelector('#product-data-page .row .pp--slider-wrapper .main-img .slide-btn-l');
const mainImgSlideBtnRight = document.querySelector('#product-data-page .row .pp--slider-wrapper .main-img .slide-btn-r');
const sliderImgSlideBtnLeft = document.querySelector('#product-data-page .row .pp--slider-wrapper .slider-imgs .slide-btn-l');
const sliderImgSlideBtnRight = document.querySelector('#product-data-page .row .pp--slider-wrapper .slider-imgs .slide-btn-r');
const sliderContainer = document.querySelector('#product-data-page .row .pp--slider-wrapper .slider-imgs .imgs');

// Main image sliding left and right
mainImgSlideBtnLeft.addEventListener('click' , ()=>{
    const currentImageSrc = mainImage.getAttribute('src');
    let index = 0;
    for(i=0 ; i < sliderImages.length ; i++){
        imgSrc =  sliderImages[i].getAttribute('src');
        if(imgSrc == currentImageSrc){
        index=i;
        }
    }
    let nextIndex = index-1;
    if(nextIndex < 0){
        nextIndex = sliderImages.length-1;
    }
    nextImgSrc = sliderImages[nextIndex].getAttribute('src');
    mainImage.setAttribute('src' , `${nextImgSrc}`);
})
mainImgSlideBtnRight.addEventListener('click' , ()=>{
    const currentImageSrc = mainImage.getAttribute('src');
    let index = 0;
    for(i=0 ; i < sliderImages.length ; i++){
        imgSrc =  sliderImages[i].getAttribute('src');
        if(imgSrc == currentImageSrc){
        index=i;
        }
    }
    let nextIndex = index+1;
    if(nextIndex > sliderImages.length-1){
        nextIndex = 0;
    }
    nextImgSrc = sliderImages[nextIndex].getAttribute('src');
    mainImage.setAttribute('src' , `${nextImgSrc}`);
})

// images slider left and right  
sliderImgSlideBtnLeft.addEventListener('click' , ()=>{
    sliderContainer.scrollBy({
        top: 0,
        left: -166,
        behavior: "smooth",
    })
    
})
sliderImgSlideBtnRight.addEventListener('click' , ()=>{
    sliderContainer.scrollBy({
        top: 0,
        left: 166,
        behavior: "smooth",
    })
})
// hide right and left buttons when scroll ends 
hideBtnR();
hideBtnL();
sliderContainer.addEventListener('scroll' ,()=>{
     hideBtnL();
     hideBtnR();
})

function hideBtnL(){
    if(sliderContainer.scrollLeft == 0){
        sliderImgSlideBtnLeft.style.opacity = '0';
    }
    else if(sliderContainer.scrollLeft > 0 ) {
        sliderImgSlideBtnLeft.style.opacity = '1';
    }
}
function hideBtnR(){
    const sliderRightEnd = sliderContainer.scrollWidth - sliderContainer.clientWidth - sliderContainer.scrollLeft;
    if(sliderRightEnd < 1){
        sliderImgSlideBtnRight.style.opacity = '0';
    }
    else if(sliderRightEnd > 1 ) {
        sliderImgSlideBtnRight.style.opacity = '1';
    }
}