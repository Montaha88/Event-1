const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarClose = document.querySelector(".sidebarClose"),
      sidebarOpen = document.querySelector(".sidebarOpen");


      let getmode =localStorage.getItem("mode");
        if(getmode && getmode === "dark-mode"){
          body.classList.add("dark");
        }
      
// js code dark-light mode
      modeToggle.addEventListener ("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body .classList .contains("dark")){
          localStorage.setItem("mode" ,"light-mode");
        }else{
          localStorage.setItem("mode","dark-mode")
        }

      })

      searchToggle.addEventListener ("click" , () =>{
        searchToggle.classList.toggle("active");
        

      })
      sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
      })

      body.addEventListener("click", e => {
        let clickedElm = e.target;
        if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
          nav.classList.remove("active");
        }
      })


      /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });