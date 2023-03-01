// Menu 

let header = document.querySelector('header')

document.addEventListener('scroll', function() {

    let scrolltop = document.documentElement.scrollTop;

    if (scrolltop > 0) {
      header.classList.add('bg_color'); 
    } else{
      header.classList.remove('bg_color');
    }
  
})

// About Us 

let section = document.querySelectorAll('.about_us_parent')

document.addEventListener('scroll', function() {

    for (var i = 0; i < section.length; i++) {
       
        let elementTop = section[i].getBoundingClientRect().top;       

        if (elementTop < 500) {
            section[i].classList.add('show')
        } else if (elementTop < 480) {
          section[i].classList.add('show')
        }
    }

})  

// Active class for menu items 

let activecolor = document.querySelectorAll('.navbar-nav > a');

        switch(window.location.href){
             case 'file:///C:/Users/VAJA/Desktop/my_project/Website_2/index.html%20#id' :

             activecolor[0].style.color = '#ad974f';  
             activecolor[0].style.fontWeight = 'bold';  

             break;
        }

        switch(window.location.href){
             case 'file:///C:/Users/VAJA/Desktop/my_project/Website_2/about-us.html' :

             activecolor[1].style.color = '#ad974f';  
             activecolor[1].style.fontWeight = 'bold';  

             break;
        }

        switch(window.location.href){
             case 'file:///C:/Users/VAJA/Desktop/my_project/Website_2/promotions.html' :

             activecolor[2].style.color = '#ad974f';  
             activecolor[2].style.fontWeight = 'bold';  

             break;
        }

        switch(window.location.href){
          case 'file:///C:/Users/VAJA/Desktop/my_project/Website_2/blog.html' :

          activecolor[3].style.color = '#ad974f';  
          activecolor[3].style.fontWeight = 'bold';  

          break;
        }



    //  Jquery for carousel

    let pad; 

    if (window.innerWidth > 370) {
        pad = 50
    } else {
        pad = 30 
    }

      $(document).ready(function(){ 

      $('.owl-carousel').owlCarousel({

          stagePadding:pad,
          loop:true,
          margin:10,
          nav:true,
          navText: false, 
          responsive:{
              0:{
                  items:1
              },
              768:{
                  items:2 
              },
              1000:{
                  items:3
              }
          }
  
      }) 
    });



