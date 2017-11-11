/* sort array which contains only boolean values */
function sortbooleanArray(ary) {
  var x = 0;
  var y = ary.length - 1;
  while(x != y){
    if(ary[x] === 0){
      x++;
    }
    if(ary[x] === 1){
      if(ary[y]  === 1){
        y--;
      }else if(ary[y] === 0){
        var temp = ary[y];
        ary[y] = ary[x];
        ary[x] = temp;
        x++;
      }
    }
  }
  return ary;
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
