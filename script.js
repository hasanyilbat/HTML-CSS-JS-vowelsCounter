const text = document.getElementById("text");
const btn = document.getElementById("btn");
const display = document.getElementById("display");
let count = 0;

btn.addEventListener("click", () => {
  const vowels = ["a", "e", "o", "ö", "u", "ü", "ı", "i"];
  const wordChars = text.value.toLowerCase().split("");
  wordChars.forEach((letter) => {
    if (vowels.includes(letter)) {
      count += 1;
    }
  });
  display.innerHTML = `<span class = "purple">Word is ${text.value}.</span> <span class = "red">Vowels Number is = ${count}</span>`;
  count = 0;
});
