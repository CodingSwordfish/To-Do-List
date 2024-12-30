import "./styles.css";

export default function createAboutPage(contentDiv) {
    const h2 = document.createElement('h2');
    h2.textContent = 'About Us';
    contentDiv.appendChild(h2);
  
    const p = document.createElement('p');
    p.textContent = 'We are passionate about providing delicious food and exceptional service.';
    contentDiv.appendChild(p);
  }