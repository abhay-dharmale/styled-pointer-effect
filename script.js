let cursorMain = document.querySelector("#cursor");
let main = document.querySelector("#main");
let logoImg = document.querySelector(".logo");

let heads = document.querySelectorAll("#heading");

main.addEventListener('mousemove', (dets) =>{
    cursorMain.style.left = dets.x + "px";
    cursorMain.style.top = dets.y + "px";
})

logoImg.addEventListener('mousemove', () =>{
    cursorMain.style.height = "40px";
    cursorMain.style.width = "40px";
})

logoImg.addEventListener('mouseleave', () =>{
    cursorMain.style.height = "20px";
    cursorMain.style.width = "20px";
});







heads.forEach(head => {
    head.addEventListener('mousemove', function() {
        cursorMain.style.height = "100px";
        cursorMain.style.width = "100px";
    });

    head.addEventListener('mouseleave', function() {
        cursorMain.style.height = "20px";
        cursorMain.style.width = "20px";
    });
});



    // const cursor = document.getElementById('cursor');
    // const menuIcon = document.getElementById('menu-icon');

    // function calculateDistance(x1, y1, x2, y2) {
    //     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    // }

    // function moveIcon(event) {
    //     const mouseX = event.clientX;
    //     const mouseY = event.clientY;

    //     const iconX = menuIcon.getBoundingClientRect().left + menuIcon.clientWidth / 2;
    //     const iconY = menuIcon.getBoundingClientRect().top + menuIcon.clientHeight / 2;

    //     const distance = calculateDistance(mouseX, mouseY, iconX, iconY);
    //     const magnetStrength = 5;

    //     if (distance < 100) {
    //         const translateX = (mouseX - iconX) / magnetStrength;
    //         const translateY = (mouseY - iconY) / magnetStrength;

    //         menuIcon.style.transform = `translate(${translateX}px, ${translateY}px)`;
    //     } else {
    //         menuIcon.style.transform = 'translate(0, 0)';
    //     }
    // }

    // document.addEventListener('mousemove', moveIcon);
