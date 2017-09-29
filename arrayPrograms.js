/*Arrays: Left Rotation
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .
Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.*/
var a = [1,2,3,4,5]
//by loop
Array.prototype.rotateArray = function(num) {
  for(var i = 0; i < num ; i++) {
    var removeElement = this.shift();
    this.push(removeElement);
  }
  return this;
}
//by recursion
Array.prototype.rotateArray = function(num) {
  if(num>0){
    var removedElement = this.shift();
    this.push(removedElement);
    this.rotateArray(num - 1);
  }
  return this;
}

console.log(a.rotateArray(3));
