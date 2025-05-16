document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('navbar');
    const navIcon = navToggle.querySelector('i');
    
    // Function to handle responsive navigation
    function handleResponsiveNav() {
        if (window.innerWidth <= 768) {
            // Mobile view
            navToggle.style.display = 'block';
            navbar.classList.add('mobile-nav');
            navbar.classList.remove('active');
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        } else {
            // Desktop view
            navToggle.style.display = 'none';
            navbar.classList.remove('mobile-nav');
            navbar.style.display = 'flex';
        }
    }

    // Toggle nav visibility
    function toggleNav() {
        navbar.classList.toggle('active');
        
        // Toggle icon between bars and times
        if (navbar.classList.contains('active')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-times');
        } else {
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        }
    }

    // Close menu when clicking on a link
    function closeMenu() {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        }
    }

    // Event listeners
    navToggle.addEventListener('click', toggleNav);
    
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Initialize and handle resize
    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);
});