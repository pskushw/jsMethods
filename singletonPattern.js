
var singleton = (function(){
  var instance;
  
  function init(){
    return {
      randomNumber : Math.random()
    }
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = init();
      }
      return instance;
    }
  }
})();

//check if its singleton
var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();
if(instance1 === instance2){
  console.log("it is singleton"); //its singleton
}
