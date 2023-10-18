/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__links");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  contactConfirm = document.getElementById("contact-confrim");

const sendEmail = (e) => {
  e.priventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    contactConfirm.classList.remove("color-blue");
    contactConfirm.classList.add("color-red");

    // show message

    contactConfirm.textContent = "write all the fields";
  } else {
    emailjs
      .sendForm(
        "service_i4dv2pi",
        "template_h88usdf",
        "#contact-form",
        "9QrLDrTLnP9bSdPAq"
      )
      .then(() => {
        contactConfirm.classList.add("color-blue");
        contactConfirm.textContent = "Message sent 💚";

        setTimeout(() => {
          contactConfirm.textContent = "";
        }, 5000);
      });
  }
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
// const scrollUp = () => {
//   const scrollUp = document.getElementById("scroll-up");
//   this.scrollY >= 350
//     ? scrollUp.classList.add("show-scroll")
//     : scrollUp.classList.remove("show-scroll")

// };

// window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selectedTheme", getCurrentTheme);
  localStorage.setItem("selectedIcon", getCurrentIcon);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/

// const 


// ***************** avtar animation ************************/
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'U9dvbGMLza.json' // lottie file path
})


// 'https://assets9.lottiefiles.com/packages/lf20_5n8yfkac.json'