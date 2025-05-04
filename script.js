function firstWord(str) {
  // your code here
str = str.trim();

  const spaceIndex = str.indexOf(' ');

  // If there's no space, return the whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise, return the substring up to the first space
  return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
