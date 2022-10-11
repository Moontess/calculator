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
        full.push(num);
        sign.push(a);
        num = "";
        break;

      case "=":
        if (sign === "+") {
          document.getElementById("show").innerText = Boolean(full + num);
        } else if (sign === "-") {
          document.getElementById("show").innerText = Boolean(full - num);
        } else if (sign === "*") {
          document.getElementById("show").innerText = Boolean(full * num);
        } else if (sign === "/") {
          document.getElementById("show").innerText = Boolean(full / num);
        }

        // document.getElementById("show").innerText = full + num;
        break;

      default:
        break;
    }
  });
});

document.getElementById("show").innerText = calc;
