function f1() {
    setTimeout(function(){
        console.log('f1');
    }, 500);
}
function f2() {
    setTimeout(function(){
        console.log('f2');
    }, 1000);
}
function f3() {
    setTimeout(function(){
        console.log('f3');
    }, 800);
}

f1();
f2();
f3();
console.log('Olá Mundo!');

/**************************************************************/

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }
  
  function f4(callback) {
    setTimeout(function() {
      console.log('f4');
      if (callback) callback();
    }, rand());
  }
  
  function f5(callback) {
    setTimeout(function() {
      console.log('f5');
      if (callback) callback();
    }, rand());
  }
  
  function f6(callback) {
    setTimeout(function() {
      console.log('f6');
      if (callback) callback();
    }, rand());
  }
  
  f4(f4Callback);
  
  function f4Callback() {
    f5(f5Callback);
  }
  
  function f5Callback() {
    f6(f6Callback);
  }
  
  function f6Callback() {
    console.log('Olá mundo!');
  }
  