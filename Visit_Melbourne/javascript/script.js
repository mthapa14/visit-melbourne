//defining a variable
const h3mod1 = document.querySelector('#h3-mod1');
const h2mod1 = document.getElementById('h2-mod1');
const h3mod2 = document.querySelector('#h3-mod2');
const h2mod2 = document.getElementById('h2-mod2');
const h3mod3 = document.querySelector('#h3-mod3');
const h2mod3 = document.getElementById('h2-mod3');

const fulllink1 = document.getElementById('full-link-1'),
fulllinkpara1 = document.getElementById('full-link-para1'),
fulllink2 = document.getElementById('full-link-2'),
fulllinkpara2 = document.getElementById('full-link-para2'),
fulllink3 = document.getElementById('full-link-3'),
fulllinkpara3 = document.getElementById('full-link-para3');

//adding event listener
h3mod1.addEventListener('mouseenter', () => h2mod1.classList.remove('h2-mod'));
h3mod2.addEventListener('mouseenter', () => h2mod2.classList.remove('h2-mod'));
h3mod3.addEventListener('mouseenter', () => h2mod3.classList.remove('h2-mod'));
h3mod1.addEventListener('mouseleave', () => h2mod1.classList.add('h2-mod'));
h3mod2.addEventListener('mouseleave', () => h2mod2.classList.add('h2-mod'));
h3mod3.addEventListener('mouseleave', () => h2mod3.classList.add('h2-mod'));


//defining showlinkpara
function showlinkpara1() {
    fulllinkpara1.classList.toggle('full-link-para');
}
function showlinkpara2() {
  fulllinkpara2.classList.toggle('full-link-para');
}
function showlinkpara3() {
  fulllinkpara3.classList.toggle('full-link-para');
}

fulllink1.addEventListener('click', showlinkpara1);
fulllink2.addEventListener('click', showlinkpara2);
fulllink3.addEventListener('click', showlinkpara3);



//modal for welcome message
function setMessage() {
    modal.classList.add('show-modal');
}
setTimeout(setMessage, 2500);



const close = document.getElementById('close');
const modal = document.getElementById('modal');

//hide modal
close.addEventListener('click', ()=> modal.classList.remove('show-modal'));

//hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);


/* Modal for top 8 famous places */
const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".extra-modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".extra-modal").id));
});

modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".extra-modal.modal-show")) {
    toggleModal(document.querySelector(".extra-modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(modal.classList.contains("modal-show")) {
    modal.classList.add("modal-hide");
    modal.classList.remove("modal-show", "modal-hide");
    modal.style.display = "none";
  }
  else {
    modal.style.display = "block";
    modal.classList.add("modal-show");
  }
}

//Js for faq
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
        accordionItemBody.style.maxHeight = 0;
        }
    });
});


//scrolling js
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

//Smoth scroll function
function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

//interface visit melbourne
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [".....", "fun", "educational purpose", "time pass", "spending time with family", " vacation"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

//Typing interface function
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});