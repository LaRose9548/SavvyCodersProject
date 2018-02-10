var n = 1;
var output = document.querySelector("#exercise1");
var resultStr = "<p>Exercise 1: While Loop from 1 - 10</p><ul>";

while (n <= 10) {
    console.log(n);
    resultStr += "<li>" + n + "</li>";
    n++;
}

resultStr += "</ul>";
output.innerHTML = resultStr;
resultStr ='';
// End of Exercise 1

n = 2;
output = document.querySelector("#exercise2");
resultStr = "<p>Exercise 2: While Loop Even #'s from 2 - 20</p><ul>";

while (n <= 20) {
    console.log(n);
    resultStr += "<li>" + n + "</li>";
    n += 2;
}

resultStr += "</ul>";
output.innerHTML = resultStr;
resultStr ='';
// End of Exercise 2

n = 100;
var i = 1;
var sum = 0;
output = document.querySelector("#exercise3");
resultStr = "<p>Exercise 3: While Loop with a Running Total</p><ul>";

while (i < n) {
    sum += i;
    console.log(sum);
    resultStr += "<li>" + sum + "</li>";
    i++;
}

resultStr += "</ul>";
output.innerHTML = resultStr;
resultStr ='';
// End of Exercise 3

// Exercise 4 was to change loop code to show on HTML and not just the console.
output = document.querySelector("#exercise4");
resultStr = "<p>Exercise 4: Change code by adding code to present in HTML.</p><ul>";
output.innerHTML = resultStr;
// End of Exercise 4

n = 15;
output = document.querySelector("#exercise5");

resultStr = "<p>Exercise 5: Printing even or odd for #'s 15 to 1</p><ul>";

while (n > 0) {
  console.log("Mark 1");
    console.log(n);
    if ( n % 2 === 0) {
        resultStr += "<li>" + n + " is even</li>";
    } else {
        resultStr += "<li>" + n + " is odd</li>";
    }
    n--;
}

resultStr += "</ul>";
console.log(resultStr);
output.innerHTML = resultStr;
// resultStr ='';
// End of Exercise 5

n = 1;
output = document.querySelector("#exercise6");
resultStr = "<p>Exercise 6: FizzBuzz (1 to 100)</p><ul>";

while (n <= 100) {
    if(n % 3 === 0 && n % 5 == 0){
        console.log("FizzBuzz");
        resultStr += "<li>" + n + "= FizzBuzz</li>";
    } else if (n % 3 === 0) {
        console.log("Fizz");
        resultStr += "<li>" + n + "= Fizz</li>";
    } else if (n % 5 === 0) {
        console.log("Buzz");
        resultStr += "<li>" + n + "= Buzz</li>";
    } else {
        console.log(n);
        resultStr += "<li>" + n + "</li>";
    }
    n++;
}

resultStr += "</ul>";
output.innerHTML = resultStr;
// End of Exercise 6
