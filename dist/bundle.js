/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/vars.js
//  vars
 var secretButton=document.getElementById("secret_button");
 var secretParagraph=document.getElementById("secret_text");
;// CONCATENATED MODULE: ./src/js/script.js


 var showSecret = false;
 
 updateSecretParagraph();
function toggleSecretState() {
     showSecret = !showSecret;
     updateSecretParagraph();
     updateSecretButton()
 }
 
 function updateSecretButton() {
     if (showSecret) {
         secretButton.textContent = 'Hide the Secret';
     } else {
         secretButton.textContent = 'Show the Secret';
     }
 }
 
 function updateSecretParagraph() {
     if (showSecret) {
         secretParagraph.style.display = 'block';
     } else {
         secretParagraph.style.display = 'none';
     }
 }

;// CONCATENATED MODULE: ./src/index.js





secretButton.addEventListener('click', toggleSecretState);
/******/ })()
;