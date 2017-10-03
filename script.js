'use strict';
let arrEl = [];
let arrElOffsets = [];
let activeHeader;
let closestItem = null;
let closestItemOffset = 0;

window.onload = function(e) {
  arrEl = document.querySelectorAll('.sticky-header');
  for(let i = 0; i<arrEl.length; i++) { 
    arrElOffsets.push(arrEl[i].offsetTop);
    arrEl[i].parentNode.style.height = arrEl[i].parentNode.offsetHeight + 'px';
  }

  stickyHeader();
}

function stickyHeader() {
  window.onscroll = function(e) {
    if (window.pageYOffset < arrElOffsets[0]) {
      closestItem = null;
    } else {
      closestItem = findClosest();
    }
    
    for(let i = 0; i<arrEl.length; i++) {
      arrEl[i].classList.remove('active');
    }

    if (closestItem == null) return;
    arrEl[closestItem].classList.add('active');
  }
}

function findClosest() {
  for(let i = 0; i<arrEl.length; i++) { 

    if ( window.pageYOffset > arrElOffsets[i]){
        closestItem = i;
        closestItemOffset = arrEl[i].offsetTop;
    }
  }

  return closestItem;
}