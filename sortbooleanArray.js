/* sort array which contains only boolean values */
function sortbooleanArray(a) {
  var x = 0;
  var y = a.length-1;
  while(x != y) {
    if(a[x] === 0) {
      x++;
    }
    if(a[x] === 1 && a[y] === 1){
      y--;
    }
    if(a[x] === 1 && a[y] === 0){
      var t = a[x];
      a[x] = a[y];
      a[y] = t;
      x++;
    }
  }
  
  return a;
}

console.log(sortbooleanArray([0,0,1,0,1,1,0,1,0,1,1,0]));


//Separate even and odd integers in a given array
var a = [1,2,3,4,6,8,7,12]

function separateEvenAndOdd(ary) {
  var x = 0;
  var y = ary.length - 1;
  while(x != y){
    if(ary[x]%2 === 0){
      x++;
    }
    if(ary[x]%2 === 1){
      if(ary[y]%2 === 1){
        y--;
      }else if(ary[y]%2 === 0){
        var temp = ary[y];
        ary[y] = ary[x];
        ary[x] = temp;
        x++;
        y--;
      }
    }
  }
  return ary;
}

console.log(separateEvenAndOdd(a));
