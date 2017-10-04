//return count of pair in array is equal to k. Pair should be unique and should not be vise-varsa
function getPair(a,k) {
  var pair = {};
  for(var i = 0; i < a.length-1; i++) {
    for(var j = i+1 ; j < a.length ; j++) {
      if((a[i]+ a[j]) === k && pair[a[i]] === undefined && pair[a[j]] === undefined) {
        pair[a[i]] = a[j];
      }
    }
  }
  return Object.keys(pair).length;
}

var a = [6,6,3,9,36,3,9,4,3];
k = 12;
console.log(getPair(a,k));
