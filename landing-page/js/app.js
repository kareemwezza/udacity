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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const newFragment = document.createDocumentFragment();

sections.forEach(section => {
    const secTitle = section.getAttribute('data-nav');
    const secLink = "#" + section.getAttribute('id');
    const newNavItem = document.createElement('li');
    const newNavLink = document.createElement('a');
    newNavLink.className = "menu__link"
    newNavLink.textContent = secTitle;
    newNavLink.addEventListener("click", function(scroll){
        section.scrollIntoView({behavior: "smooth"});
    })
    newNavItem.appendChild(newNavLink);
    newFragment.appendChild(newNavItem);
});

navMenu.appendChild(newFragment);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// Add class 'active' to section when near top of viewport
const aSections = document.querySelectorAll("section");
aSections.forEach(aSection => {
        const activeSec = aSection.getBoundingClientRect();
        aSection.classList.remove("your-active-class");
        if (
            activeSec.top >= 0 &&
            activeSec.left >= 0 &&
            activeSec.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            activeSec.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                aSection.classList.add("your-active-class");
                console.log("I'm in the viewPort")
            }

        else {
            console.log("I'm not in the view port")
        }
        console.log(activeSec)

    
    })

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


