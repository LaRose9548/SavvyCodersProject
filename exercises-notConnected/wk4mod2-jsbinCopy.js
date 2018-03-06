var answerLogger1Fn = function(fn){
  var answer = fn();

  $("#answer").text(answer);
};

var answerLoggerFnArray = function(arr){
  $("#answer").append("<ol></ol>");

  arr.forEach( function(fn){
    var answer = fn();

    $("#answer > ol").append("<li>" + answer + "</li>");
  });
};

var answer1 = function () { return "answer 1 result"; };
var answer2 = function () { return "answer 2 result"; };
var answer3 = function () { return "answer 3 result"; };
var answer4 = function () { return "answer 4 result"; };
var answer5 = function () { return "answer 5 result"; };
var answer6 = function () { return "answer 6 result"; };
var fnArray = [answer1, answer2, answer3, answer4,
              answer5, answer6];

var multipliesBy = function(num1){
  return function(num2) {
    return num1 * num2;
  }
};

answerLogger1Fn(function(){
  return "I should appear in div#answer!"
})

answerLoggerFnArray (fnArray);

var times5 = multipliesBy(5);
var multiply5and4 = times5(4); // 20

var times10 = multipliesBy(10);
var multiply10and32 = times10(32); // 320

$("#answer").append("<br>" + multiply5and4 + " " + multiply10and32);

var myArray = [1, 2, 3, 4, 5];
var doubledNumbers = [];

myArray.forEach( function(num){
  doubledNumbers.push( num * 2 );
});

var doubledNumbers2 = myArray.map( function(num){
  return num * 2;
});

$("#answer").append("<br><br>myArray: " + myArray);
$("#answer").append("<br>dblNums: " + doubledNumbers);
$("#answer").append("<br>dblNums2: " + doubledNumbers2);

var oddNumbers = [];

myArray.forEach( function(num){
  if(num % 2 !== 0){
    oddNumbers.push( num );
  }
});

var oddNumbers2 = myArray.filter( function(num) {
    return num % 2 !== 0;
});

$("#answer").append("<br><br>oddNums: " + oddNumbers);
$("#answer").append("<br>oddNums2: " + oddNumbers2);

var myArraySum = 0; // variable that keeps a sum of all values in myArray

myArray.forEach( function(num){
  myArraySum += num;
});

var myArraySum2 = myArray.reduce( function(previousValue, currentValue) {
  return previousValue + currentValue;
});

$("#answer").append("<br><br>sumNums: " + myArraySum);
$("#answer").append("<br>sumNums2: " + myArraySum2);

var doubledNumbers3 = myArray.map(num => num * 2); // [2, 4, 6, 8, 10]
var oddNumbers3 = myArray.filter(num => num % 2 !== 0); // [1, 3, 5]
var myArraySum3 = myArray.reduce( (a, b)=> a + b); // 15

$("#answer").append("<br><br>dblNums3: " + doubledNumbers3);
$("#answer").append("<br>oddNums3: " + oddNumbers3);
$("#answer").append("<br>sumNums3: " + myArraySum3);
