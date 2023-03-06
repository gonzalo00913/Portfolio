 const navLinks = document.querySelectorAll("#myNav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);
    const currentActiveSection = document.querySelector(
      "section:not([style*='display: none'])"
    );
    currentActiveSection.style.display = "none";
    section.style.display = "block";
  });
}); 



/*********************************************************/

const myName = document.querySelector('.my-name');


const myNameText = myName.textContent;
myName.textContent = '';

let i = 0;

function typeEffect() {
  if (i < myNameText.length) {
    myName.textContent += myNameText.charAt(i);
    i++;
    setTimeout(typeEffect, 100); 
  }
}

typeEffect();

const aboutSection = document.getElementById("about");
aboutSection.style.display = "block";
aboutSection.style.opacity = "1";

const moreInfoBtn = document.querySelector('.more-info-btn');
const moreInfo = document.querySelector('.more-info');

/*moreInfoBtn.addEventListener('click', function() {
  if (moreInfo.style.display === 'none') {
    moreInfo.style.display = 'block';
    moreInfoBtn.innerText = 'Menos información';
  } else {
    moreInfo.style.display = 'none';
    moreInfoBtn.innerText = 'Más información';
  }
}); */


 const boton = document.getElementById("no-funciona")

function botons(){
  return alert('Hola, soy el boton que no funciona 😞 ')
}

boton.addEventListener("click",botons) 