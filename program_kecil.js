// Buat list array dengan panjang 100
const array = Array.from({ length: 100 }, (_, i) => i + 1);

function isPrimeNumber(number) {
  let tempNumber = number - 1;
  while (tempNumber > 1) {
    let flag = number % tempNumber;
    if (!flag) return false;
    tempNumber--;
  }
  return true;
}

// Looping list array mundur
let printedValue = [];
for (let i = array.length; i > 0; i--) {
  let temp = "";

  // apakah bilangan prima ?
  if (isPrimeNumber(i) && i > 1) continue;

  // bila kelipatan 3 atau 5
  if (i % 3 === 0) temp += "Foo";
  if (i % 5 === 0) temp += "Bar";

  if (temp.length === 0) printedValue.push(i);
  else printedValue.push(temp);
}

// Print Result
console.log(printedValue.join(", "));