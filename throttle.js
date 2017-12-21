function throttle(fn, t){
  var isCalled = false;
  return function(){
    if(!isCalled){
      fn();
      isCalled = true;
      setTimeout(function(){
        isCalled = false;
      },t);
    }
         
  };
}

/* example
var throttled = throttle(function(){
  console.log("hello");
},1000);

throttled();
throttled();

setTimeout(function(){
  throttled();
},3000); 

//or

document.getElementById('btn').addEventListener('click',throttled);
*/
