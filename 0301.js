

function intro0301() {
  var ret= new Object();
  return ret;
}


function quiz0301() {
  var ret= new Object();

  ret.image= `0301.jpg`;
  ret.ocr= `
You have a big exam tomorrow
and
your memory needs to be as sharp
as possible.


What would you do to prepare?


Survey results:
Get a good workout 42%
Eat a good dinner 28%
Stay up studying 16%
Get a good night's sleep 13%
Other 1%


What information would help you trust these survey results?

+ How many people I surveyed?
+ Who I surveyed?
+ How the survey was conducted?`;

  ret.solution= `all of the above`;
  ret.solutionfeedback= `
  Thanks for completing that!
  Good job!`;
  return ret;
}


function answer0301() {
  var ret= new Object();
  return ret;
}


function lesson0301() {
	var ret= new Object();
  ret.lesson= 3;
  ret.number= 1;
  ret.url= 'https://classroom.udacity.com/courses/st095/lessons/55856454/concepts/2094326200923';	
  ret.intro= intro0301();
  ret.quiz= quiz0301();
  ret.answer= answer0301();

  return ret;
}


