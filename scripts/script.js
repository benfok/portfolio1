// const setTheme = theme => {
//     document.documentElement.className = theme;
// };

// document.getElementById('theme-select').addEventListener('change', function() {
//   setTheme(this.value);
// });


let menuOpen = false;

const toggleHidden = () => {
  document.querySelectorAll('.menu').forEach((icon) => {
    icon.classList.toggle('hidden');
  });
  menuOpen === false ? menuOpen = true : menuOpen = false;
};

document.querySelector('.icon').addEventListener('click', function() {
  toggleHidden();
  setTimeout(() => {if (menuOpen === true) {closeMenu();}}, 250);
});

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
