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
