let messengerbg = document.querySelector(".messenger-bg");
let messenger = document.querySelector(".messenger");
let openMessengerButton = document.querySelectorAll(".open-messenger");
let closeMessengerButton = document.querySelector(".close-messenger");
// const send = document.getElementById("send");

openMessengerButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    messengerbg.classList.add("active");
    messenger.classList.add("active");
  });
});

closeMessengerButton.addEventListener("click", () => {
  messengerbg.classList.remove("active");
  messenger.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === messengerbg) {
    messengerbg.classList.remove("active");
    messenger.classList.remove("active");
  }
});
