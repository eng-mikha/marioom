document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // يمكنك تعديل هذا الرقم لتغيير وقت الظهور

        if (elementPosition <= screenPosition) {
            element.classList.add('visible');
        }
    });
});

// window.onload = function() {
//     const elements = document.querySelectorAll('.hidden-top');
    
//     elements.forEach(element => {
//         element.classList.add('visible-top');
//     });
// };





document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality
    const menuIcon = document.getElementById('menu');
    const navList = document.getElementById('list');
    const servicesLi = document.getElementById('services');
    const locationsLi = document.getElementById('menu-two');
    const servicesSubmenu = servicesLi.querySelector('.s-li');
    const locationsSubmenu = locationsLi.querySelector('.loc-li');

    // Toggle mobile menu
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('visible');
    });

    // Toggle services submenu and close locations submenu
    servicesLi.addEventListener('click', function(e) {
        e.stopPropagation();
        servicesSubmenu.classList.toggle('visible');
        if (locationsSubmenu.classList.contains('visible')) {
            locationsSubmenu.classList.remove('visible');
        }
    });

    // Toggle locations submenu and close services submenu
    locationsLi.addEventListener('click', function(e) {
        e.stopPropagation();
        locationsSubmenu.classList.toggle('visible');
        if (servicesSubmenu.classList.contains('visible')) {
            servicesSubmenu.classList.remove('visible');
        }
    });

    // Close all submenus and main menu when clicking outside
    document.addEventListener('click', function(e) {
        // Check if the click is outside the navbar
        if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
            navList.classList.remove('visible');
        }

        // Check if the click is outside the services submenu
        if (!servicesLi.contains(e.target)) {
            servicesSubmenu.classList.remove('visible');
        }

        // Check if the click is outside the locations submenu
        if (!locationsLi.contains(e.target)) {
            locationsSubmenu.classList.remove('visible');
        }
    });

    // Horizontal scrolling for treatments
    const photosContainer = document.querySelector('.photos');
    const scrollLeftBtn = document.querySelector('.fa-arrow-left');
    const scrollRightBtn = document.querySelector('.fa-arrow-right');

    scrollLeftBtn.addEventListener('click', function() {
        photosContainer.scrollBy({
            left: -330,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function() {
        photosContainer.scrollBy({
            left: 330,
            behavior: 'smooth'
        });
    });

    // Drag to scroll functionality
    let isDragging = false;
    let startX, scrollLeft;

    photosContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - photosContainer.offsetLeft;
        scrollLeft = photosContainer.scrollLeft;
        photosContainer.style.cursor = 'grabbing';
    });

    photosContainer.addEventListener('mouseleave', function() {
        isDragging = false;
        photosContainer.style.cursor = 'grab';
    });

    photosContainer.addEventListener('mouseup', function() {
        isDragging = false;
        photosContainer.style.cursor = 'grab';
    });

    photosContainer.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - photosContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
        photosContainer.scrollLeft = scrollLeft - walk;
    });
});


