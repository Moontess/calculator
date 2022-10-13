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
        console.log(full);
        console.log(num);
        console.log(sign);

        let result = full[0];
        for (let x in num) {
          if ([(x = 1)]) {
            switch (num) {
              case sign[x - 1] === "+":
                result += full[x];
                break;

              case sign[x - 1] === "-":
                result -= full[x];
                break;

              case sign[x - 1] === "*":
                result *= full[x];
                break;

              case sign[x - 1] === "/":
                result /= full[x];
                break;
            }
            console.log(result);
            document.getElementById("show").innerText += result;
          }
        }
        break;
    }
  });
});
