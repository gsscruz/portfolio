function nameSlider() {
  firstName.classList.add("reveal");
  lastName.classList.add("moveRight");
}

function fadeInIcons() {
  iconsLeft.classList.add("moveInLeft");
  iconsRight.classList.add("moveInRight");
}
function elevateLin(){
  linTranslate.classList.add("rotate");
}

function elevateGit(){
  gitTranslate.classList.add("rotate");
}
function elevateNot(){
  linTranslate.classList.remove("rotate");
  gitTranslate.classList.remove("rotate");
}

function bringTextDown(){
  linText.classList.add("bringTextDown");
}

function bringTextUp(){
  linText.classList.remove("bringTextDown");
}
function bringTextDownGit(){
  githubText.classList.add("bringTextDown");
}

function bringTextUpGit(){
  githubText.classList.remove("bringTextDown");
}
// Call to action button
const arrowButton = document.querySelector(".arrowCall");

// Name at the header bar
const lastName = document.querySelector("#lastN");
const firstName = document.querySelector("#firstN");

//icon set at the left side
const iconsLeft = document.querySelector(".iconWrapper-left");

//icon set at the right side
const iconsRight = document.querySelector(".iconWrapper-right");

//contact icons
const linkedIn = document.querySelector(".linkedinIcon");
const github = document.querySelector(".githubIcon");

//imgs to be affected by the hover effects hover
const linTranslate = document.getElementById("linked");
const gitTranslate = document.getElementById("gitImg");

//containers to be targeted to trigger imgs
const linContainer = document.querySelector(".linkedinContainer");
const gitContainer = document.querySelector(".githubContainer");

//target Linkedin Text
const linText = document.querySelector(".linkedinText");
const githubText = document.querySelector(".githubText");

//Slide name - reveal first name
lastName.addEventListener("mouseover", nameSlider);

//Fade in icons
arrowButton.addEventListener("click", fadeInIcons);

//rotate and elevate hovers
linContainer.addEventListener("mouseover", elevateLin);
linContainer.addEventListener("mouseout", elevateNot);
gitContainer.addEventListener("mouseover", elevateGit);
gitContainer.addEventListener("mouseout", elevateNot);


//bring text down
linContainer.addEventListener("mouseover",bringTextDown);
linContainer.addEventListener("mouseout",bringTextUp);

gitContainer.addEventListener("mouseover",bringTextDownGit);
gitContainer.addEventListener("mouseout",bringTextUpGit);

