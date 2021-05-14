let div = document.getElementsByTagName("div")[2];

let divlast =div.firstElementChild;

console.log(divlast);


let divlast_1 =div.lastElementChild;

console.log(divlast_1);

let divlast_2 =divlast.nextElementSibling;

let i = divlast_2.lastElementChild;

console.log(i);

let b = divlast_1.lastElementChild;

console.log(b);


let parent1 = i.parentElement;

console.log(parent1);



let parent2 = b.parentElement;

console.log(parent1)