
// Typewriter Animation
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

// Education Background Animation
const educationalbg = document.querySelectorAll('.education-box');

educationalbg.forEach(box => {
    let descriptionLeft = box.querySelector('.description-left');
    let descriptionRight = box.querySelector('.description-right');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: 'top',
            scrub: true,

        }
    })

    tl.fromTo(descriptionLeft, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "Power2.easeOut", duration: 1 });
    tl.fromTo(descriptionRight, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "Power2.easeOut", duration: 1 }, '<');


})


// Start of reveal animation
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true,
    })
})

const images = gsap.utils.toArray('img');
images.forEach((img, i) => {
    ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true,
    })
})



// End of reveal animation




// // Projects Animation
// const projects = document.querySelectorAll('.project');

// projects.forEach(project => {
//     let projectDescription = project.querySelector('.description');
//     let projectMedia = project.querySelector('.media');

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: project,
//             start: 'top bottom',
//             end: 'bottom 90%',
//             scrub: true,

//         }
//     })

//     tl.fromTo(projectDescription, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "Power2.easeOut" });
//     tl.fromTo(projectMedia, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "Power2.easeOut" }, '<');
//     tl.to(projectMedia, { y: -75 }, '<');

// })

// Line Animation

const lineAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: "#education",
        start: "top center",

        scrub: 1,


    },
});

// Add the animation to draw the line
lineAnimation.to(".line", { height: "100%", duration: 1 });



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

