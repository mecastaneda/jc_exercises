var foo = (function () {
  function private1() {
    console.log('called private method');
  }
  function public1() {
    console.log('called public method 1');
  }
  function public2() {
    console.log('called public method 2 and this one calls the private method');
    private1();
  }
  return {
    bar: public1,
    test: public2
  }
})();
foo.bar();
foo.test();
