// <!-- --------------Stickey Nav---------------- -->
$(window).on('scroll',function(){
  let offset=window.scrollY
  if(offset>300){
    $('nav').addClass("nav_scroled")
  }
  else{
    $('nav').removeClass("nav_scroled")
  }
})


// <!-- --------------Toggle Menu---------------- -->
$(document).ready(()=>{
  $(".fas").click(()=>{
    $(".nav_links").toggle(400);
  })
})


// <!-- --------------publicution---------------- -->
$('.brand-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
