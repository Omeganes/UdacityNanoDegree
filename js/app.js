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
var sections = document.querySelectorAll('section');
var fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function elementInViewport(section) 
{
    var bounding = section.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
    {

        return true;
    } 
    else 
    {
        return false;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

    
for (var i = 0; i < sections.length; i++) 
{
    var newElement = document.createElement('li');
    var newAnchor = document.createElement('a');
    newAnchor.innerText = sections[i].getAttribute('data-nav');
    newAnchor.setAttribute('href',"#" +sections[i].getAttribute('id'));
    newAnchor.id = "navEl"+(i+1);
    newAnchor.setAttribute('class', "menu__link");
    newAnchor.addEventListener('click',function scrollDown(event)
    {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'});
    });
    newElement.appendChild(newAnchor);
    fragment.appendChild(newElement);
}
document.querySelector('ul#navbar__list').appendChild(fragment);


//======================================================================

document.addEventListener('scroll',function(){
    for(var i=0;i<sections.length;i++)
    {
        if(!elementInViewport(sections[i]))
        {
            sections[i].classList.remove('your-active-class');
            document.getElementById('navEl'+(i+1)).style.cssText = 'background: null; color: #000';
        }
        else
        {
            sections[i].classList.add('your-active-class');
            document.getElementById('navEl'+(i+1)).style.cssText = 'background: #333; color: #fff';
        }
    }
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


