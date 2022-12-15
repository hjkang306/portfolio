let mm = gsap.matchMedia();
let mm2 = gsap.matchMedia();
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
mm2.add("(max-width: 1200px)", () => {
    // react
    const reactFiguresE = gsap.utils.toArray("#react .figure:nth-child(even)");
    const reactFiguresO = gsap.utils.toArray("#react .figure:nth-child(odd)");
    gsap.set("#react .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#react .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: ".react__section__inner",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".react__figure__inner",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".react__figure__inner",
            scrub: 1,
        },
    });

    // vue
    const vueFiguresE = gsap.utils.toArray("#vue .figure:nth-child(even)");
    const vueFiguresO = gsap.utils.toArray("#vue .figure:nth-child(odd)");
    gsap.set("#vue .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#vue .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: ".vue__section__inner",
            scrub: 1,
        },
    });
    gsap.to(vueFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".vue__figure__inner",
            scrub: 1,
        },
    });
    gsap.to(vueFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".vue__figure__inner",
            scrub: 1,
        },
    });

    // php
    const phpFiguresE = gsap.utils.toArray("#php .figure:nth-child(even)");
    const phpFiguresO = gsap.utils.toArray("#php .figure:nth-child(odd)");
    gsap.set("#php .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#php .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: ".php__section__inner",
            scrub: 1,
        },
    });
    gsap.to(phpFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".php__figure__inner",
            scrub: 1,
        },
    });
    gsap.to(phpFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".php__figure__inner",
            scrub: 1,
        },
    });
});