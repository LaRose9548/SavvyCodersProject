let name = prompt ("Hello!  My name is Keri.  What is yours?");
let output = document.querySelector ('#greeting');
output.innerHTML =
  "<p align='center'>Thank you for visiting my <br><span class='highlight'>Tech Workforce Program</span><br> website, <br><span class='highlight'>"
  + name + "</span>.</p>";
