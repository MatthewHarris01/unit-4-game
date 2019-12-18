/* this is the js/jquery code for rthe Crystal Hunter game */


xtal = {
  id: "x0",
  value: (Math.floor(Math.random() * 12)+1),

  resetvalue : function () {
    //resets the value of object to a random number from 1 to 12
      console.log("inside resetValue function of xtal object");
      console.log("value of xtal object at entry of resetValue method " + this.value);
      var tmp=0;

      tmp = (Math.floor(Math.random() * 12)+1);
      console.log("new value for xtal object is: " + tmp);
      this.value = tmp;
      // return tmp;
  } //end of resetValue function/method
}

//constructor function  for xtal objects
function Xtal(id,val) {
  console.log("making xtal object for id: " + id);
  console.log("val argument is: " + val);
  this.id = id;
  this.value =val;
} //end of Xtal constructor

console.log("next line creates object x1");
var x1 = new Xtal("x1", 100);
//test the obect value after creation
console.log("The value of x1 after creation is: " + x1.value);

x1.resetValue = function() {
  console.log("inside resetValue function of " + this.id + "object");
  console.log("value of xtal object at entry of resetValue method " + this.value);
  var tmp=0;

  tmp = (Math.floor(Math.random() * 12)+1);
  console.log("new value for xtal object is: " + tmp);
  this.value = tmp;
}

//declare the crystal object variables
var tmp = (Math.floor(Math.random() * 12)+1);
console.log("value of new x1 crystal object is: " + tmp);
var x1 = new Xtal("x1", tmp);


console.log("crystal x1 has id: " + x1.id);
console.log("crystal x1 has a vlue of: " + x1.value);



/* only do work if the document is ready */
$(document).ready(function() { 
  console.log("inside document ready function");

  //testing xtal object
  console.log("id of x1 object is " + x1.id);
  console.log("value of x1 BEFORE call to resetValue is: " + x1.value);
  x1.resetvalue;
  console.log("value of x1 AFTER call to resetValue is: " + x1.value);

/* image click event */
$("img").click(function(){
  // console.log("an image was clicked");

  var tmp = "";

  tmp = $(this).attr("id");
  console.log("Image " + tmp + " was clicked");

} //end of image click event
) //end of image click event handler


} //end of document ready function
) //end of document ready evant handler

// formula to get a random number from 19 to 120:
tmp = (Math.floor(Math.random() * 102)+19);

//formual to get a random number between 1 and 12:
tmp = (Math.floor(Math.random() * 12)+1);