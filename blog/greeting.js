let name = prompt ("Hello!  My name is Keri.  What is yours?");
let output = document.querySelector ('#greeting');
output.innerHTML =
  "<p align='center'>Thank you for visiting\
  my Tech Workforce Program Blog Page,\
  <br><span class='highlight'>"
  + name + "</span>.</p><p>This will be a \
  record of my journey.</p>";
