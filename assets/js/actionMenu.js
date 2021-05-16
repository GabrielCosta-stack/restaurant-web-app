const burguerBtn = document.querySelector(".nav-list__burguer-btn");
const navList = document.querySelector(".nav-list");


let timesButtonClicked = 0;
let menuOpen = false;

burguerBtn.addEventListener("click", () => {
  navList.classList.toggle("el--visible");
  document.body.style.overflow = 'hidden';
  timesButtonClicked++;
  menuOpen = true;
  if (timesButtonClicked === 2) {
    document.body.style.overflow = 'visible';
    timesButtonClicked = 0;
    menuOpen = false;
  }
});

navList.addEventListener("click", (event) => {
  if (event.target == navList) {
    navList.classList.remove("el--visible");
    document.body.style.overflow = 'visible';
    timesButtonClicked = 0;
    openMenu = false;
  }
});

window.addEventListener('resize', () => {
  if (menuOpen === true && window.innerWidth >= 901) {
    navList.classList.remove("el--visible");
    document.body.style.overflow = 'visible';
    openMenu = false;
  }
});

