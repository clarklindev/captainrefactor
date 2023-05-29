//in the revealing module pattern, reveals only public members, private members are exposed via the public members.
//Instead of defining public members within the return statement, it maps the private members directly to public ones.

// immediately-invoked function expression (IIFE)
const myFunc = (function () {
  let privateVariable = 'private';

  function publicSay(word) {
    return word;
  }

  return {
    publicVariable: privateVariable,
    publicSay: publicSay,
  };
})();

myFunc();
