import { run } from "./findLottoCombinations.js";

const button = document.getElementById("submit");

function onSubmit() {
  const rawValue = document.getElementById("textareaID").value;
  const convertedValue = JSON.parse(rawValue);
  const combinationValue = parseInt(
    document.querySelector('input[name="combination"]:checked').value
  );
  const result = run(convertedValue, combinationValue);
  console.log(result);
  appendToTable(result);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  onSubmit();
});

function appendToTable(arr) {
  const table = document.querySelector("tbody");
  let textToAppend = "";

  arr.map((inner) => {
    const [combination, times] = inner;
    textToAppend += `<tr>
    <td class="tg-0pky">${combination.join(",")}</td>
    <td class="tg-0pky">${times}</td>
  </tr>`;
  });

  table.innerHTML = textToAppend;
}
