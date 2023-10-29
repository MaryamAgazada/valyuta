const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
let bodyEl = document.querySelector("body");
const pEl = document.getElementById("result");
const manatEl = document.getElementById("manat");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const amountId = document.getElementById("amountId");
   if (manatEl.value < 0) {
    bodyEl.style.backgroundColor = "red";
  }
  else if(manatEl.value > 0){
    bodyEl.style.backgroundColor = "green";
  }
  if (amountId.value === "euro") {
    pEl.textContent = manatEl.value * 0.55;
  } else if (amountId.value === "dollar") {
    pEl.textContent = manatEl.value * 0.59;
  } else if (amountId.value === "riyal") {
    pEl.textContent = manatEl.value * 24852.94;
  } else if (amountId.value === "sterlin") {
    pEl.textContent = manatEl.value * 0.48;
  } else if (amountId.value === "sterlin") {
    pEl.textContent = manatEl.value * 0.48;
  } else if (amountId.value === "yuan") {
    pEl.textContent = manatEl.value * 4.04;
  } 
});
resetBtn.addEventListener("click", function (event) {
  event.preventDefault();
  pEl.textContent = 0;
});
