/* this is the js/jquery code for rthe Crystal Hunter game */


//GLOBAL GAME VARIABLES
var Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
var crystalScore = 0; //the total amount of crysta points gathred in the current round
var Wins = 0; //total count of player wins
var Losses = 0; //total count of player losses
var gatherOn = true; //flag to indicate whether is it currently possible to gather crystals
var winsound = new Audio("win.mp3"); //document.getElementById("winAudio");
var losesound = new Audio("youlose.mp3")  //document.getElementById("loseAudio");

// console.log("test play of sounds");
// winsound.load;
// winsound.play;
// losesound.load;
// losesound.play;

//PROTOTYPE CRYSTAL OBJECT
// xtal = {
//   id: "x0",
//   value: (Math.floor(Math.random() * 12) + 1),

//   resetvalue: function () {
//     //resets the value of object to a random number from 1 to 12
//     console.log("inside resetValue function of xtal object");
//     console.log("value of xtal object at entry of resetValue method " + this.value);
//     var tmp = 0;

//     tmp = (Math.floor(Math.random() * 12) + 1);
//     console.log("new value for xtal object is: " + tmp);
//     this.value = tmp;
//     // return tmp;
//   } //end of resetValue function/method
// }

//OBJECT CONSTRCTOR FOR CRYSTAL OBJECTS
function Xtal(id, val) {
  console.log("making xtal object for id: " + id);
  console.log("val argument is: " + val);
  this.id = id;
  this.value = val;
} //end of Xtal constructor


function updateDisplay() {
  //this function updates the display of scores and other info as game advances
  //update goal points
  document.getElementById("goalscore").innerHTML = Goal;
  //update total wins
  document.getElementById("totalwins").innerHTML = Wins;
  //update total losses
  document.getElementById("totalLosses").innerHTML = Losses;
  // update current crystal points gathered
  document.getElementById("currentgathered").innerHTML = crystalScore;
} // end of updateDisplay function


/* only do work if the document is ready */
$(document).ready(function () {

  //update the screen
  updateDisplay();
  
  
    // create crystal objects x1 through x4
  //Create crystal x1
  var tmp = (Math.floor(Math.random() * 12) + 1);
// FOR TESTING X1 IS ALWAYS 1 POINT  
  var x1 = new Xtal("x1", 1);
  // console.log("new x1 crystal id=" + x1.id + ", value=" + x1.value);

  //Create crystal x2
  tmp = (Math.floor(Math.random() * 12) + 1);
  var x2 = new Xtal("x2", tmp);
  // console.log("new x2 crystal id=" + x2.id + ", value=" + x2.value);

  //Create crystal x3
  tmp = (Math.floor(Math.random() * 12) + 1);
  var x3 = new Xtal("x3", tmp);
  // console.log("new x3 crystal id=" + x3.id + ", value=" + x3.value);

  //Create crystal x4
  tmp = (Math.floor(Math.random() * 12) + 1);
  var x4 = new Xtal("x4", tmp);
  console.log("new x4 crystal id=" + x4.id + ", value=" + x4.value);

  function resetCrystals() {
    // this function resets the value of crystals x1 though x4
    // console.log("inside resetCrystals function");

    var tmp = (Math.floor(Math.random() * 12) + 1);
    //FOR TESTING X1 IS ALWAYS 1 PT
    x1.value = 1;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x2.value = tmp;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x3.value = tmp;
    tmp = (Math.floor(Math.random() * 12) + 1);
    x4.value = tmp;
  } //end of resetCrystals function



  /* image click event NOTE: MOST OF THE  GAME PLAY ACTION IS INSIDE THIS EVENT-HANDLER*/
  $("img").click(function () {

    var tmp = "";
    var xtalPoints=0;

    // get the id of the image clicked
    tmp = $(this).attr("id");

    // get the amount of crystal points from the clicked crystal
    if (tmp=="x1") {
      console.log("x1 produces " + x1.value + " points");
      xtalPoints += x1.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x2") {
      console.log("x2 produces " + x2.value + " points");
      xtalPoints += x2.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x3") {
      console.log("x3 produces " + x3.value + " points");
      xtalPoints += x3.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }
    else if (tmp == "x4") {
      console.log("x4 produces " + x4.value + " points");
      xtalPoints += x4.value;
      crystalScore += xtalPoints;
      updateDisplay();
    }

    //ATTEMPT TO DETERMINE WIN/LOSS
      // test for Win or Loss now
      if (Goal == crystalScore) {
        // console.log("THIS IS A WIN");
        winsound.play;
        //increment win count
        Wins += 1;
        document.getElementById("outcome").style.backgroundColor="lightgreen";
        document.getElementById("outcome-msg").innerHTML = "you WIN! Try again! Game will reset in about 10 seconds."
        document.getElementById("outcome").style.visibility="visible";
        updateDisplay();
  

        // console.log("SET TIMER FOR 10 SECONDS TO RESET GAME");
        setTimeout(resetGame, 1000 * 10);

        //ONCE GAME HAS BEEN RESET, USER CAN JUST START CLICKNG CRYSTALS AGAIN TO PLAY through another round.
      }
      else if (crystalScore > Goal) {
        // console.log("THIS IS A LOSS");
        losesound.play;

        //increment loss count
        Losses +=1;

        // console.log("SET TIMER FOR 10 SECONDS TO RESET GAME");
        setTimeout(resetGame, 1000 * 10);
        //reset the goal score
        Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
        //reset crystal gather score
        crystalScore = 0;
        //show the outcome block
        document.getElementById("outcome").style.backgroundColor = "yellow";
        document.getElementById("outcome-msg").innerHTML= "You lost! game will reset in about 10 seconds";
        document.getElementById("outcome").style.visibility = "visible";
        //update the display
        updateDisplay();
       //reset the crystals
      //  resetCrystals();  //not here, in resetGame function
       //set timer to restart game in 10 seconds.
      }
  


console.log("end of image click event");

} //end of image click event
  ) //end of image click event handler parameter list

  // console.log("CODE AFTER IMAGE CLICK EVENT HANDLER");
  
  


  function resetGame(Win) {
    //this function resets the game variables for another round of play. The "Win" parameter is expected to be a boolean
    //if true, the function is resetting the game after a win, if false, it is resetting the game after a a loss, meh not implementng the win argument, it is not needed, reset is the same whether or not it was a win or loss.
    // console.log("RESETTING GAME!!!!!  ");
  
    //tasks to reset the game, once game has been reset, user can resume clicking crystals to play another round.
    //hide the outcome div
    console.log("hide the outcome div");
    document.getElementById("outcome").style.visibility="hidden";
    //reset the Goal score
     Goal = (Math.floor(Math.random() * 102) + 19); //player's goal score, random 19-120
    //reset crystal gather score
    crystalScore = 0;
    //update the display
    updateDisplay();
    //reset the crystals
    resetCrystals();
    
    // console.log("end of resetting game");
    alert("The game has now been reset!");
  };
  


} //end of document ready function
) //end of document ready evant handler parameter list

