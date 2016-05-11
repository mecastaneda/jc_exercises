function foo(args) {
  for (var i = arguments.length-1; i >= 0; i--) {
    if(arguments[i] === 2) {
      console.log("2 is passed as a parameter");
      return;
    }
  }
  console.log("2 is not passed as a parameter");
}

foo(1, 2, 3);
foo(3, 34, "2");
