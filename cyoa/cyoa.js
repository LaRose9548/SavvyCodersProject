const nullCheck = (name) => {
  if (name === null || name === '') {
    return "cancelled";
  }
}


let name = prompt ("Welcome adventurer! Do you like fantasy or realism?");
let nameLC = name;
let output = document.querySelector ('#question_1');
output.innerHTML =
  "<p align='center'>So you chose <br><span class='highlight'>" + name + "</span>.</p>";

for (let loopCount = 0; loopCount < 2; loopCount++)
{
  if (nullCheck(name) === 'cancelled'){
    nameLC = 'cancelled';
  } else {
    nameLC = name.toLowerCase();
  }

  switch (nameLC)
  {
    case 'fantasy':
      name = prompt ("Do you like fairies or vampires?");
      output = document.querySelector ('#question_2');
      output.innerHTML =
        "<p align='center'>So you like <br><span class='highlight'>"
        + name + "</span>.</p>";
        break;
    case 'realism':
      name = prompt ("Do you like tomb raiding or mountain climbing?");
      output = document.querySelector ('#question_2');
      output.innerHTML =
        "<p align='center'>Nice choice in <br><span class='highlight'>"
        + name + "</span>.</p>";
    break;
    case 'fairies':
      output = document.querySelector ('#result');
      output.innerHTML =
        "<p align='center'>I also like <br><span class='highlight'>"
        + name + "</span>.<br>Love your wings!</p>";
    break;
    case 'vampires':
      output = document.querySelector ('#result');
      output.innerHTML =
        "<p align='center'>I love <br><span class='highlight'>\
        Vampires</span>,<br>but I am running away!<br>Good luck \
        finding a good neck to byte!</p>";
    break;
    case 'tomb raiding':
    case 'raiding':
      output = document.querySelector ('#result');
      output.innerHTML =
        "<p align='center'>Welcome to Egypt, the<br><span \
        class='highlight'>Tomb of Tutankhamun!</span>.<br>We \
        have your equipment, support personnel, and camels \
        ready and waiting.<br>Good luck on your finds!</p>";
    break;
    case 'mountain climbing':
    case 'climbing':
      output = document.querySelector ('#result');
      output.innerHTML =
        "<p align='center'>Welcome to<br><span class='highlight'>\
        Mount Everest!</span>.<br>We have your equipment and \
        support personnel ready and waiting for you.<br>Enjoy \
        your trip!</p>";
    break;
    case 'cancelled':
    default:
      alert ("Invalid answer.  Please try again by refreshing the page.");
      loopCount = 3;
  }
}
