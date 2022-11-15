function Text(str) {
  this.str = str;
}

Text.prototype.left = function (number) {
  return this.str.substring(0, number);
};

Text.prototype.right = function (number) {
  return this.str.substring(number);
};

Text.prototype.charCount = function () {
  return this.str.length;
};

Text.prototype.wordCount = function () {
  return this.str.split(" ").length;
};

Text.prototype.countVowel = function () {
 const count = this.str.match(/[aeiou]/gi).length
 return count
};

Text.prototype.capitalsCount = function () {
const count2 = this.str.match(/[AZERTYUIOPQSDFGHJKLMWXCVBN]/g).length
return count2
}

Text.prototype.append = function (string) {
return this.str + " pipi"
}

Text.prototype.prepend = function (string) {
return "kaka " + this.str
}


// betere manier voor laatste 2

export default Text;
