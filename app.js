let full = [],
  sign = [],
  num = "";
document.querySelectorAll("button").forEach((each) => {
  each.addEventListener("click", function () {
    let a = this.innerText;

    if (document.getElementById("show").innerText === "0") {
      document.getElementById("show").innerText = a;
    } else {
      document.getElementById("show").innerText += a;
    }
    switch (a) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        num += a;
        break;

      case "-":
      case "+":
      case "*":
      case "/":
        full.push(parseInt(num));
        sign.push(a);
        num = "";
        break;

      case "=":
        full.push(parseInt(num));
        num = "";

        let result = full[0];
        for (let x in full) {
          if (x > 0) {
            if (sign[x - 1] === "+") {
              result += full[x];
            } else if (sign[x - 1] === "-") {
              result -= full[x];
            } else if (sign[x - 1] === "/") {
              result /= full[x];
            } else if (sign[x - 1] === "*") {
              result *= full[x];
            }
          }
          document.getElementById("show").innerText += result;
        }
        break;
    }
  });
});
