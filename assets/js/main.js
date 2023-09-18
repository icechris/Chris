/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
 navToggle = document.getElementById('nav-toggle');
  let navClose = document.getElementById('nav-close');

// Validate if constant exists
 if (navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
   
} else if (navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}


// use navClose to close menu
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach (n => n.addEventListener('click', linkAction))



/*=============== SWIPER PROJECTS ===============*/
document.addEventListener("DOMContentLoaded", function (){
    let swiper = new Swiper('.projects__container', { 
        // Optional parameters
         spaceBetween:24,
         direction: 'horizontal',
         loop: true,
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
        //   el: '.swiper-scrollbar',
        },
    
         breakpoints:{ 1200:
            {
            slidesPerView:2,
            spaceBetween:-56,
        },
      } 
      });
})
    /*===
============ SWIPER TESTIMONIAL ===============*/
document.addEventListener("DOMContentLoaded", function (){
    let swiperTestimonial = new Swiper('.testimonial__container', {
        // Optional parameters
        grabCursor:true,
         spaceBetween:24,
         direction: 'horizontal',
         loop: true,
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
        //   el: '.swiper-scrollbar',
        },
      1200:{
         breakpoints:{
            slidesPerView:2,
            spaceBetween:-56,
        },
      } 
      });
})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (contactName.value.trim() === '' || contactEmail.value.trim() === '' || contactProject.value.trim() === '') {
        // Add error classes and set error message
        contactName.classList.add('error');
        contactEmail.classList.add('error');
        contactProject.classList.add('error');
        contactMessage.style.color = 'red';
        contactMessage.textContent = 'Please fill in all the required fields.';
    } else {
        // Remove error classes and set success message
        contactName.classList.remove('error');
        contactEmail.classList.remove('error');
        contactProject.classList.remove('error');
        contactMessage.style.color = 'green';
        contactMessage.textContent = 'Message Sent';

        // Perform form submission or other actions
        // For example, you can submit the form using AJAX or perform other tasks here.
        // service id- template id - public key 
        emailjs.sendForm('service_4wqgqdi', 'template_frrisjj', '#contact-form', '2QIqFMGR4vMGu9TDG')
            .then(() => {
                // Clear input fields
                contactName.value = '';
                contactEmail.value = '';
                contactProject.value = '';

                // Set timeout to clear success message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            })
            .catch((error) => {
                // Show error alert
                alert('Oops ' + error);
            });
    }
};

// Add event listener to submit button
contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const scrollActive = () => {
    const scrollY = window.scrollY 

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sctionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        } 
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, and the show-scroll class  to the a tag with the scrollup 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
         :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50vh, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       :header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400,
    // reset true  animations repeat


})

sr.reveal(`.home__data, .projects__container, .testimonial__container .footer__container`)
sr.reveal(`.home__info div`, {delay:600, origin:'bottom', interval:100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)` , { origin:'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin:'right'})
sr.reveal(`.qualification__content, .services__card`, { interval:'100'})