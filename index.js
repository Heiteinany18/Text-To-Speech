const content = document.getElementById("content");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(content.value);
  window.speechSynthesis.speak(utterance);
});

