var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block")
        dropdownContent.style.display = "none";
    else
        dropdownContent.style.display = "block";
  });
}

document.querySelectorAll('.leftnav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const section = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const sectionPosition = section.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  });
});

