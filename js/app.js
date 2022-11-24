
//Create navbar content

const navbarList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

createListItem = () => {
    for (sec of sections){
        listItem = document.createElement('li');
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link"> ${sec.dataset.nav} </a></li>`;

        navbarList.appendChild(listItem);
    }
}
createListItem();



//Set CSS class active state when the element is in the viewport using the getBoundingClientRect() built in function.

window.onscroll = function (){
    document.querySelectorAll("section").forEach(function (active) {
        if (active.getBoundingClientRect().top >= -450 && active.getBoundingClientRect().top <=100){
            active.classList.add('your-active-class');
        }
        else{
            active.classList.remove('your-active-class');
        }
    }
    );
};



//Scrolling to the appropriate section of the page when clicking on a navigation item.

navbar_list.addEventListener('click', (event) =>{
    event.preventDafault();

    if (event.target.dataset.nav) {
        document.getElementById(`${event.target.dataset.nav}`);
        document.scrollIntoView({behavior: 'smooth'});

        setTimeout(() => {
            location.hash = `${event.target.dataset.nav}`;
        }, 200);
    }
}
);


// Go to top button

let mybutton = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}





/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

