let cursorMain = document.querySelector("#cursor");
let main = document.querySelector("#main");
let heads = document.querySelectorAll("#heading");
let overlayItems = document.querySelectorAll(".overlay");
let images = document.querySelectorAll(".heading img");

let timeout;

let xOffsetValues = []; // Array to store X-offset values for each image
let yOffsetValues = []; // Array to store Y-offset values for each image

xOffsetValues.push(-250); // For the first image
yOffsetValues.push(-440); // For the first image
xOffsetValues.push(-655); // For the second image
yOffsetValues.push(-445); // For the second image
xOffsetValues.push(-1075); // For the third image
yOffsetValues.push(-445); // For the third image

// main.addEventListener('mousemove', (dets) =>{
//     cursorMain.style.left = dets.x + "px";
//     cursorMain.style.top = dets.y + "px";
// })


function circleMouseFollower(xscale, yscale) {
    main.addEventListener("mousemove", function (dets) {
        document.querySelector(
            "#cursor"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}


function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    main.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector(
                "#cursor"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}





overlayItems.forEach((overlayItem, index) => {
    overlayItem.addEventListener('mousemove', (dets) => {
        images[index].style.scale = 1;
        cursorMain.style.opacity = 0;
        images[index].style.left = (dets.clientX + xOffsetValues[index]) + "px";
        images[index].style.top = (dets.clientY + yOffsetValues[index]) + "px";
    });

    overlayItem.addEventListener('mouseleave', (event) => {
        images[index].style.scale = 0;
        cursorMain.style.opacity = 1;


    });
});



function firstSectionAnime() {
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeIn
    })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: 0.2
        })
}


firstSectionAnime();

circleChaptaKaro();
circleMouseFollower();