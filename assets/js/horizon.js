let mm = gsap.matchMedia();
let mm2 = gsap.matchMedia();

// 1200px 초과시 실행하는 gsap
mm.add("(min-width: 1201px)", () => {
    const react = document.querySelector(".react__section");
    const vue = document.querySelector(".vue__section");
    const php = document.querySelector(".php__section");
    
    gsap.to(".react__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".react__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + react.offsetWidth,
            // markers: true,
        },
    });
    gsap.to(".vue__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".vue__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + vue.offsetWidth,
            // markers: true,
        },
    });
    gsap.to(".php__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".php__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + php.offsetWidth,
            // markers: true,
        },
    });
});

// 1200px 이하에서 실행하는 gsap
mm2.add("(max-width: 1200px)", () => {
    // react
    const reactFiguresE = gsap.utils.toArray("#react .figure.right");
    const reactFiguresO = gsap.utils.toArray("#react .figure.left");
    gsap.set("#react .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#react .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: "#react",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#react .figure__inner",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#react .figure__inner",
            scrub: 1,
        },
    });

    // vue
    const vueFiguresE = gsap.utils.toArray("#vue .figure.right");
    const vueFiguresO = gsap.utils.toArray("#vue .figure.left");
    gsap.set("#vue .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#vue .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: "#vue",
            scrub: 1,
        },
    });
    gsap.to(vueFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue .figure__inner",
            scrub: 1,
        },
    });
    gsap.to(vueFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue .figure__inner",
            scrub: 1,
        },
    });

    // php
    const phpFiguresE = gsap.utils.toArray("#php .figure.right");
    const phpFiguresO = gsap.utils.toArray("#php .figure.left");
    gsap.set("#php .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#php .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: "#php",
            scrub: 1,
        },
    });
    gsap.to(phpFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php .figure__inner",
            scrub: 1,
        },
    });
    gsap.to(phpFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php .figure__inner",
            scrub: 1,
        },
    });
});