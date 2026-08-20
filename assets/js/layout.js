document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HEADER
    ========================= */

    document.getElementById("header").innerHTML = `




        <!-- TOP HEADER -->
        <div class="top-header">
            <div class="container g-0 g-lg-1">
                <div class="top-header-inner">

                    <div class="top-header-left">

                        <a href="mailto:aarambhenergies@gmail.com">
                            <i class="fa-regular fa-envelope"></i>
                            aarambhenergies@gmail.com
                        </a>

                        <a href="tel:+918181939372">
                            <i class="fa-solid fa-phone"></i>
                            +91-8181939372
                        </a>

                        <a class="d-none d-md-block"
                           href="tel:+918934975282">
                            +91-8934975282
                        </a>

                    </div>

                    <div class="top-header-right d-none d-md-block">
                        <div class="item-flex">

                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>

                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>

                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- MOBILE MENU -->
        <header class="mobile-menu d-lg-none mini-scrollbar">

            <div class="container g-0 g-lg-1">

                <nav id="navbar-menu-mobile"
                     class="px-2 px-lg-0">

                    <div class="d-flex justify-content-between align-items-center w-100">

                        <a href="index.html">
                            <img src="assets/images/logo/Arambhlogo.png"
                                 alt="Aarambh Energies">
                        </a>

                        <i class="fa-solid fa-xmark text-black fs-2 close-menu"></i>

                    </div>


                    <ul class="mb-0 menu">

                        <li>
                            <a class="d-flex align-items-center"
                               href="index.html">
                                Home
                            </a>
                        </li>


                        <li class="submenu">

                            <span>About Us</span>

                            <ul class="submenu-dropdown">

                                <li>
                                    <a href="About-us.html">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="vision-mission.html">
                                        Vision & Mission
                                    </a>
                                </li>

                            </ul>

                        </li>


                        <li class="submenu">

                            <span>Services</span>

                            <ul class="submenu-dropdown">

                                <li>
                                    <a href="On-grid-solar-system.html">
                                        ON Grid Solar System
                                    </a>
                                </li>

                                <li>
                                    <a href="Off-grid-solar-system.html">
                                        Off-Grid Solar System
                                    </a>
                                </li>

                                <li>
                                    <a href="Solar-submersible-pump.html">
                                        Solar Submersible Pump
                                    </a>
                                </li>

                                <li>
                                    <a href="Solar-water-heater.html">
                                        Solar Water Heater
                                    </a>
                                </li>

                            </ul>

                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="projects.html">
                                Projects
                            </a>
                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="Gallery.html">
                                Gallery
                            </a>
                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="Contact-us.html">
                                Contact Us
                            </a>
                        </li>

                    </ul>


                    <a href="Contact-us.html"
                       class="primary-btn d-lg-none">

                        Get a Quote

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </nav>

            </div>

        </header>


        <div class="mobile-menu-overlay d-lg-none"></div>


        <!-- DESKTOP HEADER -->
        <header id="main-header"
                class="header w-100">

            <div class="container g-0 g-lg-1">

                <nav id="navbar-menu"
                     class="d-flex position-relative justify-content-between align-items-center">


                    <a href="index.html">

                        <img src="assets/images/logo/Arambhlogo.png"
                             alt="Aarambh Energies">

                    </a>


                    <ul class="mb-0 menu d-none d-lg-flex mini-scrollbar">


                        <li>
                            <a class="d-flex align-items-center"
                               href="index.html">

                                <span>Home</span>

                            </a>
                        </li>


                        <li class="submenu">

                            <span>About Us</span>

                            <ul class="submenu-dropdown">

                                <li>
                                    <a href="About-us.html">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="vision-mission.html">
                                        Vision & Mission
                                    </a>
                                </li>

                            </ul>

                        </li>


                        <li class="submenu">

                            <span>Services</span>

                            <ul class="submenu-dropdown">

                                <li>
                                    <a href="On-grid-solar-system.html">
                                        ON Grid Solar System
                                    </a>
                                </li>

                                <li>
                                    <a href="Off-grid-solar-system.html">
                                        Off-Grid Solar System
                                    </a>
                                </li>

                                <li>
                                    <a href="Solar-submersible-pump.html">
                                        Solar Submersible Pump
                                    </a>
                                </li>

                                <li>
                                    <a href="Solar-water-heater.html">
                                        Solar Water Heater
                                    </a>
                                </li>

                            </ul>

                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="projects.html">

                                <span>Projects</span>

                            </a>
                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="Gallery.html">

                                <span>Gallery</span>

                            </a>
                        </li>


                        <li>
                            <a class="d-flex align-items-center"
                               href="Contact-us.html">

                                <span>Contact Us</span>

                            </a>
                        </li>

                    </ul>


                    <div class="d-flex align-items-center gap-1 gap-sm-2 gap-md-3">

                        <a href="Contact-us.html"
                           class="primary-btn d-none d-lg-block">

                            Get a Quote

                            <i class="fa-solid fa-arrow-right"></i>

                        </a>


                        <button class="toggle-menu"
                                type="button">

                            <i class="fa-solid fa-bars"></i>

                        </button>

                    </div>

                </nav>

            </div>

        </header>

    `;


    /* =========================
       FOOTER
    ========================= */

    document.getElementById("footer").innerHTML = `

        <footer class="footer position-relative pt-120">

            <div class="position-relative overflow-x-hidden">

                <div class="container footer-up">

                    <div class="row g-3 g-lg-4">


                        <!-- ABOUT -->
                        <div class="col-md-6 col-xl-3">

                            <div class="footer-card">

                                <a href="index.html">

                                    <img src="assets/images/logo/footer-Arambhlogo.png"
                                         class="img-fluid mb-4"
                                         alt="Aarambh Energies">

                                </a>


                                <p class="mb-4 pb-lg-3 text-white">

                                    Aarambh Energies is a trusted renewable energy
                                    solutions provider committed to delivering
                                    high-quality solar systems for residential,
                                    commercial, and industrial needs.

                                </p>


                                <ul class="social-link">

                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>


                        <!-- QUICK LINKS -->
                        <div class="col-md-6 col-xl-3">

                            <div class="footer-card">

                                <h4 class="text-white pb-3">
                                    Quick Link
                                </h4>


                                <ul class="contact list-unstyled quick-link">

                                    <li>
                                        <a href="index.html">
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a href="About-us.html">
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="vision-mission.html">
                                            Vision & Mission
                                        </a>
                                    </li>

                                    <li>
                                        <a href="projects.html">
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Gallery.html">
                                            Gallery
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Contact-us.html">
                                            Contact Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Terms-and-conditions.html">
                                            Terms & Conditions
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Privacy-policy.html">
                                            Privacy Policy
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>


                        <!-- SERVICES -->
                        <div class="col-md-6 col-xl-3">

                            <div class="footer-card">

                                <h4 class="text-white pb-3">
                                    Services
                                </h4>


                                <ul class="contact list-unstyled quick-link">

                                    <li>
                                        <a href="On-grid-solar-system.html">
                                            ON Grid Solar System
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Off-grid-solar-system.html">
                                            Off-Grid Solar System
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Solar-submersible-pump.html">
                                            Solar Submersible Pump
                                        </a>
                                    </li>

                                    <li>
                                        <a href="Solar-water-heater.html">
                                            Solar Water Heater
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>


                        <!-- CONTACT -->
                        <div class="col-md-6 col-xl-3">

                            <div class="footer-card">

                                <h4 class="text-white pb-3">
                                    Contact Us
                                </h4>


                                <ul class="contact">


                                    <li class="contact-item">

                                        <div class="contact-icon">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>

                                        <div class="d-flex flex-column gap-1">

                                            <p class="text-white">
                                                4/104 Adarsh Market,
                                                Vinay Khand 4,
                                                Gomti Nagar, Lucknow
                                            </p>

                                        </div>

                                    </li>


                                    <li class="contact-item">

                                        <div class="contact-icon">
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </div>

                                        <div class="d-flex flex-column gap-1">

                                            <a href="tel:+918181939372"
                                               class="text-white">
                                                +91-8181939372
                                            </a>

                                            <a href="tel:+918934975282"
                                               class="text-white">
                                                +91-8934975282
                                            </a>

                                        </div>

                                    </li>


                                    <li class="contact-item">

                                        <div class="contact-icon">
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>

                                        <div class="d-flex flex-column gap-1">

                                            <a href="mailto:aarambhenergies@gmail.com"
                                               class="text-white">
                                                aarambhenergies@gmail.com
                                            </a>

                                        </div>

                                    </li>


                                </ul>

                            </div>

                        </div>

                    </div>


                    <br>

                    <hr>


                    <!-- VENDOR -->
                    <div class="row justify-content-center mt-3">

                        <div class="col-md-5 text-center">

                            <img src="assets/images/Vendor.jpeg"
                                 width="100%"
                                 alt="Vendor">

                        </div>


                        <h6 class="mt-4 text-white text-center">

                            <span style="color:#54a646;font-family:'Inter';">
                                Empanelled with UPNEDA,
                                Vendor Code:
                            </span>

                            LKO2512084159

                        </h6>


                        <h6 class="mt-1 text-white text-center">

                            <span style="color:#54a646;font-family:'Inter';">
                                GSTIN:
                            </span>

                            09ACOFA5801F1ZF

                        </h6>

                    </div>

                </div>


                <!-- COPYRIGHT -->
                <div class="container copyright">

                    <div class="row">

                        <div class="col-lg-7 col-12">

                            <div class="footer-card reserved">

                                <p class="text-white">

                                    Copyright © 2025

                                    <a href="#">
                                        Aarambh Energies Solar and Powerdivision
                                    </a>

                                    All rights reserved.

                                </p>

                            </div>

                        </div>


                        <div class="col-lg-5 col-12">

                            <p class="copy-right">

                                Design and Developed by

                                <a href="https://www.linkedin.com/in/sakib-khan-8b5312272/"
                                   target="_blank">

                                    CODERSARTH TECHNOLOGIES

                                </a>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </footer>

    `;


    /* =========================
       MOBILE MENU
    ========================= */

    const toggleMenu =
        document.querySelector(".toggle-menu");

    const closeMenu =
        document.querySelector(".close-menu");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const overlay =
        document.querySelector(".mobile-menu-overlay");


    if (toggleMenu) {

        toggleMenu.addEventListener("click", function () {

            mobileMenu.classList.add("active");
            overlay.classList.add("active");

        });

    }


    if (closeMenu) {

        closeMenu.addEventListener("click", function () {

            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");

        });

    }


    if (overlay) {

        overlay.addEventListener("click", function () {

            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");

        });

    }


    /* =========================
       MOBILE SUBMENU
    ========================= */

    document
        .querySelectorAll(".mobile-menu .submenu > span")
        .forEach(function (item) {

            item.addEventListener("click", function () {

                item.parentElement.classList.toggle("active");

            });

        });


    /* =========================
       ACTIVE PAGE
    ========================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase() || "index.html";


    document
        .querySelectorAll("#navbar-menu a, #navbar-menu-mobile a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) return;

            const page =
                href.split("/")
                    .pop()
                    .toLowerCase();

            if (page === currentPage) {

                link.classList.add("active");

            }

        });


    /* =========================
       FLOATING BUTTONS
    ========================= */

    document.body.insertAdjacentHTML(
        "beforeend",
        `

        <a href="https://wa.me/+917880550881"
           class="whatsapp"
           target="_blank">

            <i class="fa-brands fa-whatsapp"></i>

        </a>


        <button class="back-to-top"
                type="button">

            <i class="fa-solid fa-arrow-up"></i>

        </button>


        <a href="Contact-us.html"
           class="contact-us-button">

            Contact Us

        </a>

        `
    );


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.querySelector(".back-to-top");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


});
