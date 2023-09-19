const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')

window.onscroll = function() {scrollFunction()};

// w3 schools, 2 different code for different browser engines. 
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }
  }

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive')
    } else {nav.classList.add('responsive')}

}

mobButton.addEventListener('click', mobMenu)
backButton.addEventListener('click', getToTop)