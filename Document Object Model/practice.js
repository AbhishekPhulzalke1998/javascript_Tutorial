
// 1]create the button and add text = Click me in that button add 
//backgroundcolor and text color add it inside body tag

let btn = document.createElement("button");

btn.innerText = "Click Me";
btn.style.backgroundColor =  "green";
btn.style.color = "red";

document.querySelector("body").prepend(btn);

//2] create a <p> tag in html give it a class & some styling
// Now create a new class in CSS and try to append this class
// to the <p> element.

let para = document.querySelector("p");
para.getAttribute("class");
