window.addEventListener('scroll', function() {
    let navbar = this.document.getElementById("mainNavbar");
    if(this.window.scrollY > 50) {
        navbar.classList.add('bg-scroll');

    } else {
        navbar.classList.remove('bg-scroll');
    }
});

