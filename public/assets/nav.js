// nav expand animation on scrolldown //
const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};

// hamburguer menu toggle //

document.addEventListener("scroll", onScroll);

const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(e  => e.addEventListener('click', () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')

}))