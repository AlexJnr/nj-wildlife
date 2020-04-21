var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.zIndex = "100";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
    setTimeout(200);
    mybutton.style.zIndex = "-100";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("content-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function insertModal(id){
  modal.style.display = "block";
  modalImg.src = document.getElementById(id).src;
  captionText.innerHTML = document.getElementById(id).alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}