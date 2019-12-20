/* this is the js/jquery code for rthe Crystal Hunter game */


//GLOBAL GAME VARIABLES
var Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
var crystalScore = 0; //the total amount of crysta points gathred in the current round
var Wins = 0; //total count of player wins
var Losses = 0; //total count of player losses




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






console.log("GOAL SCORE: " + Goal);
console.log("WINS: " +Wins);

function updateDisplay() {
  //this function updates the display of scores and other info as game advances
  console.log("inside updateDisplay function");
  //update goal points
  document.getElementById("goalscore").innerHTML = Goal;
  console.log("GOAL SCORE: "  + Goal);
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

  console.log("player goal score is: " + Goal);
  console.log("player wins: " + Wins);
  console.log("player losses: " + Losses);
  console.log("crystal points: " + crystalScore);

  //update the screen
  updateDisplay();
  console.log("inside updatedisplay");
  console.log("GOAL SCORE " + Goal);
  
  
    // create crystal objects x1 through x4
  //Create crystal x1
  console.log("create crystal x1");
  var tmp = (Math.floor(Math.random() * 12) + 1);
  // console.log("the new random number is: " + tmp);
  console.log("initial x1 creation; CHEAT FOR TESTING, X1 IS ALWAYS 1");
  var x1 = new Xtal("x1", 1);
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
    console.log("CHEAT FOR TESTING X1 IS ALWAYS 1");
    x1.value = 1;
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
    console.log("inside image click event");
    console.log("GOAL SCORE " + Goal);

    var tmp = "";
    var xtalPoints=0;

    // get the id of the image clicked
    tmp = $(this).attr("id");
    // console.log("Image " + tmp + " was clicked");

    // get the amount of crystal points from the clicked crystal
    if (tmp=="x1") {
      console.log("x1 was clicked");
      console.log("x1 produces " + x1.value + " points");
      xtalPoints += x1.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x2") {
      console.log("x2 was clicked");
      console.log("x2 produces " + x2.value + " points");
      xtalPoints += x2.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x3") {
      console.log("x3 was clicked");
      console.log("x3 produces " + x3.value + " points");
      xtalPoints += x3.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x4") {
      console.log("x4 was clicked")
      console.log("x4 produces " + x4.value + " points");
      xtalPoints += x4.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
console.log("CRYSTAL POINTS: " + crystalScore);
console.log("GOAL SCORE: " + Goal);

console.log("ATTEMPTING TO DETERMINE WIN/LOSS");
  console.log("CRYSTAL POINTS: " + crystalScore);
  console.log("GOAL SCORE: " + Goal);
      // test for Win or Loss now
      if (Goal == crystalScore) {
        console.log("THIS IS A WIN");
        alert("You win! Game will restart in 10 seconds");
        //increment wind count
        Wins += 1;
        //reset the goal score
        Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
        //change text in outcome block
        document.getElementById("outcome-msg").innerHTML = "You win! Try again! Game will restart in 10 seconds."
        //show the outcome block
        document.getElementById("outcome").style.visibility = "visible";
        //update the display
        updateDisplay();
        //reset the crystals
        resetCrystals();
        //set timer to restart game in 10 seconds
      }
      else if (crystalScore > Goal) {
        console.log("THIS IS A LOSS");
        alert("you lose! Game will restart in 10 seconds");
        //increment loss count
        Losses +=1;
        //reset the goal score
        Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
        //show the outcome block
        document.getElementById("outcome").style.visibility = "visible";
        //update the display
        updateDisplay();
       //reset the crystals
       resetCrystals();
       //set timer to restart game in 10 seconds.
      }
  



console.log("end of image click event");

} //end of image click event
  ) //end of image click event handler parameter list

  console.log("CODE AFTER IMAGE CLICK EVENT HANDLER");

} //end of document ready function
) //end of document ready evant handler parametr list

// formula to get a random number from 19 to 120:
// tmp = (Math.floor(Math.random() * 102) + 19);

//formual to get a random number between 1 and 12:
// tmp = (Math.floor(Math.random() * 12) + 1);