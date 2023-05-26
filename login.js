//this function toggles the password to visibility//
function showPassword() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//this function build the colors for the login-button//

// Get the button element by its ID
let button = document.getElementById("myButton");

// Add an event listener for the mousehover event
button.addEventListener("mouseover", function () {
  // Change the background color of the button to black
  button.style.backgroundColor = "black";
  // Change the text color of the button to white
  button.style.color = "white";
  myButton.style.borderColor = "white";
});

button.addEventListener("mouseout", function () {
  button.classList.remove("white-border");
  button.style.backgroundColor = "white";
  // Change the text color of the button back to black
  button.style.color = "black";
  myButton.style.borderColor = "black";
});
