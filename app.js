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
        sign.push(a);
        full.push(parseInt(num));

        console.log(full);
        console.log(num);
        console.log(sign);

        let result = full[0];
        for (let x = 1; x < full.length; x++) {
          switch (sign[x - 1]) {
            case "+":
              result += full[x];
              break;

            case "-":
              result -= full[x];
              break;

            case "*":
              result *= full[x];
              break;

            case "/":
              result /= full[x];
              break;
          }
        }
        document.getElementById("show").innerText += result;
        break;
    }
  });
});
