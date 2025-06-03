document.addEventListener("keypress", () => {
  console.log("yeah");
});

setTimeout(() => {
  document.querySelector(".one").setAttribute("style", "display:none;");
}, 3000);
