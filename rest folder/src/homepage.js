import restImage from "./restaurant.jpg";
import "./styles.css";


export default function createHomePage(contentDiv) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Bryans Hotel!';
    contentDiv.appendChild(h1);
  
    const img = document.createElement('img');
    img.src = restImage;
    img.alt = 'Restaurant Image';
    img.width = 400;
    contentDiv.appendChild(img);
  
    const p1 = document.createElement('p');
    p1.textContent = 'Experience the culinary delights of Bryans Hotel, where we offer a tantalizing array of dishes crafted with passion and fresh, locally sourced ingredients. Our menu boasts a diverse selection of flavors, from classic comfort food to innovative gourmet creations.';
    contentDiv.appendChild(p1);
  
    const p2 = document.createElement('p');
    p2.textContent = 'Join us for a memorable dining experience in a warm and inviting atmosphere. We can\'t wait to serve you!';
    contentDiv.appendChild(p2);
  }