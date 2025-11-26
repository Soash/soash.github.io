// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop(); // e.g., index.html

  // Load Sidebar (Desktop)
  fetch('../sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar').innerHTML = data;
      const links = document.querySelectorAll('#sidebar a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    });

  // Load Mobile Sidebar (Offcanvas)
  fetch('../mobileSidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('mobile-sidebar').innerHTML = data;

      // Now query inside the correct container
      const navLinks = document.querySelectorAll('#mobile-sidebar .nav-link');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    });
});
