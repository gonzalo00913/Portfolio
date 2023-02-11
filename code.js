const navLinks = document.querySelectorAll("#myNav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);
    const currentActiveSection = document.querySelector("section:not([style*='display: none'])");
    
    currentActiveSection.style.display = "none";
    section.style.display = "block";
  });
});

/*********************************************************/
