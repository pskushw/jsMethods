/*Arrays: Left Rotation
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .
Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.*/
var a = [1,2,3,4,5]

Array.prototype.rotateArray = function(num) {
  for(var i = 0; i < num ; i++) {
    var removeElement = this.shift();
    this.push(removeElement);
  }
  return this;
}

console.log(a.rotateArray(3));
