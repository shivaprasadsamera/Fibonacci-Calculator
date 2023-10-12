// function for printing fabinocci series
function fabinocci() {
  const input = document.getElementById("input").value;

  let num1 = 0,
    num2 = 1,
    temp,
    sum = 0;

  document.getElementById(
    "output"
  ).innerHTML = `Fibonacci series till <strong> ${input}th </strong> Number is: `;

  for (let i = 1; i <= input; i++) {
    sum += num1;

    document.getElementById("output").innerHTML +=
      "<strong>" + num1 + ", " + "</strong>";

    console.log(num1);

    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }
  document.getElementById("sum").innerHTML =
    `Sum till <b> ${input}th </b> Number is : ` +
    "<strong>" +
    sum +
    "</strong>";
}

//function for clear all
function clearAll() {
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("sum").innerHTML = "";
}
