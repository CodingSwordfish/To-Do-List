import createHomePage from './homepage.js';
import createMenuPage from './menupage.js';
import createAboutPage from './aboutpage.js';

const contentDiv = document.getElementById('content');

// Get button elements
const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');

// Initial page load (show Home)
createHomePage(contentDiv);

// Event listeners for tab buttons
homeButton.addEventListener('click', () => {
  clearContent();
  createHomePage(contentDiv);
});

menuButton.addEventListener('click', () => {
  clearContent();
  createMenuPage(contentDiv);
});

aboutButton.addEventListener('click', () => {
  clearContent();
  createAboutPage(contentDiv);
});

// Helper function to clear the content
function clearContent() {
  contentDiv.innerHTML = ''; 
}