// Checking to see how many layers of
// folders the current page is from home.
let depth = '';
let nodeList = document.getElementsByName("home");
if (nodeList.length === 1) { depth = './'; }
else {
  nodeList = document.getElementsByName("level1");
  if (nodeList.length === 1) { depth = '../'; }
  else {
    console.log ("Error in location information.");
  }
}

// Start of w3schools JS code for drop down button
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// End of w3schools JS code for drop down button

// JavaScript for the NavBar at given depth.
// Dropdown menu for Projects (including link to Projects page)
let outputNavBar = document.querySelector("#navBar");
outputNavBar.innerHTML =
'<h3>\
  <a href="' + depth + '" class="linkBox">Home</a>\
  <div class="dropdown">\
    <a onclick="myFunction()" class="dropbtn">\
      Projects</a>\
    <div id="myDropdown" class="dropdown-content">\
      <a href="' + depth + 'projects/">Projects Home Page</a>\
      <a href="https://twp2studentshowcase.netlify.com/">\
        Class Showcase</a>\
      <a href="' + depth + 'cyoa/">\
        Choose Your Own Adventure (CYOA)</a>\
      <a href="http://bookstore-team.netlify.com">\
        Web Store<br>Hack-A-Thon</a>\
      <a href="' + depth + 'rps/">Rock Paper<br>Scissors Game</a>\
      <a href="' + depth + 'loopCrazy/">Loop Crazy Exercise</a>\
    </div>\
  </div>\
  <a href="' + depth + 'media/" class="linkBox">Media</a>\
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
