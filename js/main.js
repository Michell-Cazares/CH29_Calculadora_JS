let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnResta = document.getElementById("btnResta");
let btnSuma = document.getElementById("btnSuma");
let btnDivide = document.getElementById("btnDivide");
let btnMultiplica = document.getElementById("btnMultiplica");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnClear = document.getElementById("btnClear");

let txtResultado = document.getElementById("txtResultado");
let txtHistory = document.getElementById("txtHistory");

let historyString = "";

let n1 = -1;
let n2 = -1;

let operacion = null;

btn0.addEventListener("click", function (event) {
  event.preventDefault();
  if (!soloHayCero()) {
    txtResultado.value += 0;
  }
});

btn1.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "1";
  } else {
    txtResultado.value += "1";
  }
});

btn2.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "2";
  } else {
    txtResultado.value += "2";
  }
});

btn3.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "3";
  } else {
    txtResultado.value += "3";
  }
});

btn4.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "4";
  } else {
    txtResultado.value += "4";
  }
});

btn5.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "5";
  } else {
    txtResultado.value += "5";
  }
});

btn6.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "6";
  } else {
    txtResultado.value += "6";
  }
});

btn7.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "7";
  } else {
    txtResultado.value += "7";
  }
});

btn8.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "8";
  } else {
    txtResultado.value += "8";
  }
});

btn9.addEventListener("click", function (event) {
  event.preventDefault();
  if (soloHayCero()) {
    txtResultado.value = "9";
  } else {
    txtResultado.value += "9";
  }
});

btnPunto.addEventListener("click", function (event) {
  event.preventDefault();
  if (!txtResultado.value.includes(".")) {
    txtResultado.value += ".";
  }
});

btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  txtHistory.value = "";
  txtResultado.value = "0";
});

btnSuma.addEventListener("click", function (event) {
  event.preventDefault();
  n1 = txtResultado.value;
  operacion = "+";
  txtResultado.value = "0";
});

btnResta.addEventListener("click", function (event) {
  event.preventDefault();
  n1 = txtResultado.value;
  operacion = "-";
  txtResultado.value = "0";
});

btnDivide.addEventListener("click", function (event) {
  event.preventDefault();
  n1 = txtResultado.value;
  operacion = "/";
  txtResultado.value = "0";
});

btnMultiplica.addEventListener("click", function (event) {
  event.preventDefault();
  n1 = txtResultado.value;
  operacion = "*";
  txtResultado.value = "0";
});

btnIgual.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(n1);
  n2 = txtResultado.value;
  console.log(n2);
  console.log(operacion);
  if (operacion != null) {
    switch (operacion) {
      case "+":
        txtResultado.value = parseFloat(n1) + parseFloat(n2);
        txtHistory.value = n1 + " + " + n2 + " =";
        operacion = null;
        n1 = null;
        n2 = null;
        break;
      case "-":
        txtResultado.value = parseFloat(n1) - parseFloat(n2);
        txtHistory.value = n1 + " - " + n2 + " =";
        operacion = null;
        break;
      case "/":
        txtResultado.value = parseFloat(n1) / parseFloat(n2);
        txtHistory.value = n1 + " ÷ " + n2 + " =";
        operacion = null;
        break;
      case "*":
        txtResultado.value = parseFloat(n1) * parseFloat(n2);
        txtHistory.value = n1 + " x " + n2 + " =";
        operacion.value = null;
        break;
    }
  }
});

function soloHayCero() {
  if (txtResultado.value == "0") {
    return true;
  } else {
    return false;
  }
}
