/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("open");

        if (
            navLinks.classList.contains("open")
        ) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    }
);



/* CLOSE MOBILE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("open");

                menuButton.textContent = "☰";

            }
        );

    });



/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeToggle.textContent = "☀";

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeToggle.textContent = "☾";

        }

    }
);



/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 140;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navigationLinks.forEach(
            link => {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (
            entries,
            observer
        ) {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================
   COUNTER
========================================= */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        function (
            entries,
            observer
        ) {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;


                    const increment =
                        Math.max(
                            1,
                            Math.ceil(target / 70)
                        );


                    const timer =
                        setInterval(
                            function () {

                                current += increment;


                                if (
                                    current >= target
                                ) {

                                    counter.textContent =
                                        target + "+";

                                    clearInterval(
                                        timer
                                    );

                                } else {

                                    counter.textContent =
                                        current + "+";

                                }

                            },

                            25
                        );


                    observer.unobserve(
                        counter
                    );

                }
            );

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(
    counter => {

        counterObserver.observe(
            counter
        );

    }
);



/* =========================================
   SKILL FILTERS
========================================= */

const skillTabs =
    document.querySelectorAll(
        ".skill-tab"
    );


const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            function () {

                skillTabs.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const category =
                    this.dataset.category;


                skillCards.forEach(
                    card => {

                        if (
                            category === "all" ||
                            card.dataset.category ===
                            category
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);



/* =========================================
   PROJECT FILTERS
========================================= */

const projectFilters =
    document.querySelectorAll(
        ".project-filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectFilters.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                projectFilters.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const filter =
                    this.dataset.filter;


                projectCards.forEach(
                    card => {

                        if (
                            filter === "all" ||
                            card.dataset.project === filter
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);



/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);