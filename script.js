const mainInput = document.getElementById("main-input");
const mainForm = document.querySelector("#main-form");
const letterRightOutput = document.querySelector("#letter-right-output");
const letterLeftOutput = document.querySelector("#letter-left-output");

const convertToOneFingerRight = (text) => {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    const convertedLetter = convertOneLetterRight(text[i]);
    newString += convertedLetter;
  }
  return newString;
};

const convertToOneFingerLeft = (text) => {
  let newString = "";
  for (let i = 0; i < text.length; i++) {
    const convertedLetter = convertOneLetterLeft(text[i]);
    newString += convertedLetter;
  }
  return newString;
};

const oneLetterRightMap = {
  q: "w",
  w: "e",
  e: "r",
  r: "t",
  t: "y",
  y: "u",
  u: "i",
  i: "o",
  o: "p",
  p: "[",
  "[": "]",
  "]": "\\",
  a: "s",
  s: "d",
  d: "f",
  f: "g",
  g: "h",
  h: "j",
  j: "k",
  k: "l",
  l: ";",
  ";": "'",
  z: "x",
  x: "c",
  c: "v",
  v: "b",
  b: "n",
  n: "m",
  m: ",",
  ",": ".",
  ".": "/",
  " ": " ",
};

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}

const oneLetterLeftMap = swap(oneLetterRightMap);

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

const convertOneLetterRight = (letter) => {
  const lowerLetter = letter.toLowerCase();
  const newLetter = oneLetterRightMap[lowerLetter];
  if (isUpperCase(letter)) {
    return newLetter.toUpperCase();
  } else if (newLetter === undefined) {
    return "~";
  } else {
    return newLetter;
  }
};

const convertOneLetterLeft = (letter) => {
  const lowerLetter = letter.toLowerCase();
  const newLetter = oneLetterLeftMap[lowerLetter];
  if (isUpperCase(letter)) {
    return newLetter.toUpperCase();
  } else if (newLetter === undefined) {
    return "~";
  } else {
    return newLetter;
  }
};

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const textEntered = mainInput.value;
  const rightString = convertToOneFingerRight(textEntered);
  const leftString = convertToOneFingerLeft(textEntered);
  letterRightOutput.innerText = rightString;
  letterLeftOutput.innerText = leftString;
});
