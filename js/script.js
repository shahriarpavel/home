// MENU TOGGLE
let menu = document.getElementById("menuUl");
let body = document.body;

menu.style.maxHeight = "0px";

function toggleMenu() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "100vh";
    body.style.overflow = "hidden";
  } else if (menu.style.maxHeight == "100vh") {
    menu.style.maxHeight = "0px";
    body.style.overflow = "auto";
  }
}

// DARK MODE TOGGLE FUNCTIONS
const darkToggleBtn = document.querySelector("#toggle-a");
const theme = localStorage.getItem("theme");
const toggleImg = localStorage.getItem("toggleImg");

if (theme) document.body.classList.add(theme);
if (toggleImg) darkToggleBtn.src = "images/light.png";

function handleDarkToggle() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    darkToggleBtn.src = "images/light.png";
    localStorage.setItem("toggleImg", "dark.png");
  } else {
    localStorage.removeItem("theme");
    darkToggleBtn.src = "images/dark.png";
    localStorage.removeItem("toggleImg");
  }
}

darkToggleBtn.addEventListener("click", handleDarkToggle);


// CUSTOM CURSOR
const grad = document.querySelector('.cursor-gradient');
const shadow = document.querySelector('.cursor-shadow');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let gradX = mouseX, gradY = mouseY;
let shadowX = mouseX, shadowY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  gradX += (mouseX - gradX) * 0.2;
  gradY += (mouseY - gradY) * 0.2;
  grad.style.left = gradX + 'px';
  grad.style.top = gradY + 'px';

  shadowX += (mouseX - shadowX) * 0.08;
  shadowY += (mouseY - shadowY) * 0.08;
  shadow.style.left = shadowX + 'px';
  shadow.style.top = shadowY + 'px';

  requestAnimationFrame(animate);
}
animate();

// Add hover effect to all interactive elements
document.querySelectorAll('a, button, input, textarea, [tabindex], .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    grad.classList.add('cursor-hover');
     shadow.classList.add('cursor-hover');
  });
  el.addEventListener('mouseleave', () => {
    grad.classList.remove('cursor-hover');
     shadow.classList.remove('cursor-hover');
  });
});