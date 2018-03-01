// Checking to see how far down the current page is from home.
let depth = '';
let nodeList = document.getElementsByName("home");
if (nodeList.length === 1) { depth = '../'; }
else {
  nodeList = document.getElementsByName("exer");
  if (nodeList.length === 1) { depth = '../../'; }
  else {
    nodeList = document.getElementsByName("level1");
    if (nodeList.length === 1) { depth = '../'; }
    else {
      console.log ("Error in location information.");
    }
  }
}

// JavaScript for the NavBar at given depth.
let outputNavBar = document.querySelector("#navBar");
outputNavBar.innerHTML =
'<h3>\
  <a href="' + depth + '" class="linkBox">Home</a>\
  <a href="' + depth + 'projects/" class="linkBox">Projects</a>\
  <a href="' + depth + 'media/" class="linkBox">Media / Exercises</a>\
  <a href="' + depth + 'blog/" class="linkBox">Blog</a>\
  <a href="' + depth + 'contact/" class="linkBox">Contact Me</a>\
</h3>';

// JavaScript for the LinksFooter at given depth.
let outputLinksFooter = document.querySelector("#linksFooter");
outputLinksFooter.innerHTML =
'<h3>\
  <a href="https://www.linkedin.com/in/keri-hedman-927630150/" class="linkBox">\
      <img src="' + depth + 'images/linkedin-square-tm.png" style="width:70px;\
      height:35px;border:0;"></a>\
  <a href="https://github.com/LaRose9548" class="linkBox">\
      <img src="' + depth + 'images/github-square-logo.jpg" style="width:30px;\
      height:30px;border:0;"></a>\
</h3>';
