import { run } from "./findLottoCombinations.js";

const button = document.getElementById("submit");

function onSubmit() {
  const rawValue = document.getElementById("textareaID").value;
  const firstCleaned = rawValue.trim().split("\n");

  const convertedValue = firstCleaned.map((arr) =>
    arr.split("-").map((a) => parseInt(a))
  );

  // const convertedValue = JSON.parse(JSON.stringify(rawValue));
  const combinationValue = parseInt(
    document.querySelector('input[name="combination"]:checked').value
  );
  const result = run(convertedValue, combinationValue);

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
