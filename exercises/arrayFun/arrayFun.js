// exercises/arrayFun/index.html

let contactArray = [];
let gitHubAddress = "";
let dailyInspo = "";

contactArray[0] = ["firstName", "Keri"];
contactArray[1] = ["lastName", "Hedman"];
contactArray[2] = ["phoneNum", "(423) 406-2952"];

console.log(contactArray[0]); // First item in contactArray
let lastOne = contactArray.length - 1;
console.log(contactArray[lastOne]); // Last item in contactArray

contactArray.push (["linkedIn", "https://www.linkedin.com/in/keri-hedman-927630150"]);
contactArray.push (["gitHub", "https://github.com/LaRose9548"]);
contactArray.unshift (["inspireMe", "One small step for woman, one large step for mankind!"]);

gitHubAddress = contactArray.pop ();
dailyInspo = contactArray.shift();

console.log("Final results");
console.log(contactArray); // Final Array
console.log(gitHubAddress); // gitHub address from pop
console.log(dailyInspo); //
