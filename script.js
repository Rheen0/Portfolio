
const words = ['Frontend Web Developer', 'UI/UX Designer'];


let mainTimeline = gsap.timeline({
    repeat: -1
})

words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 15
    })

    textTimeline.to('#typewriter', {
        text: word,
        duration: 1
    })

    mainTimeline.add(textTimeline)
})

// Responsive ScrollTrigger Animations
ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 1024px)": function () {
        document.querySelectorAll('.leadership-experience').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 20%",
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }
            });
        });
    },
    // Tablet
    "(min-width: 768px) and (max-width: 1023px)": function () {
        document.querySelectorAll('.leadership-experience').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 15%",
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }
            });
        });
    },
    // Mobile
    "(max-width: 767px)": function () {
        document.querySelectorAll('.leadership-experience').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    end: "bottom 20%",
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                }
            });
        });
    }
});


// End



// Smooth Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

