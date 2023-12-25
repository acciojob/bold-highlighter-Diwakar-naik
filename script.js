// script.js

function highlight() {
  // Get all <strong> elements within the paragraphs
  var boldElements = document.querySelectorAll('p strong');

  // Change the color of bold elements to green
  boldElements.forEach(function (element) {
    element.style.color = 'green';
  });
}

function return_normal() {
  // Get all <strong> elements within the paragraphs
  var boldElements = document.querySelectorAll('p strong');

  // Revert the color of bold elements back to black
  boldElements.forEach(function (element) {
    element.style.color = 'black';
  });
}
