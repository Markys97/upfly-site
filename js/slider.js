

 $('.slider-information').slick({

    fade: true,
    asNavFor: '.employee__slider2'
  });
 $('.employee__slider2').slick({
    arrows:false,
    dots:false,
    asNavFor: '.slider-information',
    fade:true
  });
  
  // slider page о компании
 $('.company-review__slider').slick({
    arrows:true,
    dots:true,
    responsive:[
      {
        breakpoint: 1024,
       settings:{
        arrows:false,
       }
      }
    ]
  

  });
  
  // slider page ВАКАНСИИ

  $('.modal-section__slider').slick({
    arrows:true,
  })

  $('.comment-page__slider').slick({

    arrows:true,
    slidesToShow:2,
    responsive:[
      {
        breakpoint:1025,
        settings:{
          arrows:false,
          dots:true
        }
      },
      {
        breakpoint:669,
        settings:{
         slidesToShow:1,
         arrows:false,
         dots:true
        }
      },
    ]
    
  })

  $('.slider-cases').slick({

    slidesToShow:1,
    arrows:true,
    speed: 1000,
    responsive:[
      {
        breakpoint:1024,
        settings:{
         
          dots:true
        }
      },
      {
        breakpoint:668,
        settings:{
          arrows:false,
          dots:false
        }
      }
    ]
   
    
  })
  // slider modal skill section
  $('.modal-skill__slider').slick({

    slidesToShow:1,
    arrows:true
   
    
  })

