// const setTheme = theme => {
//     document.documentElement.className = theme;
// };

// document.getElementById('theme-select').addEventListener('change', function() {
//   setTheme(this.value);
// });


let menuOpen = false;

// toggle hidden status on the mobile menu icons and the menu upon click
const toggleHidden = () => {
  document.querySelectorAll('.menu').forEach((icon) => {
    icon.classList.toggle('hidden');
  });
  menuOpen === false ? menuOpen = true : menuOpen = false;
};

// event listener for menu icons
document.querySelector('.icon').addEventListener('click', function() {
  // toggle display status
  toggleHidden();
  // delay to run closeMenu function 
  setTimeout(() => {if (menuOpen === true) {closeMenu();}}, 250);
});

// adds one time event listener to clicks outside the open menu in order to close it
const closeMenu = () => {
  if (menuOpen === true) {  
    document.addEventListener('click', function(event){
      if (!event.target.closest('.icon')){
        toggleHidden();
      };
    }, {once: true});
  };
};


// render the full menu when screen size is large enough
const showFullMenu = () => {
  const size = window.matchMedia('(min-width: 768px)')
  if (size.matches) {
      document.querySelector('nav').className = 'menu';
  } else {
      document.querySelector('nav').className = 'menu hidden';
  };
}

// and upon resizing the viewport
window.addEventListener('resize', showFullMenu);

// and run on page load
window.addEventListener('load', showFullMenu);

// toggle the details overlay on the work cards
const showHideWorkDetails = (event) => {
  event.preventDefault();
  console.dir(event.target);

  if (event.target.parentElement.className === 'transparent') {
    event.target.parentElement.className = 'displayed';
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.transform = 'rotate(180deg)';
  } else {
    event.target.parentElement.className = 'transparent';
    event.target.nextElementSibling.style.display = 'none';
    event.target.style.transform = '';
  }
}

document.querySelectorAll('.card-icon').forEach(elem => {
  elem.addEventListener('click', showHideWorkDetails);
})

