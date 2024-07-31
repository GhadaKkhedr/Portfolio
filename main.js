var lastActive ="About";

function makeActive(e,ID){
// set side bar active
// set div active
//set other side bar inactive
//set other div none


    var otherActivelink= document.getElementsByClassName("active");

   
    //turn other link inactive
        otherActivelink[0].className="";
        document.getElementById(lastActive).style.display="none";
    //turn me active
         e.className ="active";
         lastActive = ID;

    //show div 
  
     document.getElementById(ID).style.display="block";

   

}
