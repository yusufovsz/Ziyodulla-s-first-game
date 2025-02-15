let score = 0;
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
});let score = 0;
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const clickSound = new Audio("click.mp3"); // Ovoz fayli

clickBtn.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
  clickSound.play(); // Tugmachani bosganda ovoz chiqadi
});function changeBackgroundColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

clickBtn.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
  clickSound.play(); // Ovoz chiqarish
  changeBackgroundColor(); // Fon rangini o‘zgartirish
});