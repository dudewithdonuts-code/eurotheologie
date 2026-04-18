const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const allLinks = document.querySelectorAll('.nav-links a');
/*HAMBURGER SCRIPT*/
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});



/*TRANSITIONS*/
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
})

const animations = document.querySelectorAll('.hidden');
animations.forEach((el)=> observer.observe(el));
