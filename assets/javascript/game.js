/* this is the js/jquery code for rthe Crystal Hunter game */


//GLOBAL GAME VARIABLES
var Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
var crystalScore = 0; //the total amount of crysta points gathred in the current round
var Wins = 0; //total count of player wins
var Losses = 0; //total count of player losses
var gatherOn = true; //flag to indicate whether is it currently possible to gather crystals
var winsound = new Audio("win.wav");
var losesound = new Audio("youlose.wav");




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






// console.log("GOAL SCORE: " + Goal);
// console.log("WINS: " +Wins);

function updateDisplay() {
  //this function updates the display of scores and other info as game advances
  console.log("inside updateDisplay function");
  //update goal points
  document.getElementById("goalscore").innerHTML = Goal;
  // console.log("GOAL SCORE: "  + Goal);
  //update total wins
  document.getElementById("totalwins").innerHTML = Wins;
  //update total losses
  document.getElementById("totalLosses").innerHTML = Losses;
  // update current crystal points gathered
  document.getElementById("currentgathered").innerHTML = crystalScore;
  // console.log("end of updateDisplay function");
} // end of updateDisplay function


/* only do work if the document is ready */
$(document).ready(function () {
  console.log("inside document ready function");

  // console.log("player goal score is: " + Goal);
  // console.log("player wins: " + Wins);
  // console.log("player losses: " + Losses);
  // console.log("crystal points: " + crystalScore);

  //update the screen
  updateDisplay();
  console.log("inside updatedisplay");
  // console.log("GOAL SCORE " + Goal);
  
  
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
  // console.log("end of x4 creation");

  function resetCrystals() {
    // this function resets the value of crystals x1 though x4
    console.log("inside resetCrystals function");
    // console.log("BEFORE RESET");
    // console.log("x1 value=" + x1.value);
    // console.log("x2 value=" + x2.value);
    // console.log("x3 value=" + x3.value);
    // console.log("x4 value=" + x4.value);

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
    // console.log("AFTER RESET");
    // console.log("x1 value=" + x1.value);
    // console.log("x2 value=" + x2.value);
    // console.log("x3 value=" + x3.value);
    // console.log("x4 value=" + x4.value);

  } //end of resetCrystals function



  
// return;

  /* image click event NOTE: MOST OF THE  GAME PLAY ACTION IS INSIDE THIS EVENT-HANDLER*/
  $("img").click(function () {
    // console.log("an image was clicked");
    console.log("inside image click event");
    // console.log("GOAL SCORE " + Goal);
    if (gatherOn) {
      console.log("gathering is ON");
    }
    else {
      console.log("gathering is OFF");
      return; //gathering is off, do no work in this function
    }

    var tmp = "";
    var xtalPoints=0;

    // get the id of the image clicked
    tmp = $(this).attr("id");
    // console.log("Image " + tmp + " was clicked");

    // get the amount of crystal points from the clicked crystal
    if (tmp=="x1") {
      // console.log("x1 was clicked");
      console.log("x1 produces " + x1.value + " points");
      xtalPoints += x1.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x2") {
      // console.log("x2 was clicked");
      console.log("x2 produces " + x2.value + " points");
      xtalPoints += x2.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x3") {
      // console.log("x3 was clicked");
      console.log("x3 produces " + x3.value + " points");
      xtalPoints += x3.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x4") {
      // console.log("x4 was clicked")
      console.log("x4 produces " + x4.value + " points");
      xtalPoints += x4.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
// console.log("CRYSTAL POINTS: " + crystalScore);
// console.log("GOAL SCORE: " + Goal);

console.log("ATTEMPTING TO DETERMINE WIN/LOSS");
  // console.log("CRYSTAL POINTS: " + crystalScore);
  // console.log("GOAL SCORE: " + Goal);
      // test for Win or Loss now
      if (Goal == crystalScore) {
        console.log("THIS IS A WIN");
        winsound.play;
        // alert("You win! Game will restart in about 10 seconds after you dismiss this alert.");
        //SET TIMER timer to restart game in 10 seconds
        //increment win count
        Wins += 1;
        document.getElementById("outcome").style.backgroundColor="lightgreen";
        document.getElementById("outcome").innerHTML = "you WIN! Try again! Game will reset in about 10 seconds."
        document.getElementById("outcome").style.visibility="visible";
  

        console.log("SET TIMER FOR 15 SECONDS TO RESET GAME");
        // setTimeout(fiveSeconds(true),1000* 5);
        // setTimeout(tenSeconds(true), 1000* 10);
        setTimeout(resetGame(true), 1000 * 15);

        //ONCE GAME HAS BEEN RESET, USER CAN JUST START CLICKNG CRYSTALS AGAIN TO PLAY through another round.

        //disable the crystal click function, so no score is accrued while waiting for reset
        // gatherOn =false;
        //FOLLOWING CODE RESETS GAME AFTER WIN
      }
      else if (crystalScore > Goal) {
        console.log("THIS IS A LOSS");
        losesound.play;
        // alert("you lose! Game will restart in about 10 seconds after you dismiss this alert.");
        //increment loss count
        Losses +=1;

        //disable the crystal click function, so no score is accrued while waiting for reset
        // gatherOn=false;

        console.log("SET TIMER FOR 15 SECONDS TO RESET GAME");
        setTimeout(resetGame(false), 1000 * 15);
        //reset the goal score
        Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
        //reset crystal gather score
        crystalScore = 0;
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

  function fiveSeconds(win) {
    //this function resets a warning in the "outcome" div.
    // the "win" argument, if true, indicates the reset is happenng after a win.
    console.log("fiveSeconds timer event")
    if (win) {
      // alert("resetting after win");
      document.getElementById("outcome").style.backgroundColor="green";
      document.getElementById("outcome").innerHTML = "you WIN! Try again! Game will reset in about 15 seconds."
    }
    else {
      // alert("reset after a loss");
      document.getElementById("outcome").style.backgroundColor="yellow";
      document.getElementById("outcome").innerHTML = "you Lose! Try again! Game will reset in about 15 seconds."
    }
  }

  function tenSeconds(win) {
      // this function modifies the content of the "outcome" div, the "win" argument, if true, indicates the reset is occurring after
      //a win, if false, the reset is occurring after a loss.
      console.log("tenSeconds timer event");
      if (win) {
        // alert("resetting after win");
        document.getElementById("outcome").style.backgroundColor="green";
        document.getElementById("outcome").innerHTML = "you WIN! Try again! Game will reset in about 15 seconds."
      }
      else {
        // alert("reset after a loss");
        document.getElementById("outcome").style.backgroundColor="yellow";
        document.getElementById("outcome").innerHTML = "you Lose! Try again! Game will reset in about 15 seconds."
      }
    }

  function resetGame(Win) {
    //this function resets the game variables for another round of play. The "Win" parameter is expected to be a boolean
    //if true, the function is resetting the game after a win, if false, it is resetting the game after a a loss
    console.log("resetGame function");
    if (Win) { 
      // alert("resetting game after a WIN");
    }
    else {
      // alert("resetting game after a LOSS");
    }
  
  
    //tasks to reset the game, once game has been reset, user can resume clicking crystals to play another round.
    //hide the outcome div
    document.getElementById("outcome").style.visibility="hidden";
    //reset the Goal score
     Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
    //reset crystal gather score
    crystalScore = 0;
    //update the display
    updateDisplay();
    //reset the crystals
    resetCrystals();
    
    //enable the crystal click function
    gatherOn=true;
  };
  


} //end of document ready function
) //end of document ready evant handler parameter list

// formula to get a random number from 19 to 120:
// tmp = (Math.floor(Math.random() * 102) + 19);

//formual to get a random number between 1 and 12:
// tmp = (Math.floor(Math.random() * 12) + 1);