gsap.to("#nav",{
    height:"70px",
    duration:0.5,
    Delay:0.3,

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -5%",
        end: "top -6%",
        scrub:1
    }
})

gsap.to("#skill",{
    backgroundColor:"#dbc8b9",
    scrollTrigger:{
        trigger:"#project",
        scroller:"body",
        //markers: true,
        start: "top -50%",
        end:"top -100%",
        scrub:1
    }
})