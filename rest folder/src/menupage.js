import pizzaImages from "./pizza.jpg";
import pastaImages from "./pasta.jpg";
import "./styles.css";


export default function createMenuPage(contentDiv) {
    const h2 = document.createElement('h2');
    h2.textContent = 'Our Menu';
    contentDiv.appendChild(h2);
  
    // Example: Add menu items with images
    const menuList = document.createElement('ul');
  
    // Create a list item for Pizza
    const pizzaItem = document.createElement('li');
    const pizzaImage = document.createElement('img');
    pizzaImage.src = pizzaImages; 
    pizzaImage.alt = 'Pizza Image'; 
    pizzaItem.appendChild(pizzaImage);
    pizzaItem.appendChild(document.createTextNode(' - Pizza')); 
    menuList.appendChild(pizzaItem);
  
    // Create a list item for Pasta
    const pastaItem = document.createElement('li');
    const pastaImage = document.createElement('img');
    pastaImage.src = pastaImages; 
    pastaImage.alt = 'Pasta Image'; 
    pastaItem.appendChild(pastaImage);
    pastaItem.appendChild(document.createTextNode(' - Pasta')); 
    menuList.appendChild(pastaItem);
  
    contentDiv.appendChild(menuList); 
  }