import { getElement } from "../utils.js";

const scrollToTopBtn = getElement(".scrollToTop");

let oldValue = 0;

if (window.innerWidth >= 1440) {
  document.addEventListener( "scroll", () => {
    let newValue = window.pageYOffset;

    if ( oldValue - newValue < 0 ) scrollToTopBtn.classList.add( "show" ); 
    else scrollToTopBtn.classList.remove( "show" );
    
    oldValue = newValue;
  });
}

scrollToTopBtn.addEventListener( "click", () => { window.scrollTo( { top: 0, behavior: "smooth" } ) } );
