/* this is the js/jquery code for rthe Crystal Hunter game */

//PROTOTYPE CRYSTAL OBJECT
xtal = {
  id: "x0",
  value: (Math.floor(Math.random() * 12) + 1),

  resetvalue: function () {
    //resets the value of object to a random number from 1 to 12
    console.log("inside resetValue function of xtal object");
    console.log("value of xtal object at entry of resetValue method " + this.value);
    var tmp = 0;

    tmp = (Math.floor(Math.random() * 12) + 1);
    console.log("new value for xtal object is: " + tmp);
    this.value = tmp;
    // return tmp;
  } //end of resetValue function/method
}

//OBJECT CONSTRCTOR FOR CRYSTAL OBJECTS
function Xtal(id, val) {
  console.log("making xtal object for id: " + id);
  console.log("val argument is: " + val);
  this.id = id;
  this.value = val;
} //end of Xtal constructor



//BEGIN  CRYSTAL OBJECT TESTING
// console.log("BEGIN CRYSTAL OBJECT TESTS");

// console.log("using xtal object:")
// console.log("id and value of xtal: id=" + xtal.id + ", value=" + xtal.value);
// console.log("calling resetValue method of xta");
// xtal.resetValue;
// console.log("after call to resetValue function --id and value of xtal: id=" + xtal.id + ", value=" + xtal.value);


// console.log("next line creates crystal object in var x1");
// var x1 = new Xtal("x1", 100);
// //test the obect value after creation
// console.log("The id and value of the new object: id=" + x1.id +", value=" + x1.value);

// //ADD RESET VALUE METHOD TO A CRYSTAL OBJECT.
// console.log("add resetValue method to x1");
// x1.resetValue = function() {
//   console.log("inside resetValue function of " + this.id + "object");
//   console.log("value of xtal object at entry of resetValue method " + this.value);
//   var tmp=0;

//   tmp = (Math.floor(Math.random() * 12)+1);
//   console.log("new value for xtal object is: " + tmp);
//   this.value = tmp;
// } //end of resetValue method constructor



// //test whether the object has the properties and methods expected
// console.log("next is the x1 crystal object");
// console.log(x1.resetValue);

// //declare the crystal object variables
// console.log("create a new random number for crystal value");
// var tmp = (Math.floor(Math.random() * 12)+1);
// console.log("the new raondom number is: " + tmp);
// console.log("next line creates a new crystal object into existing x1 variable");
// var x1 = new Xtal("x1", tmp);
// console.log("following line logs new x1 crystal");
// console.log(x1);

// //reset the value of x1
// console.log("RESET VALUE OF  x1 manually");
// console.log("value of x1 before manual reset: " + x1.value);
// // x1.resetValue;
// x1.value = 200;
// console.log("value of x1 after manual reset: " + x1.value);

// console.log("crystal x1 has id: " + x1.id);
// console.log("crystal x1 has a vlue of: " + x1.value);

// console.log("END OF CRYSTAL OBJECT TESTS");

//GLOBAL GAME VARIABLES
var scoreGoal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
var crystalScore = 0; //the total amount of crysta points gathred in the current round
var Wins = 0; //total count of player wins
var Losses = 0; //total count of player losses


function updateDisplay() {
  //this function updates the display of scores and other info as game advances
  console.log("inside updateDisplay function");
  //update goal points
  document.getElementById("goalscore").innerHTML = scoreGoal;
  //update total wins
  document.getElementById("totalwins").innerHTML = Wins;
  //update total losses
  document.getElementById("totalLosses").innerHTML = Losses;
  // update current crystal points gathered
  document.getElementById("currentgathered").innerHTML = crystalScore;
  console.log("end of updateDisplay function");
} // end of updateDisplay function


/* only do work if the document is ready */
$(document).ready(function () {
  console.log("inside document ready function");

  console.log("player goal score is: " + scoreGoal);
  console.log("player wins: " + Wins);
  console.log("player losses: " + Losses);
  console.log("crystal points: " + crystalScore);

  //update the screen
  updateDisplay();
  // create crystal objects x1 through x4
  //Create crystal x1
  // console.log("create crystal x1");
  var tmp = (Math.floor(Math.random() * 12) + 1);
  // console.log("the new random number is: " + tmp);
  var x1 = new Xtal("x1", tmp);
  console.log("new x1 crystal id=" + x1.id + ", value=" + x1.value);
  // console.log("end of x1 creation");

  //Create crystal x2
  // console.log("create crystal x2");
  tmp = (Math.floor(Math.random() * 12) + 1);
  // console.log("the new random number is: " + tmp);
  var x2 = new Xtal("x2", tmp);
  console.log("new x2 crystal id=" + x2.id + ", value=" + x2.value);
  // console.log("end of x2 creation");

  //Create crystal x3
  console.log("create crystal x3");
  tmp = (Math.floor(Math.random() * 12) + 1);
  // console.log("the new random number is: " + tmp);
  var x3 = new Xtal("x3", tmp);
  console.log("new x3 crystal id=" + x3.id + ", value=" + x3.value);
  // console.log("end of x3 creation");

  //Create crystal x4
  console.log("create crystal x4");
  tmp = (Math.floor(Math.random() * 12) + 1);
  console.log("the new random number is: " + tmp);
  var x4 = new Xtal("x4", tmp);
  console.log("new x4 crystal id=" + x4.id + ", value=" + x4.value);
  console.log("end of x4 creation");

  function resetCrystals() {
    // this function resets the value of crystals x1 though x4
    console.log("inside resetCrystals function");
    console.log("BEFORE RESET");
    console.log("x1 value=" + x1.value);
    console.log("x2 value=" + x2.value);
    console.log("x3 value=" + x3.value);
    console.log("x4 value=" + x4.value);

    console.log("performing reset");
    var tmp = (Math.floor(Math.random() * 12) + 1);
    x1.value = tmp;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x2.value = tmp;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x3.value = tmp;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x4.value = tmp;

    //do a check on new values
    console.log("AFTER RESET");
    console.log("x1 value=" + x1.value);
    console.log("x2 value=" + x2.value);
    console.log("x3 value=" + x3.value);
    console.log("x4 value=" + x4.value);

  } //end of resetCrystals function



  
// return;

  /* image click event NOTE: MOST OF THE  GAME PLAY ACTION IS INSIDE THIS EVENT-HANDLER*/
  $("img").click(function () {
    // console.log("an image was clicked");

    var tmp = "";

    tmp = $(this).attr("id");
    console.log("Image " + tmp + " was clicked");

  } //end of image click event
  ) //end of image click event handler parameter list


} //end of document ready function
) //end of document ready evant handler

// formula to get a random number from 19 to 120:
// tmp = (Math.floor(Math.random() * 102) + 19);

//formual to get a random number between 1 and 12:
// tmp = (Math.floor(Math.random() * 12) + 1);