const age = document.getElementById("age");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (age.value && age.value <= 12) {
    document.write(`<div style="display: flex; justify-content: center; align-items: center; margin-top:8%">
    <img src="https://www.1zoom.ru/big2/387/295303-alexfas01.jpg" style="width: 648px; height: 480px;">
</div>`);
  } else {
    document.write(`<div style="display: flex; justify-content: center; align-items: center; margin-top:8%">
    <img src="https://w.forfun.com/fetch/1e/1ea44292cf7f470300cad62e5b5633f1.jpeg" style="width: 648px; height: 480px;">
</div>`);
  }
});
