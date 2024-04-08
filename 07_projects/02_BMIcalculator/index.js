const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else {
    results.innerHTML = "";
    if (weight === "" || weight < 0 || isNaN(weight)) {
      results.innerHTML = "Please enter a valid weight";
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      // show results
      results.innerHTML = `<span>${bmi}</span>`;
      if (bmi < 18.6) {
        results.innerHTML = `<span>you are under weight and your index is ${bmi} </span>`;
      } else if (bmi > 24.9) {
        results.innerHTML = `<span>you are over weight  and your index is ${bmi}</span>`;
      } else {
        results.innerHTML = `<span>congratulations you are healthy and your index is ${bmi}</span>`;
      }
    }
  }
});
