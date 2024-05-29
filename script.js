
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


let typewriterText = "About me";


let typewriterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#about-me",
        start: "top 90%",
        end: "top 20%",
        // markers: true,       
        toggleActions: "play none none reverse"
    },

});

typewriterTimeline.to('#uniqueTypewriter', {
    text: typewriterText,
    duration: 1,
    ease: "none"
});

// 

let projectTypewriterText = "Projects";


let projectsTypewriterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#projects",
        start: "top 90%",
        end: "top 20%",
        // markers: true,          
        toggleActions: "play none none reverse"
    },

});


projectsTypewriterTimeline.to('#projectsTypewriter', {
    text: projectTypewriterText,
    duration: 1,
    ease: "none"
});




const elements = document.querySelectorAll('.leadership-experience');

elements.forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",

        }
    });
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

