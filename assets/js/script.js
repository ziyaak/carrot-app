$(document).ready(function () {
    $('.menu-toggle').click(function () {
      $('.nav-menu').toggleClass('show');
    });
  
    $('.search-input').on('keypress', function (e) {
      if (e.which == 13) {
        console.log('Search for:', $(this).val());
      }
    });
  
    $('.btn-success').click(function () {
      let query = $('.search-input').val();
      console.log('Search for:', query);
    });
  
    $('.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).slideDown(200);
    }, function () {
      $(this).find('.dropdown-menu').stop(true, true).slideUp(200);
    });
  
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot");
  
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        if (i === index) {
          const content = slide.querySelector(".content");
          content.classList.add("fade-in-up");
        }
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  
    nextBtn.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    prevBtn.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        currentSlide = index;
        showSlide(currentSlide);
      });
    }




);
    
  
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
  
    $('.contact-info i').click(function () {
      $('.nav-menu').toggleClass('show-dropdown');
    });
  });
  
  