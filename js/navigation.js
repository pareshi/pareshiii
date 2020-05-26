let header = document.getElementById('header');
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active-menu');
    header.classList.toggle('active-header');
});
