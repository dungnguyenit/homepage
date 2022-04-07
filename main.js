
 $('.menu-icon').click(function() {
   $('nav').slideToggle();
});

$('.nav-li').click(function() {
   $('.nav-ul').slideToggle();
});
$('.nav-li1').click(function() {
   $('.nav-ul1').slideToggle();
});
$('#nav-li2').click(function() {
   $('#nav-ul2').slideToggle();
});


// slide
$('.porter').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows:false,
 });

 const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};
///////$Recycle.Bin
$('.buttonWrapper').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  arrows:false,
  responsive: [
   
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});


$(document).ready(function(){
  $('.counter').counterUp({
    delay: 5,
    time: 6000
  });
});

$('.experience_right').slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});


$('.news-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  arrows:false,
  responsive: [
   
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      }
    }
  ]
});
