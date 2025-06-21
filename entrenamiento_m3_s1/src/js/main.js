// Select the form and DOM elements
const forms = document.getElementById("formAge");
let result = document.getElementById("result");
let message = document.getElementById("message_div");
let p = document.createElement("p");

// Handle the form submit event
forms.addEventListener("submit", (e) => {
  const namePerson = e.target[0].value; // Get the entered name
  const agePerson = parseInt(e.target[1].value); // Get the entered age

  // Check if the age is a number
  if (isNaN(agePerson)) {
    p.innerText = "please enter a valid age in numbers";
    message.appendChild(p);
  }
  // Check if the age is less than or equal to zero
  else if (agePerson <= 0) {
    message.style.backgroundColor = "rgba(194, 0, 0, 0.582)";
    message.style.border = "1px solid red";
    p.innerText = "please enter a positive or different number to 0";
    message.appendChild(p);
  }
  // Message for minors
  else if (agePerson < 18) {
    message.style.backgroundColor = "transparent";
    message.style.border = "1px solid white";
    p.innerText = `Hello, ${namePerson} You are a minor, keep growing and learning about the code.`;
    message.appendChild(p);
  }
  // Message for adults
  else {
    message.style.backgroundColor = "transparent";
    message.style.border = "1px solid white";
    p.innerText = `Hello, ${namePerson} You're of legal age, prepare yourself for great opportunities in the world of programming.`;
    message.appendChild(p);
  }

  // Prevent page reload
  e.preventDefault();
});
