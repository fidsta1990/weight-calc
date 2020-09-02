const input = document.getElementById("lbsInput");
let output = (document.getElementById("output").style.visibility = "hidden");

input.addEventListener("input", () => {
  output = document.getElementById("output").style.visibility = "visible";
  let val = input.value;
  let kg;
  let oz;
  let g;
  kg = document.getElementById("kgOutput").innerHTML = (val / 2.205).toFixed(2);
  oz = document.getElementById("ozOutput").innerHTML = val * 16;
  g = document.getElementById("gramsOutput").innerHTML = (val * 454).toFixed(2);
});
