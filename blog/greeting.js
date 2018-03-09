let name = prompt ("Hello!  My name is Keri.  What is yours?");
let output = document.querySelector ('#greeting');

if (name !== null && name !== "") {
  output.innerHTML =
    "<p align='center'>Thank you for visiting\
    my Tech Workforce Program Blog Page,\
    <br><span class='highlight'>"
    + name + "</span>.</p>";
} else {
  output.innerHTML =
    "<p align='center'>Thank you for visiting\
    my Tech Workforce Program Blog Page!</p>";
}
