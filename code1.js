function myfunction(){
    var x = document.getElementById("ptr");
  if (x.className === "slide") {
    x.className += "responsive";
  } else {
    x.className = "slide";
  }
}





var i=0;
var txt='CONNECTIVITY   IS   THE  HUMAN  RIGHT ! SO NEVER GO AWAY .';
var speed=100;
function typing() {
  if(i<txt.length){
    document.getElementById("write").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typing,speed)
  }

}

 

