gsap.from("h1",{
    opacity:0,
    duration:1,
    y:20,
    delay:0.23,
    
})


 gsap.from('.box', {
       opacity:0,
        duration: 1,
        y:10,
        yoyo:'true',
        delay:5
        });
  

    gsap.to('.ballbox', {
        x: 600,
        duration: 2,
        delay:4.5,
        rotate: 360,
        backgroundColor:"pink",
        borderRadius: "50%",
        
      
        });
 let time =   gsap.timeline();
 time.from(".navitem",{
     y:-20,
    opacity:0,
    duration:1,
    delay:5,
    stagger:0.3
 })

 function loaderAnimation() {
    let loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()