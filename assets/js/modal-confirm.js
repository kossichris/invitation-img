 // Get the modal
 var modal = document.getElementById("myModal");
 modal.style.display = "none";

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close1")[0];

 // When the user clicks on the button, open the modal
 btn.onclick = function () {
     console.log("block")
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 modal.onclick = function (event) {
     console.log("hello")
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
