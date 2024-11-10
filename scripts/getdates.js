// select DOM elements for output
// const year = document.querySelector("#currentyear");

// date object
// const today = new Date();

// year.innerhtml = 'getFullYear(): <span class="highlight">${today.getcurrentyear()}</span';

const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

alert(document.lastModified);
//returns: day, month day, year time

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;
