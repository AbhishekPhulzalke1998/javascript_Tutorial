// console.dir(document.body.childNodes[1]);
// console.log(document.body);
// document.body.childNodes[3].innerText = "abcd";



/************getElementById***************/
// let btns = document.getElementById("btn");
//  console.dir(btns);




/*********getElementsByClassName***************/
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);




/*********getElementsByTagName***************/
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);





/*********document.querySelector***************/
// let ele1 = document.querySelector("p"); // when we want first element
// console.dir(ele1);

// let ele2 = document.querySelectorAll(".heading"); // all elements
// console.dir(ele2);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apana College Students";

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let idx = 1;
// for (div of divs)
// {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// let div = document.querySelector("div");
// console.log(div);




/**************Attributes*****************/
// let id = div.getAttribute("id");
// console.log(id);

// let ids = div.getAttribute("name");
// console.log(ids);

// let ab = document.querySelector("p");
// console.log(ab.getAttribute("class"));


// let bc = document.querySelector("p");
// console.log(bc.setAttribute("class","newClass"));




/**********************style************************/
// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";
// div.innerText = "Hello!";

/*****************insert elements**************/

let newBtn = document.createElement("button"); // first we create elenebt
newBtn.innerText = "click me"; // adding innertext 
console.log(newBtn);  // print in console

let p = document.querySelector("p"); //access the tag
p.after(newBtn); // after p tag i want to add button  

let new_heading = document.createElement("h1");
new_heading.innerText = "This is new heading";
console.log(new_heading); 

let q = document.querySelector("p");
q.after(new_heading);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i> Hi I am new Heading</i>"
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();





