import { goCakes, changeProductsCakes } from './modules/cakes.js';
import { goCupCakes, changeProductsCupCakes } from './modules/cupcakes.js';
import { goCandy, changeProductsCandy } from './modules/candy.js';
import { goHome,changeProductsHome } from './modules/home.js';

// Navbar lateral
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
}

window.addEventListener("load",() => {
  // Loading home page
  let pathName = window.location.pathname;

  console.log(pathName.substring(pathName.length-1,1));

  if (pathName.substring(pathName.length-1)==='/' && pathName.length>1){
    pathName = pathName.slice(0,-1);
  }

  switch (pathName) {
    case '/':{
      window.dispatchEvent(stateChangeHome);
      break;
    }
    case '/cakes':{
      window.dispatchEvent(stateChangeCakes);
      break;
    }  
    case '/cupcakes':{
      window.dispatchEvent(stateChangeCupCakes);
      break;
    }
    case '/candy':{
      window.dispatchEvent(stateChangeCandy);
      break;
    }
    default:
      window.dispatchEvent(stateChangeHome);
  }
});

// Creating Custom Events
const stateChangeHome = new CustomEvent('onstatechange', {
  detail: {
    newRoute: 'home'
  }
}); 
const stateChangeCakes = new CustomEvent('onstatechange', {
  detail: {
    newRoute: 'cakes'
  }
}); 
const stateChangeCupCakes = new CustomEvent('onstatechange', {
  detail: {
    newRoute: 'cupcakes'
  }
}); 
const stateChangeCandy = new CustomEvent('onstatechange', {
  detail: {
    newRoute: 'candy'
  }
}); 

// Adding Event Listener da Navbar
const ctnLnk = document.querySelector('.links');
const lnk = ctnLnk.querySelectorAll('a');
lnk[0].addEventListener('click',(event) => {push(event)});
lnk[1].addEventListener('click',(event) => {push(event)});
lnk[2].addEventListener('click',(event) => {push(event)});
lnk[3].addEventListener('click',(event) => {push(event)});

  // Listen for PopStateEvent
  // (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    // Grab the history state id
    let stateId = event.state.id;
    // Visually select the clicked button/tab/box
    loadPage(stateId);
});

  // Listen for onstatechange event
window.addEventListener("onstatechange", event => {
  // Get detail newRoute
  let stateId = event.detail.newRoute;

  // Load page
  loadPage(stateId);
});

function push(event) {
  // Get id attribute of the button or link clicked
  let id = event.target.id;
  // Update Title in Window's Tab
  // document.title = id;
  // Finally push state change to the address bar
  if (id==='home'){
    window.history.pushState({id}, `${id}`, `/`);
  } else {
    window.history.pushState({id}, `${id}`, `/${id}`);
  }

  // Dispatching event
  switch (id) {
    case 'home':{
      window.dispatchEvent(stateChangeHome);
      break;
    }
    case 'cakes':{
      window.dispatchEvent(stateChangeCakes);
      break;
    }  
    case 'cupcakes':{
      window.dispatchEvent(stateChangeCupCakes);
      break;
    }
    case 'candy':{
      window.dispatchEvent(stateChangeCandy);
      break;
    }
    default:
      window.dispatchEvent(stateChangeHome);
  }
}

function loadPage(goPage){
  const ctnMain = document.getElementById('content');
  switch (goPage) {
    case 'home':{
      ctnMain.innerHTML = goHome();
      changeProductsHome();
      break;
    }
    case 'cakes':{
      ctnMain.innerHTML = goCakes();
      changeProductsCakes();
      break;
    }  
    case 'cupcakes':{
      ctnMain.innerHTML = goCupCakes();
      changeProductsCupCakes();
      break;
    }
    case 'candy':{
      ctnMain.innerHTML = goCandy();
      changeProductsCandy();
      break;
    }
  }
}

