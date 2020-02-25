//create div
let myDiv = document.createElement('div');

//set attributes of the div
myDiv.setAttribute('id', 'newDiv');

//create text node
let divContent = document.createTextNode('We are creating a new div');

myDiv.appendChild(divContent);

//add the div to html body tag
document.body.appendChild(myDiv);

//paragraph
let myPar = document.createElement('p');
myPar.setAttribute('id', 'newPar');
myPar.innerHTML = '<strong>This is my paragraph</strong>';
//document.body.appendChild(myPar);
myDiv.appendChild(myPar);

//button
let myBtn = document.createElement('button');
myBtn.setAttribute('class','btn');
myBtn.innerHTML = 'Click Me';
//myDiv.appendChild(myBtn);
myDiv.insertBefore(myBtn,myPar);

let p = document.CreateElement('p');
myDiv.appendChild(p);
myBtn.addEventListener('click', function() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	myBtn.style.color = `rgb(${r},${g},${b})`;
	p.innerHTML = `r: ${r} g: ${g} b: ${b}`;
})