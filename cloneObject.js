// var a = {
//   isObject: true,
//   name: 'BP',
//   person: {
//     dept: "cobalt"
//   },
//   arrayProp : ["a","b","c", { a: 2}]
// }

// a.name = "XYZ"
// console.log(a.name);
// console.log(a.arrayProp);

function cloneObject (obj){
  var cloneObj = {};
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
          cloneObj[key] = cloneObject(obj[key]);
      }else if(Object.prototype.toString.call(obj[key]) === "[object Array]") {
        var temp = [];
        for(var i = 0; i<obj[key].length; i++){
          if(Object.prototype.toString.call(obj[key][i]) === "[object Object]") {
            temp.push(cloneObject(obj[key]));
          }else{
            temp.push(obj[key][i]);
          }
        }
        cloneObj[key] = temp;
      }
      else {
       cloneObj[key] = obj[key];
      }  
    }
  }
  return cloneObj;
}

// var b = cloneObject(a);
// b.person.dept = "CS";
// b.arrayProp.push("d");
// console.log(b.person.dept);
// console.log(b.arrayProp);
// console.log(a.person.dept);
// console.log(a.arrayProp);
