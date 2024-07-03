const consol = document.getElementById('consol');
var input = '';
var output = '';
var errs = [];

const alphaNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const alphaLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphaUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getRandom(number, list) {
  var b = '';
  for (let a=0;a<number;a++) {
      b += list.random();
  }
  return b
}

document.getElementById('go').addEventListener('click', function () {
  generate();
});

function generate() {
  consol.value = '';
  errs = [];
  document.getElementById("status").style.color = "var(--status)";
  window.addEventListener("error", errorlog);

  input = document.getElementById('input').value;
  eval(document.getElementById('script').value);
  function errorlog(Error) {
    if (Error) {
      errs.push(Error);
      document.getElementById("consol").value += Error.message + '\n';
      document.getElementById("status").style.color = "#FF5A5A";
    }
    else return;
  }  
  document.getElementById('output').value = output;
}