//your code here
const textbox = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

textbox.addEventListener("input", updateLetterCount);

function updateLetterCount() {
  letterCount.innerHTML = textbox.value.length;
}