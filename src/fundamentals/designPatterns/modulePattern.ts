// difference between the module pattern and the revealing module pattern:

//in the module pattern it is an IFFE (returning a closure)- returning an object that exposes what you wish to expose

const Module = (function () {
  const speak = (word: string) => {
    return word;
  };

  //assign value to something from outside
  return {
    speak,
  };
})();

console.log(Module.speak('ello'));
