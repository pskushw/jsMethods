


function addElementOfArray(ary) {
  var total = 0;
  if(ary.length > 0){
     total = ary.shift() + addElementOfArray(ary);
  }
  return total;

}

var a = [10,20,30];
console.log(addElementOfArray(a));
