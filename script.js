let cursorMain = document.querySelector("#cursor");
let main = document.querySelector("#main");
let heads = document.querySelectorAll("#heading");
let overlayItems = document.querySelectorAll(".overlay");
let images = document.querySelectorAll(".heading img");

let xOffsetValues = []; // Array to store X-offset values for each image
let yOffsetValues = []; // Array to store Y-offset values for each image

xOffsetValues.push(-250); // For the first image
yOffsetValues.push(-440); // For the first image
xOffsetValues.push(-655); // For the second image
yOffsetValues.push(-445); // For the second image
xOffsetValues.push(-1075); // For the third image
yOffsetValues.push(-445); // For the third image

main.addEventListener('mousemove', (dets) =>{
    cursorMain.style.left = dets.x + "px";
    cursorMain.style.top = dets.y + "px";
})

overlayItems.forEach((overlayItem, index) => {
    overlayItem.addEventListener('mousemove', (event) => {
        images[index].style.scale = 1;
        cursorMain.style.opacity = 0;
        images[index].style.left = (event.clientX + xOffsetValues[index]) + "px";
        images[index].style.top = (event.clientY + yOffsetValues[index]) + "px";
    });
    
    overlayItem.addEventListener('mouseleave', (event) => {
        images[index].style.scale = 0;
        cursorMain.style.opacity = 1;


    });
});