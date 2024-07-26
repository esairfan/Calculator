let string = "";
let resultCalculated = false;
let buttons = document.querySelectorAll(".button");

const factorial = (a) => {
  if (a == 0) return 1;
  return a * factorial(a - 1);
};

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector("input").style.border = "0px";
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
        resultCalculated = true;
      } catch (error) {
        document.querySelector("input").value = "Error";
        string = "";
        document.querySelector("input").style.border = "3px solid red";
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "!") {
      let num = parseInt(display.value);
      if (!isNaN(num) && num >= 0) {
        string = factorial(num).toString();
        display.value = string;
        resultCalculated = true;
      } else {
        document.querySelector("input").value = "Error";
        string = "";
        document.querySelector("input").style.border = "3px solid red";
      }
    } else {
      console.log(e.target);
      if (
        resultCalculated &&
        (!isNaN(e.target.innerHTML) || e.target.innerHTML == ".")
      ) {
        string = e.target.innerHTML;
      } else {
        string += e.target.innerHTML;
      }
      document.querySelector("input").value = string;
      resultCalculated = false;
    }
  });
});
