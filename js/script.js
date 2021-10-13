$(document).ready(function(){
	// $('#menu').click(function(){
    //     $(this).toggleClass('fa-times');
    //     $('header').toggleClass('toggle');
    // });

    // $(window).on('scroll load',function(){
    //     $('#menu').removeClass('fa-times');
    //     $('header').removeClass('toggle');

    
        if($(window).scrollTop() > 0){
            $('.top').show();
        } else {
            $('.top').hide();
        }
        $('#menu').hide();
        $('.top').show();    
    // });

    // smooth scrolling 
    $('a[href*="#"]').on('click',function(e){
                e.preventDefault();
                $('html, body').animate({
                scrollTop : $($(this).attr('href')).offset().top,
            },
            500, 
            'linear'
            );
        });
});

let menu = document.querySelector('#menu');
let menu_btn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');



menu_btn.onclick = () => {
    menu_btn.classList.toggle('fa-times');
    header.classList.toggle('active');

}

window.onscroll = () => {
    menu_btn.classList.remove('fa-times')
    header.classList.remove('active');
}

let themeToggler =  document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if((themeToggler.classList.contains('fa-sun'))){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

