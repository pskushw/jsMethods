a = [ 1,2,3,1,4,2,3,5,1,1];

function getPairOfSameNumber(ary) {
  var pair = {};
  var pairCount = 0;

  for(var i = 0; i < a.length; i++) {
    if(!pair[a[i]]) {
      pair[a[i]] = [i];
    }else{
      pair[a[i]].push(i); 
      pairCount = pairCount + pair[a[i]].length -1;
    }
  }
   
//   for( var key in pair){
//     pairCount = pairCount + ((pair[key].length - 1)*pair[key].length)/2;
//   }
 
  
  return pairCount;
  
}

console.log(getPairOfSameNumber(a));
